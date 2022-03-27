
<template>
  <article>
    <h1>
      In the last six months, for each news article you read, how often did
      you...
    </h1>
    <table>
      <tbody>
        <tr>
          <td>read the comments section</td>
          <td><el-radio v-model="q1" label="Never"></el-radio></td>
          <td><el-radio v-model="q1" label="Seldom"></el-radio></td>
          <td><el-radio v-model="q1" label="Sometimes"></el-radio></td>
          <td><el-radio v-model="q1" label="Often"></el-radio></td>
          <td><el-radio v-model="q1" label="Usually"></el-radio></td>
          <td><el-radio v-model="q1" label="Almost every time"></el-radio></td>
        </tr>
        <tr>
          <td>leave a comment</td>
          <td><el-radio v-model="q2" label="Never"></el-radio></td>
          <td><el-radio v-model="q2" label="Seldom"></el-radio></td>
          <td><el-radio v-model="q2" label="Sometimes"></el-radio></td>
          <td><el-radio v-model="q2" label="Often"></el-radio></td>
          <td><el-radio v-model="q2" label="Usually"></el-radio></td>
          <td><el-radio v-model="q2" label="Almost every time"></el-radio></td>
        </tr>
        <tr>
          <td>reply to others' comments</td>
          <td><el-radio v-model="q3" label="Never"></el-radio></td>
          <td><el-radio v-model="q3" label="Seldom"></el-radio></td>
          <td><el-radio v-model="q3" label="Sometimes"></el-radio></td>
          <td><el-radio v-model="q3" label="Often"></el-radio></td>
          <td><el-radio v-model="q3" label="Usually"></el-radio></td>
          <td><el-radio v-model="q3" label="Almost every time"></el-radio></td>
        </tr>
        <tr>
          <td>entered (thumbs up) or (thumbs down) for posts</td>
          <td><el-radio v-model="q4" label="Never"></el-radio></td>
          <td><el-radio v-model="q4" label="Seldom"></el-radio></td>
          <td><el-radio v-model="q4" label="Sometimes"></el-radio></td>
          <td><el-radio v-model="q4" label="Often"></el-radio></td>
          <td><el-radio v-model="q4" label="Usually"></el-radio></td>
          <td><el-radio v-model="q4" label="Almost every time"></el-radio></td>
        </tr>
        <tr>
          <td>flat/report an inappropriate comment or reply</td>
          <td><el-radio v-model="q5" label="Never"></el-radio></td>
          <td><el-radio v-model="q5" label="Seldom"></el-radio></td>
          <td><el-radio v-model="q5" label="Sometimes"></el-radio></td>
          <td><el-radio v-model="q5" label="Often"></el-radio></td>
          <td><el-radio v-model="q5" label="Usually"></el-radio></td>
          <td><el-radio v-model="q5" label="Almost every time"></el-radio></td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
import emitter from "../emitter";

export default {
  name: "measurement",
  data() {
    return {
      q1: undefined,
      q2: undefined,
      q3: undefined,
      q4: undefined,
      q5: undefined,
    };
  },
  computed: {
    isFinished() {
      return this.q1 && this.q2 && this.q3 && this.q4 && this.q5;
    },
  },
  watch: {
    isFinished(val) {
      if (val) {
        const input = {
          q1: this.q1,
          q2: this.q2,
          q3: this.q3,
          q4: this.q4,
          q5: this.q5,
        };

        emitter.emit("step-finished", {
          type: "measurement",
          input,
        });
      } else {
        emitter.emit("step-unfinished");
      }
    },
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
</style>
