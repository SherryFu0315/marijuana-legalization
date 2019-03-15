<template>
  <article>
    <h1>Please resubmit your comment</h1>
    <p>This is a draft of your comment that you summarized before:</p>
    <p class="original-comment">{{originalComment}}</p>
    <p>{{instruction}}</p>
    <label class="username">{{username}}</label>
    <el-input
      type="textarea"
      :rows="4"
      placeholder="Please finalize your comment on marijuana legalization: "
      @paste="handlePaste"
      v-model="comment">
    </el-input>
    <p class="error" v-if="isEnough === false">Min length is {{minLength}} characters, {{remainingLength}} remaining.</p>
    <p>*Please note that your comment will not be shown immediately after your submission, because it will await moderation from your peers (Like what you just did!). </p>
    <hr>

    <div class="rating">
      <p class="rating-label">Please rate the overall quality of your comment that you are submitting for publication:</p>
      <div class="rate-container">
        <label>Quality</label>
        <el-rate v-model="rating" class="rate" @change="onRatingChange"></el-rate>
      </div>
    </div>
  </article>
</template>

<script>
import emitter from '../emitter'
import config from '../config'

export default {
  name: 'own-comment',
  data() {
    return {
      comment: '',
      rating: null,
      ratingTouched: false,
      username: config.user.nickname,
      minLength: 280,
      originalComment: config.comment,
    };
  },
  computed: {
    isEnough() {
      return this.comment.length >= this.minLength
    },
    isFinished() {
      return this.ratingTouched && this.isEnough
    },
    remainingLength() {
      return this.minLength - this.comment.length
    },
    instruction() {
      return this.study === 1 ? "Considering the commenting rules of the forum and your review of five other comments from other users, please finalize your comment and enter it again below for publication: " : "Considering the commenting rules of the forum and the bot's process for recommendation, please finalize your comment and enter it again below for publication:"
    },
  },
  watch: {
    isFinished(val) {
      if (val) {
        emitter.emit('step-finished', {
          type: 'resubmit-comment',
          input: {
            comment: this.comment,
            rating: this.rating,
          },
        })
      } else {
        emitter.emit('step-unfinished')
      }
    }
  },
  methods: {
    onRatingChange() {
      this.ratingTouched = true
    },
    handlePaste() {
      return false
    },
  },
}
</script>

<style scoped>
article {
  font-family: lulo-clean-w01-one-bold, sans-serif;
  color: #605E5E;
  font-size: 17px;
  line-height: 1.4em;
  padding: 24px;
}
h1 {
  color: rgb(76, 209, 160);
  text-align: center;
  letter-spacing: 0.05em;
  font-size: 31px;
  margin-top: 0;
  margin-bottom: 64px;
}
.highlight {
  color: #BD1515;
}
label {
  display: block;
  margin-bottom: 8px;
}
hr {
  margin: 32px 0;
}
.rating {
  display: flex;
  flex-direction: column;

  font-size: 18px;
}
.rating-label {
  font-size: 16px;
}
.rate-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
}
.rate-container > label {
  margin-bottom: 0; 
  margin-right: 64px;
}
.rate {
  transform: scale(1.5);
}
.username {
  font-weight: bold;
}
.note {
  font-size: 12px;
}
.error {
  color: #BD1515;
  font-size: 12px;
}
.original-comment {
  background: #f5f5f5;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 3px;
  word-break: break-word;
  margin: 8px;
  padding: 16px;
}
</style>
