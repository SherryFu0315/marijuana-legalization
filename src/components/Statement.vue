<template>
  <div class="statement">
    <p><strong>We need your voice on marijuana legalization. We welcome your on-topic commentary, criticism, and expertise.</strong></p>
    <p><strong>{{moderateText}} Please follow our guidelines to ensure everyone has a positive experience, and please help us moderate by reporting any inappropriate posts.</strong></p>
    <p>
      Don't make false statements, defame, or impersonate someone else.<br>
      Don't copy and post others' material, trademarks, or intellectual property.<br>
      Comments shouldn't harass, abuse, or threaten anyone's personal safety or property.<br>
      Don't post profanity, obscenities, abusive language, or otherwise objectionable content.<br>
    </p>
  </div>
</template>

<script>
export default {
  name: 'statement',
  props: ['which'],
  computed: {
    moderateText() {
      return this.which === 0 ? 'We do not moderate the posts.' : this.which < 5 ? 'An algorithm (i.e., a bot) automatically moderates the posts.' : 'The community moderates the posts.'
    }
  }
}
</script>

<style scoped>
.statement {
  padding: 12px 24px;
  border-radius: 8px;
  background-color: #e6f7ff;
  margin-top: 16px;
}
</style>
