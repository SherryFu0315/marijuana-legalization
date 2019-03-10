<template>
  <section class="comments">
    <ReplyBox :user="user" :main="true" v-if="shouldShowReplyBox"/>
    <template v-if="shouldShowComments">
      <Comment v-for="comment in comments" :key="comment.id" :comment="comment" :user="user" :saved-data="savedData"/>
    </template>
  </section>
</template>

<style scoped>
.comments {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  /* max-width: 39rem; */
  width: 100%;
}
</style>

<script>
import firebase from 'firebase'
import Comment from './Comment.vue'
import ReplyBox from './ReplyBox.vue'
import { getComments } from '../data'
import emitter from '../emitter'

export default {
  name: 'comments',
  components: {
    Comment,
    ReplyBox,
  },
  props: ['user', 'savedData'],
  data() {
    const { nickname, id } = this.user

    const comments = getComments()

    if (this.savedData.replies) {
      Object.keys(this.savedData.replies).forEach((replyId) => {
        const reply = this.savedData.replies[replyId]
        if (!reply.commentId && !reply.replyId) {
          const content = Object.values(reply.content)[Object.values(reply.content).length - 1];

          comments.push({
            content,
            id: replyId,
            nickname,
            uid: id,
            like: 0,
            dislike: 0,
            type: 0,
            byCurrentUser: true,
          })
        }
      })
    }

    const done = (this.savedData.actions && Object.keys(this.savedData.actions).find((key) => this.savedData.actions[key].type === 'done'))

    return {
      comments,
      shouldShowComments: done,
      shouldShowReplyBox: !done,
    }
  },
  mounted() {
    emitter.on('done', () => {
      this.shouldShowReplyBox = false
    })
    emitter.on('show-comments', () => {
      this.shouldShowComments = true
    })
    emitter.on('post', ({ commentId, replyId, comment }) => {
      if (commentId === undefined && replyId === undefined) {
        const ref = `${this.user.id}/replies/`
        const newKey = (new Date()).getTime()
        firebase.database().ref(ref + newKey).set({
          content: {
            [firebase.database().ref().child(ref).push().key]: comment.content,
          },
        }).then(() => {
          this.comments.push({
            ...comment,
            id: newKey,
          })
          this.$nextTick(() => {
            const scrollingElement = (document.scrollingElement || document.body)
            scrollingElement.scrollTo({
              top: scrollingElement.scrollHeight,
              behavior: "smooth"
            })
          })
        })
      }
    })
  },
}
</script>
