<template>
  <article>
    <h1>Please Note</h1>
    <ul>
      <li>Commenters in this forum are instructed to be civil in addressing and referencing other commenters and stay focused on the subject at hand.</li>
      <li>Comments represent a range of views and are judged the most interesting or thoughtful.</li>
      <li>In some cases, comments may be specifically highlighted to showcase commentary from a particular region, or readers with first-hand knowledge of an issue.</li>
    </ul>
    <p>An artificial-intelligence-based software (ie. <span class="highlight">a bot</span>) is used to help us select particularly insightful comments for recommendation. </p>
    <p class="highlight">For each comment, using natural language processing techniques, the bot assesses the words and derives a probability score of insightfulness. For example, please see the bot assessments of the following comments posted for an article about climate change:</p>
    <p><span class="highlight">Comment - 1:</span> "I recognize there is changes in our climate and feel that we need to do what we can to prevent any further decline. I try to do all that is in my power to change my effect on the climate change. I support what I can to encourage companies to change their effects on our environment.”<br><span class="highlight">Recommended by the bot</span></p>
    <p><span class="highlight">Comment - 2:</span> "Climate changes naturally. It's a natural phenomenon."<br><span class="highlight">Not selected for recommendation by the bot</span></p>
    <p><span class="highlight">Comment - 3:</span>  “It's the best it makes me warm when it should be cold. Thanks, global warming.”<br><span class="highlight">Recommended by the bot</span></p>
    <p><span class="highlight">Comment - 4:</span>   “They are blatantly ignoring a fact that 98% of scientists agree are real. It is okay to have your own opinion about how we should deal with climate change, but no action at all is selfish because we are destroying the world for future generations.”<br><span class="highlight">Not selected for recommendation by the bot</span></p>
    <form>
      <label class="highlight">Your task:</label>
      <p>Think about how artificial intelligence-based software (bots) make assessments as in the above examples. Why are comments 1 and 3 are recommended by the bot whereas comments 2 and 4 are not recommended?</p>
      <el-input
        type="textarea"
        :rows="4"
        v-model="explanation">
      </el-input>
      <p class="error" v-if="isFinished === false">Min length is {{minLength}} characters, {{remainingLength}} remaining.</p>
    </form>
  </article>
</template>

<script>
import emitter from '../../emitter';

export default {
  name: 'moderation-rule-21',
  data() {
    return {
      explanation: '',
      minLength: 280,
    };
  },
  computed: {
    isFinished() {
      return this.explanation.length >= this.minLength
    },
    remainingLength() {
      return this.minLength - this.explanation.length
    },
  },
  watch: {
    isFinished(val) {
      if (val) {
        emitter.emit('step-finished', {
          type: 'rule',
          input: this.explanation,
        })
      } else {
        emitter.emit('step-unfinished')
      }
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
form {
  margin-top: 40px;
}
label {
  display: block;
  margin-bottom: 8px;
}
.error {
  color: #BD1515;
  font-size: 12px;
}
</style>
