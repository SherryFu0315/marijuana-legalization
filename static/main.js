// Initialize Firebase
var config = {
  apiKey: "AIzaSyABu7_D7zwu9Eu0bho9B8J6x9xaH2T0OmA",
  authDomain: "bot-experiment.firebaseapp.com",
  databaseURL: "https://bot-experiment.firebaseio.com",
  projectId: "bot-experiment",
  storageBucket: "",
  messagingSenderId: "675533221024"
}
firebase.initializeApp(config)

const list = [
  {
    hasFlag: false,
  },
  {
    hasFlag: true,
    hasBot: true,
    key: 'V/Acc/HU',
  },
  {
    hasFlag: true,
    hasBot: true,
    key: 'V/Acc/LU',
  },
  {
    hasFlag: true,
    hasBot: true,
    key: 'V/Inacc/HU',
  },
  {
    hasFlag: true,
    hasBot: true,
    key: 'V/Inacc/LU',
  },
  {
    hasFlag: true,
    key: 'IV/Acc/HU',
  },
  {
    hasFlag: true,
    key: 'IV/Acc/LU',
  },
  {
    hasFlag: true,
    key: 'IV/Inacc/HU',
  },
  {
    hasFlag: true,
    key: 'IV/Inacc/LU',
  },
]

const getRandomInt = () => {
  return Math.floor(Math.random() * Math.floor(9));
}

const getQueryVariable = (variable) => {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return ''
}

Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  data: {
    which: null,
    condition: null,
    hasFlag: null,
    botType: null,
    strictness: null,
    comments: [],
    allReplies: [],
    selectedComment: null,
    showBotDialog: null,
    showSlides: true,
    currentSlide: 1,
    lastSlide: 9,
    showReportDialog: false,
    showUserDialog: true,
    showingTooltip: false,
    userData: {
      case: undefined,
      email: '',
      comments: [],
      up: [],
      down: [],
      bot: [],
      reports: [],
    },
  },
  computed: {
    replies() {
      const c = list[this.which]
      return this.allReplies.filter((item) => item.comment_text === this.selectedComment.comment_text && item.Condition === c.condition)
    },
    userEmail() {
      return this.userData.email
    },
    isLastSlide() {
      return this.currentSlide === this.lastSlide
    },
  },
  watch: {
    userEmail(v) {
      firebase.database().ref(btoa(`${this.userData.email}_${this.which}`)).once('value').then((snapshot) => {
        const data = snapshot.val()
        if (!data) return
        Object.keys(data).forEach((key) => {
          if (key === 'email') return
          Vue.set(this.userData, key, data[key])
        })
      })
    }
  },
  created() {
    this.which = parseInt(atob(getQueryVariable('id')), 10)

    if (this.which === 0) {
      this.lastSlide = 9
    } else {
      this.lastSlide = 10
    }

    const c = list[this.which]
    this.c = c
    Vue.set(this.userData, 'case', Object.assign({ id: this.which, code: getQueryVariable('id') }, c))

    fetch('static/comments.csv')
      .then((response) => {
        return response.text()
      })
      .then((text) => {
        this.comments = Papa.parse(text, { header: true }).data
          .map((item) => {
            return Object.assign({}, item, { hasFlag: c.hasFlag, hasBot: c.hasBot, flagInfo: c.hasFlag && item[c.key] })
          })
      })

    fetch('static/replies.csv')
      .then((response) => {
        return response.text()
      })
      .then((text) => {
        this.allReplies = Papa.parse(text, { header: true }).data
      })
  },
  methods: {
    showTooltip(e) {
      const ele = document.getElementById('tooltip')
      ele.style.left = `${e.pageX - 340}px`
      ele.style.top = `${e.pageY - 20}px`
      this.showingTooltip = true
    },
    hideTooltip() {
      this.showingTooltip = false
    },
    login() {
      if (this.validateEmail(this.userData.email)) {
        this.showUserDialog = false
      }
    },
    logout() {
      Vue.set(this.userData, 'email', '')
      Vue.set(this.userData, 'comments', [])
      Vue.set(this.userData, 'up', [])
      Vue.set(this.userData, 'down', [])
      Vue.set(this.userData, 'bot', [])
      Vue.set(this.userData, 'reports', [])
      this.showUserDialog = true
    },
    showRepliesOf(comment) {
      this.selectedComment = comment
    },
    replyTo(comment, reply = null) {
      if (comment) {
        this.selectedComment = comment
      }
      if (reply) {
        this.selectedReply = reply
      }
      Vue.nextTick().then(() => {
        this.$refs.reply.value = `@${comment ? comment.nickname : reply.reply_nickname} `
      }).then(() => {
        this.$refs.reply.focus()
      })
    },
    closeModal() {
      this.selectedComment = null
    },
    vote(type, mid = null, rid = null) {
      if (!this.beforeAction()) return

      let votedIndex = this.userData[type].findIndex((item) => item.mid === mid && item.rid === rid)
      if (votedIndex !== -1) {
        Vue.delete(this.userData[type], votedIndex)
      } else {
        this.userData[type].push({
          mid,
          rid,
        })

        // remove opposite vote
        const oppositeType = type === 'up' ? 'down' : 'up'
        const oppositeVotedIndex = this.userData[oppositeType].findIndex((item) => item.mid === mid && item.rid === rid)
        if (oppositeVotedIndex !== -1) {
          Vue.delete(this.userData[oppositeType], oppositeVotedIndex)
        }
      }
      this.save()
    },
    isVoted(type, mid = null, rid = null) {
      return this.userData[type].findIndex((item) => (item.mid || null) === mid && (item.rid || null) === rid) !== -1
    },
    replyCount(comment) {
      return parseInt(comment.reply_count, 10) + this.userData.comments.filter((item) => item.mid === comment.message_id).length
    },
    feedback(feedback, mid = null) {
      if (!this.beforeAction()) return
      if (feedback === 'Change') {
        this.userData.bot.splice(this.userData.bot.findIndex((item) => item.mid === mid), 1)
      } else {
        this.userData.bot.push({
          mid,
          feedback,
        })
        this.showBotDialog = true
        this.currentMID = mid
      }
      this.save()
    },
    isFeedbackSet(mid = null) {
      return this.userData.bot.find((item) => (item.mid || null) === mid)
    },
    report(mid, flag = true) {
      if (!this.beforeAction()) return
      if (flag) {
        this.userData.reports.push(mid)
        this.showReportDialog = true
      } else {
        this.userData.reports.splice(this.userData.reports.findIndex((id) => id === mid), 1)
      }
      this.save()
    },
    isReported(mid) {
      return this.userData.reports.includes(mid)
    },
    moreFeedback(feedback) {
      const idx = this.userData.bot.findIndex((item) => item.mid === this.currentMID)
      if (idx === -1) return
      Vue.set(this.userData.bot[idx], 'strictness', feedback)
      this.showBotDialog = false
      this.currentMID = null
      this.save()
    },
    validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    post() {
      if (!this.beforeAction()) return
      if ((this.selectedComment ? this.$refs.reply.value : this.$refs.comment.value).trim() === '') {
        alert('Content cannot be empty.')
        return
      }
      this.userData.comments.push({
        mid: this.selectedComment ? this.selectedComment.message_id : null,
        rid: this.selectedReply ? this.selectedReply.reply_id : null,
        content: this.selectedComment ? this.$refs.reply.value : this.$refs.comment.value,
        createdAt: (new Date()).toLocaleString("en-US", { year: '2-digit', month: 'numeric', day: 'numeric', hour: 'numeric', minute: '2-digit',}),
      })
      this.selectedComment ? this.$refs.reply.value = '' : this.$refs.comment.value = ''
      this.save()
      const scrollingElement = (document.scrollingElement || document.body)
      scrollingElement.scrollTo({
        top: scrollingElement.scrollHeight,
        behavior: "smooth"
      })
    },
    beforeAction() {
      if (!this.validateEmail(this.userData.email)) {
        alert('Please enter a valid email first.')
        if (this.selectedComment) {
          this.$refs.replyEmail.focus()
        } else {
          this.$refs.commentEmail.focus()
        }
        return false
      }
      return true
    },
    save() {
      if (this.userData.email) {
        firebase.database().ref(btoa(`${this.userData.email}_${this.which}`)).set(this.userData)
      }
    },
    prevSlide() {
      if (this.currentSlide === 1) {
        return
      }
      this.currentSlide -= 1
    },
    nextSlide() {
      if (this.currentSlide === this.lastSlide) {
        this.showSlides = false
        return
      }
      this.currentSlide += 1
    },
  },
})