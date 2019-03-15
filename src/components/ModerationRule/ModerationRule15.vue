<template>
  <article>
    <h1>Commenting Rules</h1>
    <p>Commentators in this forum are instructed to observe the following rules:</p>
    <ul>
      <li>Abusive, defamatory, offensive or disparaging comments on the basis of disability, ethnicity, gender, or otherwise are forbidden.</li>
      <li>Comments that are attacks or threaten another person, promote violence, wish for harm to befall another person are forbidden.</li>
      <li>Stalking or harassing another person and any form of discouraging participation by others are forbidden.</li>
      <li>Misrepresentation of comments, user profiles, posting advertisements, and all forms of spamming are forbidden. </li>
      <li>The forum administrators reserve the right to remove any comment for any reason. They may also bar individuals who break the above commenting rules.</li>
    </ul>
    <p>An artificial-intelligence-based software (ie. <span class="highlight">a bot</span>) is used to help us moderate comments based on the above rules. </p>
    <p class="highlight">For each comment, using natural language processing techniques, the bot assesses the words and derives a probability score of inappropriateness. For example, please see the bot assessments of the following comments posted for an article about climate change:</p>
    <p><span class="highlight">Comment - 1:</span> "Climate change is happening and it's not changing in our favor. If you think differently you're an idiot.”<br><span class="highlight">Bot assessment: Not Appropriate</span></p>
    <p><span class="highlight">Comment - 2:</span> "Clearly man made, but unsure of its extent and whether anything substantial can be done about it."<br><span class="highlight">Bot assessment: Appropriate</span></p>
    <p><span class="highlight">Comment - 3:</span> “Some are just poorly educated, ultimately not their fault for being uninformed and ignorant. I blame the American educational system.”<br><span class="highlight">Bot assessment: Not Appropriate</span></p>
    <p><span class="highlight">Comment - 4:</span> “You either trust in God or think you are smarter than him as you believe in this crooked science where there is no consensus.”<br><span class="highlight">Bot assessment: Appropriate</span></p>
    <form>
      <label class="highlight">Your task:</label>
      <p>Think about how artificial intelligence-based software (bots) make assessments as in the above examples. Why are comments 1 and 3 assessed as not appropriate whereas comments 2 and 4 are appropriate?</p>
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
  name: 'study-12',
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
