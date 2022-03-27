<template>
  <article>
    <h1>Commenting Rules</h1>
    <p>
      Commentators in this forum are instructed to observe the following rules:
    </p>
    <ul>
      <li>
        Abusive, defamatory, offensive or disparaging comments on the basis of
        disability, ethnicity, gender, or otherwise are forbidden.
      </li>
      <li>
        Comments that are attacks or threaten another person, promote violence,
        wish for harm to befall another person are forbidden.
      </li>
      <li>
        Stalking or harassing another person and any form of discouraging
        participation by others are forbidden.
      </li>
      <li>
        Misrepresentation of comments, user profiles, posting advertisements,
        and all forms of spamming are forbidden.
      </li>
      <li>
        The forum administrators reserve the right to remove any comment for any
        reason. They may also bar individuals who break the above commenting
        rules.
      </li>
    </ul>
  </article>
</template>

<script>
import emitter from "../../emitter";

export default {
  name: "study-11",
  mounted() {
    emitter.emit("step-finished", {
      type: "rule",
    });
  },
};
</script>

<style scoped>
article {
  font-family: lulo-clean-w01-one-bold, sans-serif;
  color: #605e5e;
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
