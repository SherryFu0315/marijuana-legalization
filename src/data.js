import Papa from 'papaparse'

const list = [
  {
    hasFlag: false,
    type: 0,
  },
  {
    type: 1,
    key: 'V/Acc/HU',
  },
  {
    type: 1,
    key: 'V/Acc/LU',
  },
  {
    type: 1,
    key: 'V/Inacc/HU',
  },
  {
    type: 1,
    key: 'V/Inacc/LU',
  },
  {
    type: 2,
    key: 'IV/Acc/HU',
  },
  {
    type: 2,
    key: 'IV/Acc/LU',
  },
  {
    type: 2,
    key: 'IV/Inacc/HU',
  },
  {
    type: 2,
    key: 'IV/Inacc/LU',
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

export default () => new Promise((resolve) => {
  const which = parseInt(atob(getQueryVariable('id')), 10)
  const c = list[which]

  let isCommentsLoaded = false
  let isRepliesLoaded = false
  const finished = () => {
    if (isCommentsLoaded && isRepliesLoaded) {
      return resolve(which)
    }
    return
  }

  fetch('static/comments.csv')
    .then((response) => {
      return response.text()
    })
    .then((text) => {
      Papa.parse(text, { header: true }).data
        .forEach((item) => {
          const { comment_text, down_count, up_count, message_id, nickname, user_id } = item
          comments.push({
            content: comment_text,
            like: up_count,
            dislike: down_count,
            id: message_id,
            nickname,
            uid: user_id,

            type: c.type,
            flagInfo: c.type !== 0 ? (item[c.key] || undefined) : undefined,
          })
        })
      isCommentsLoaded = true
      finished()
    })
  
  fetch('static/replies.csv')
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
})

export const getComments = () => comments
export const getReplies = (commentId) => replies[commentId] || []
