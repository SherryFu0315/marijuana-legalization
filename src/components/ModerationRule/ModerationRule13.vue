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
    <p class="highlight">Based on machine learning and natural language processing techniques, the bot classifies comments as either appropriate or not. For example, please see the bot assessments of the following comments posted for an article about climate change:</p>
    <p>In an article about the "climate change":</p>
    <p><span class="highlight">Comment - 1:</span> "Climate change is happening and it's not changing in our favor. If you think differently you're an idiot.”<br><span class="highlight">Bot assessment: Not Appropriate</span></p>
    <p><span class="highlight">Comment - 2:</span> "Clearly man made, but unsure of its extent and whether anything substantial can be done about it."<br><span class="highlight">Bot assessment: Appropriate</span></p>
    <p><span class="highlight">Comment - 3:</span> “Some are just poorly educated, ultimately not their fault for being uninformed and ignorant. I blame the American educational system.”<br><span class="highlight">Bot assessment: Not Appropriate</span></p>
    <p><span class="highlight">Comment - 4:</span> “You either trust in God or think you are smarter than him as you believe in this crooked science where there is no consensus.”<br><span class="highlight">Bot assessment: Appropriate</span></p>
    <h3>Here is how the bot works:</h3>
    <p>Using natural language processing techniques, the bot assesses the words used in a comment and derives a <span class="highlight">probability</span> of toxicity score for each comment. </p>
    <p>Then, <span class="highlight">a cutoff on the probability score (0 to 1)</span> is determined to classify each comment as toxic or not toxic. For example, all comments with a probability score of higher than 0.5 can be classified as toxic.</p>
    <p><span class="highlight">The cutoff that is used by the bot can lead to classification errors,</span> such as:</p>
    <ul>
      <li>Comment classified as toxic by the bot when it is really not ("false positives")</li>
      <li>Comment classified as not toxic by the bot when in reality the comment is toxic ("false negatives")</li>
    </ul>
    <p>In this case, we can tell the bot indeed helps catch the inappropriate comment (Comment-1), however, it also makes mistakes (Comment - 3 and Comment - 4). See the below table for more information.</p>
    <p class="center">
      <img src="static/study1.jpg"/>
    </p>
    <p>A bot can be made "strict" or "lenient" in its assessment by tweaking the cutoff point.</p>
    <p class="highlight">In this case, the platform has implemented a “strict” bot (more comments are classified as inappropriate). If the bot were designed to be more lenient, the Comment-3 would NOT be assessed as inappropriate. </p>
  </article>
</template>

<script>
import emitter from '../../emitter';

export default {
  name: 'study-12',
  mounted() {
    emitter.emit('step-finished', {
      type: 'rule',
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
