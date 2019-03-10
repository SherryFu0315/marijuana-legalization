<template>
  <article>
    <h1>Moderation Rules</h1>
    <p>Please note the comment rules of this forum. </p>
    <ul>
      <li>abusive, defamatory, offensive or disparaging (ie. on the basis of disability, ethnicity, gender, or otherwise).</li>
      <li>attacks or threatens another person, threatens or promotes violence, wishes for harm to befall another person</li>
      <li>stalk or harass another person, discourage participation by others</li>
      <li>any type of advertisements</li>
    </ul>
  </article>
</template>

<script>
import emitter from '../../emitter';

export default {
  name: 'study-11',
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
</style>
