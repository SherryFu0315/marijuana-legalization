<template>
  <section class="comments">
    <ReplyBox :user="user" :main="true"/>
    <Comment v-for="comment in comments" :key="comment.id" :comment="comment" :user="user" :saved-data="savedData"/>
  </section>
</template>

<style scoped>
.comments {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
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

    return {
      comments,
    }
  },
  mounted() {
    emitter.on('post', ({ commentId, replyId, comment }) => {
      if (commentId === undefined && replyId === undefined) {
        const ref = `${this.user.id}/replies/`
        const newKey = firebase.database().ref(ref).push().key
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
