<template>
  <section class="reply-box" :class="{ main: main }">
    <div class="reply-box__nickname">{{user.nickname}}</div>
    <div class="reply-box__avatar__input">
      <img :src="imageURL">
      <el-input type="textarea" v-model="content" cols="40" rows="3"></el-input>
    </div>
    <div class="reply-box___buttons">
      <el-button type="primary" size="small" :disabled="!content" @click="post">Post</el-button>
    </div>
  </section>
</template>

<script>
import emitter from '../emitter'

export default {
  name: 'reply-box',
  props: ['user', 'comment', 'parentComment', 'fold', 'main'],
  data() {
    return {
      content: this.comment ? `@${this.comment.nickname} ` : '',
    }
  },
  computed: {
    imageURL() {
      return `http://tinygraphs.com/squares/${this.user.nickname}?theme=frogideas&numcolors=2`
    },
    isReply() {
      return !!this.parentComment
    }
  },
  methods: {
    post() {
      emitter.emit('post', { 
        commentId: this.isReply ? this.parentComment.id : (this.comment ? this.comment.id : undefined),
        replyId: this.isReply ? this.comment.id : undefined,
        comment: {
          content: this.content,
          nickname: this.user.nickname, 
          uid: this.user.nickname,
          like: 0,
          dislike: 0,
          type: 0,
          byCurrentUser: true,
        },
      })
      this.content = ''
      this.fold && this.fold()
    },
  },
}
</script>

<style scoped>
.reply-box {
  display: flex;
  flex-direction: column;
}
.reply-box__nickname {
  margin: 4px 0 4px 76px;
}
.reply-box__avatar__input {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.reply-box__avatar__input img {
  width: 60px;
  height: 60px;
  border-radius: 5px;
  margin-right: 16px;
}
.reply-box___buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  margin: 8px 0;
}
.reply-box:not(.main) {
  margin-top: 12px;
  margin-left: 56px;
}
.reply-box:not(.main) .reply-box__nickname {
  display: none;
}
.reply-box:not(.main) .reply-box__avatar__input {
  align-items: flex-start;
}
.reply-box:not(.main) .reply-box__avatar__input img {
  width: 45px;
  height: 45px;
}
</style>
