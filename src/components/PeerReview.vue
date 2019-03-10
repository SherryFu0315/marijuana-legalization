<template>
  <article>
    <h1>Please help review user comments ({{current + 1}}/{{count}})</h1>
    <p>{{content}}</p>

    <hr>

    <div class="highlight assessment" v-if="bot !== undefined">
      <span>{{bot}}</span>
      <div class="attitude-container">
        <span>Do you agree? </span>
        <el-button type="text" :style="{ color: attitude === true ? '#BD1515' : '#605E5E' }" @click="attitude = true">Yes</el-button>
        <el-button type="text" :style="{ color: attitude === false ? '#BD1515' : '#605E5E' }" @click="attitude = false">No</el-button>
      </div>
    </div>
    <div class="rating">
      <p class="rating-label">Please rate the overall quality of the comment:</p>
      <div class="rate-container">
        <label>Quality</label>
        <el-rate v-model="rating" class="rate" @change="onRatingChange"></el-rate>
      </div>
    </div>
  </article>
</template>

<script>
import emitter from '../emitter';

export default {
  name: 'peer-review',
  props: ['count', 'current', 'content', 'bot'],
  data() {
    return {
      attitude: undefined,
      rating: null,
      ratingTouched: false,
    };
  },
  computed: {
    isFinished() {
      return this.ratingTouched && (!this.bot || this.attitude !== undefined)
    }
  },
  watch: {
    isFinished(val) {
      if (val) {
        emitter.emit('step-finished', {
          type: 'peer-review',
          input: {
            index: this.current,
            content: this.content,
            bot: this.bot,
            attitude: this.attitude,
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
  },
}
</script>

<style scoped>
article {
  font-family: lulo-clean-w01-one-bold, sans-serif;
  color: #605E5E;
  font-size: 16px;
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
p {
  line-height: 1.4em;
}
.highlight {
  color: #BD1515;
}
hr {
  margin: 32px 0;
}
.assessment {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-size: 18px;
}
.attitude-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.attitude-container > span {
  margin-right: 24px;
}
.attitude-container > .el-button--text {
  color: #BD1515;
  font-size: 16px;
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
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}
.rate {
  transform: scale(1.5);
}
</style>
