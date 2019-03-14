<template>
  <article>
    <p>Thank you! You are now going to enter the discussion forum.</p>
    <p>Please note that your comment will not be shown in the forum yet as it is awaiting moderation by other users. </p>
    <p>Meanwhile, please interact with other users of the forum by:</p>
    <ul>
      <li>replying to other users</li>
      <li>voting thumbs up or thumbs down for posts by other users</li>
      <template v-if="study === 1">
        <li>report any inappropriate comments in the forum that may have been missed by other moderators</li>
      </template>
      <template v-if="study === 2">
        <li>interact with the bot {{condition === 1 ? 'selection' : 'moderation'}} results</li>
        <li>report any potential {{condition === 1 ? 'insightful' : 'inappropriate'}} comments that are missed by the bot</li>
      </template>
    </ul>
  </article>
</template>

<script>
import emitter from '../emitter'
import config from '../config'

export default {
  name: 'done',
  data() {
    return {
      study: config.study,
      condition: config.condition,
    }
  },
  mounted() {
    emitter.emit('step-finished', {
      type: 'done',
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
