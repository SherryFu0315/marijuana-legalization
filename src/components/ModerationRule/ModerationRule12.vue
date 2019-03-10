<template>
  <article>
    <h1>Moderation Rules</h1>
    <p>An artificial-intelligence-based software (ie. <span class="highlight">a bot</span>) is used to help us moderate comments based on the following rules. </p>
    <ul>
      <li>abusive, defamatory, offensive or disparaging (ie. on the basis of disability, ethnicity, gender, or otherwise).</li>
      <li>attacks or threatens another person, threatens or promotes violence, wishes for harm to befall another person</li>
      <li>stalk or harass another person, discourage participation by others</li>
      <li>any type of advertisements</li>
    </ul>
    <p><span class="highlight">Based on machine learning and natural language processing techniques, the bot classifies comments as either appropriate or not.</span> For example:</p>
    <p>In an article about the "climate change":</p>
    <p><span class="highlight">Comment - 1:</span> "Climate change is happening and it's not changing in our favor. If you think differently you're an idiot.”<br><span class="highlight">Bot assessment: Not Appropriate</span></p>
    <p><span class="highlight">Comment - 2:</span> "Clearly man made, but unsure of its extent and whether anything substantial can be done about it."<br><span class="highlight">Bot assessment: Appropriate</span></p>
    <p><span class="highlight">Comment - 3:</span> “Some are just poorly educated, ultimately not their fault for being uninformed and ignorant. I blame the American educational system.”<br><span class="highlight">Bot assessment: Not Appropriate</span></p>
    <p><span class="highlight">Comment - 4:</span> “You either trust in God or think you are smarter than him as you believe in this crooked science where there is no consensus.”<br><span class="highlight">Bot assessment: Appropriate</span></p>
    <h3>Here is how the bot works:</h3>
    <p>Using natural language processing techniques, the bot assesses the words used in a comment and derives a <span class="highlight">probability</span> of inappropriate score for each comment. </p>
    <p>Then, <span class="highlight">a cutoff on the probability score (0 to 1)</span> is determined to classify each comment as inappropriate or not. For example, all comments with a probability score of higher than 0.5 can be classified as inappropriate.</p>
    <p><span class="highlight">The cutoff that is used by the bot can lead to classification errors,</span> such as:</p>
    <ul>
      <li>Comment classified as inappropriate by the bot when it is really not ("false positives")</li>
      <li>Comment classified as appropriate by the bot when in reality the comment is inappropriate ("false negatives")</li>
    </ul>
    <p>In this case, we can tell the bot indeed helps catch the inappropriate comment (Comment-1), however, it also makes mistakes (Comment - 3 and Comment - 4). See the below table for more information.</p>
    <img src="static/study1.jpg"/>
    <p>A bot can be made "strict" or "lenient" in its assessment by tweaking the cutoff point.</p>
    <p class="highlight">In this case, the platform has implemented a "lenient" bot (fewer comments are classified as inappropriate). If the bot were designed to be stricter, the Comment-4 would have been assessed as inappropriate.</p>
  </article>
</template>

<script>
import emitter from '../../emitter';

export default {
  name: 'moderation-rule-12',
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
img {
  width: 100%;
}
</style>
