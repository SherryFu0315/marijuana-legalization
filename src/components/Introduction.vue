
<template>
  <article>
    <p>Thanks for your comment. Before we consider your comment for publication, please help us review five comments from other users. </p>
    <p>In the next step, you will learn about the commenting rules of the forum.</p>
  </article>
</template>

<script>
import emitter from '../emitter'

export default {
  name: 'introduction',
  mounted() {
    emitter.emit('step-finished', {
      type: 'introduction',
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
</style>
