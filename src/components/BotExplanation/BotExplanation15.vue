<template>
  <article>
    <h1>How the moderation bot works:</h1>
    <p>Using natural language processing techniques, the bot assesses the words used in a comment and derives a <span class="highlight">probability</span> of probability of inappropriateness score for each comment. </p>
    <p>Then, <span class="highlight">a cutoff on the probability score (0 to 1)</span> is determined to classify each comment as inappropriate or not inappropriate. For example, all comments with a probability score of higher than 0.5 can be classified as inappropriate.</p>
    <p><span class="highlight">The cutoff that is used by the bot can lead to classification errors,</span> such as:</p>
    <ul>
      <li>Comment classified as inappropriate by the bot when it is really not ("false positives")</li>
      <li>Comment classified as appropriate by the bot when in reality the comment is NOT appropriate ("false negatives")</li>
    </ul>
    <p>Examining the assessments of the bot with regards to the four example comments, we can see from the table below that the bot accurately assessed two comments (comment-1 and comment-2) and made mistakes with two comments (comment-3 and comment-4).</p>
    <p>A bot can be made “strict” or “lenient” in its assessment by tweaking the cutoff point. Referring to the table below, if the bot were designed to be more <u>lenient</u>, <u>comment-3</u> would have been classified as <u>appropriate</u>. </p>
    <p class="center">
      <img src="static/study1.jpg"/>
    </p>
    <p>Note: In the comments and the discussion forum you’ll see in the next steps, <span class="highlight">the bot is designed to be <u>strict</u></span>.</p>
  </article>
</template>

<script>
import emitter from '../../emitter';

export default {
  name: 'box-explanation-15',
  mounted() {
    emitter.emit('step-finished', {
      type: 'bot-explanation',
    });
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
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 80%;
}
</style>
