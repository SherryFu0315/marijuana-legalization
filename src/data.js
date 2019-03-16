import Papa from 'papaparse'

const list = [
  {
    study: 1,
    condition: 1,
    name: 'No bot condition',
  },
  {
    study: 1,
    condition: 5,
    name: 'Mindful + strict',
  },
  {
    study: 1,
    condition: 4,
    name: 'Mindful + lenient',
  },
  {
    study: 1,
    condition: 3,
    name: 'Routine + strict',
  },
  {
    study: 1,
    condition: 2,
    name: 'Routine + lenient',
  },
  {
    study: 2,
    condition: 2,
    name: 'Moderation  bot',
  },
  {
    study: 2,
    condition: 1,
    name: 'Selection bot'
  },
]

const getQueryVariable = (variable) => {
  const query = window.location.hash.substring(window.location.hash.indexOf('?') + 1);
  const vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return ''
}

const comments = []
const replies = {}
const peerReviews = []

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default () => new Promise((resolve) => {
  const id = getQueryVariable('id')
  const which = parseInt(atob(id), 10)
  console.log(which)
  const c = list[which]

  let isCommentsLoaded = false
  let isRepliesLoaded = false
  let isPeerReviewLoaded = c.study === 2
  const finished = () => {
    if (isCommentsLoaded && isRepliesLoaded && isPeerReviewLoaded) {
      shuffle(comments)
      return resolve(c)
    }
    return
  }

  fetch(`static/${c.study}/comments.csv`)
    .then((response) => {
      return response.text()
    })
    .then((text) => {
      Papa.parse(text, { header: true }).data
        .forEach((item) => {
          const { comment_text, down_count, up_count, message_id, nickname, user_id, Selection_bot, Moderation_bot } = item
          comments.push({
            content: comment_text,
            like: up_count,
            dislike: down_count,
            id: message_id,
            nickname,
            uid: user_id,

            flagInfo: c.study === 2 ? c.condition === 1 ? Selection_bot : Moderation_bot : undefined,
          })
        })
      isCommentsLoaded = true
      finished()
    })
  
  fetch(`static/${c.study}/replies.csv`)
    .then((response) => {
      return response.text()
    })
    .then((text) => {
      Papa.parse(text, { header: true }).data.forEach(({ reply_text, message_id_default, reply_id, reply_nickname, reply_down_count, reply_up_count, reply_uid, }) => {
        const reply = {
          content: reply_text,
          like: reply_up_count,
          dislike: reply_down_count,
          id: reply_id,
          nickname: reply_nickname,
          uid: reply_uid,

          parentId: message_id_default,
        }

        if (replies[message_id_default]) {
          replies[message_id_default].push(reply)
        } else {
          replies[message_id_default] = [reply]
        }
      })
      isRepliesLoaded = true
      finished()
    })

    if (c.study === 1) {
      fetch(`static/1/peer-review.csv`)
        .then((response) => {
          return response.text()
        })
        .then((text) => {
          Papa.parse(text, { header: true }).data
            .forEach((item) => {
              const { comment_text, Mindful_strict, Routine_strict } = item
              peerReviews.push({
                content: comment_text,
                bot: c.condition === 2 ? item['Routine_lenient '] : c.condition === 3 ? Routine_strict : c.condition === 4 ? item['Mindful_lenient '] : c.condition === 5 ? Mindful_strict : undefined,
              })
            })
          isPeerReviewLoaded = true
          finished()
        })
    }
})

export const getComments = () => comments
export const getReplies = (commentId) => replies[commentId] || []
export const updateReply = (commentId, replyId, key, value) => {
  const reply = replies[commentId].find(({ id }) => id === replyId)
  reply[key] = value
}
export const getPeerReviews = () => peerReviews
