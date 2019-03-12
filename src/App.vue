<template>
  <div id="app">
    <Slides v-if="!isSlidesRead" :done="markSlidesRead"/>
    <template v-else>
      <Login v-if="!isUserinfoSet" :saveUserinfo="setUserinfo"/>
      <div class="main" v-else>
        <NewsArticle />
        <!-- <Statement/> -->
        <hr>
        <Comments :user="user" :savedData="savedData"/>
        <Dialog v-if="shouldShowDialog" :visible="shouldShowDialog"/>
      </div>
    </template>
  </div>
</template>

<script>
import firebase from 'firebase'

import Slides from './components/Slides.vue'
import Login from './components/Login.vue'
import NewsArticle from './components/NewsArticle.vue'
// import Statement from './components/Statement.vue'
import Comments from './components/Comments.vue'
import Dialog from './components/Dialog.vue'

import emitter from './emitter'
import config from './config'

export default {
  name: 'app',
  components: {
    Slides,
    Login,
    NewsArticle,
    // Statement,
    Comments,
    Dialog,
  },
  data() {
    return {
      isSlidesRead: true,
      isUserinfoSet: false,
      user: {
        nickname: 'chengkang',
        password: '123456',
        id: undefined,
      },
      savedData: {},
      shouldShowDialog: false,
    }
  },
  mounted() {
    emitter.on('click-on-post', () => {
      this.shouldShowDialog = true
    })
    emitter.on('done', () => {
      this.shouldShowDialog = false
      emitter.emit('show-comments')
    })
  },
  methods: {
    markSlidesRead() {
      this.isSlidesRead = true
    },
    setUserinfo(nickname, password) {
      const id = btoa(`${nickname}-${password}`)
      this.user = { nickname, password, id }

      config.user = { nickname, password, id }

      firebase.database().ref(`${id}/case`).set({
        study: config.study,
        condition: config.name,
      }).then(() => {
        firebase.database().ref(id).once('value').then((snapshot) => {
          const data = snapshot.val() || {}
          this.savedData = data
          this.isUserinfoSet = true
        })
      })

      window.FS.identify(id, {
        displayName: nickname,
        password,
      });
    },
  },
}
</script>

<style scoped>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 32px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 52rem;
}
hr {
  width: 100%;
  margin: 32px 0;
}
</style>