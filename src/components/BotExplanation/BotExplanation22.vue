<template>
  <article>
    <h1>Moderation Rules</h1>
    <h3>Here is how the bot works:</h3>
    <p>Using natural language processing techniques, the bot assesses the words used in a comment and derives a <span class="highlight">probability</span> of inappropriate score for each comment. </p>
    <p>Then, <span class="highlight">a cutoff on the probability score (0 to 1)</span> is determined to classify each comment as inappropriate or not. For example, all comments with a probability score of higher than 0.5 can be classified as inappropriate.</p>
    <p><span class="highlight">The cutoff that is used by the bot can lead to classification errors,</span> such as:</p>
    <ul>
      <li>Comment classified as inappropriate by the bot when it really is not ("false positives")</li>
      <li>Comment classified as appropriate by the bot when in reality the comment is NOT approporiate ("false negatives")</li>
    </ul>
    <img src="static/study2-2.jpg"/>
    <p>In this case, we can tell the bot indeed helps catch the inappropriate comment (Comment-1), however, it also makes mistakes (Comment - 3 and Comment - 4). See the below table for more information.</p>
  </article>
</template>

<script>
import emitter from '../../emitter';

export default {
  name: 'box-explanation-22',
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
img {
  width: 100%;
}
</style>
