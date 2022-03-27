
<template>
  <article>
    <h1>
      Please rate your experience engaging with the discussion forum and the
      moderation bot.
    </h1>
    <table style="border-spacing: 1.2em">
      <thead>
        <tr>
          <td></td>
          <td>Strongly disagree</td>
          <td>Somewhat disagree</td>
          <td>Neither agree nor disagree</td>
          <td>Somewhat agree</td>
          <td>Strongly agree</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            When I need to review a large volume of comments, it makes sense to
            delegate the moderation task to a bot.
          </td>
          <td><el-radio v-model="q1" label="1"></el-radio></td>
          <td><el-radio v-model="q1" label="2"></el-radio></td>
          <td><el-radio v-model="q1" label="3"></el-radio></td>
          <td><el-radio v-model="q1" label="4"></el-radio></td>
          <td><el-radio v-model="q1" label="5"></el-radio></td>
        </tr>
        <tr>
          <td>
            When visiting an online forum, if I were looking for certain
            information, I would let the bot handle some moderation tasks for
            me.
          </td>
          <td><el-radio v-model="q2" label="1"></el-radio></td>
          <td><el-radio v-model="q2" label="2"></el-radio></td>
          <td><el-radio v-model="q2" label="3"></el-radio></td>
          <td><el-radio v-model="q2" label="4"></el-radio></td>
          <td><el-radio v-model="q2" label="5"></el-radio></td>
        </tr>
        <tr>
          <td>The bot should be used to ease users’ workload.</td>
          <td><el-radio v-model="q3" label="1"></el-radio></td>
          <td><el-radio v-model="q3" label="2"></el-radio></td>
          <td><el-radio v-model="q3" label="3"></el-radio></td>
          <td><el-radio v-model="q3" label="4"></el-radio></td>
          <td><el-radio v-model="q3" label="5"></el-radio></td>
        </tr>
        <tr>
          <td>
            If the bot is available to help me with moderating comments, it
            makes sense for me to shift more attention to my other activities on
            the discussion forum (e.g., leave comments and replies to other
            users, click thumbs up or dislike for threads).
          </td>
          <td><el-radio v-model="q4" label="1"></el-radio></td>
          <td><el-radio v-model="q4" label="2"></el-radio></td>
          <td><el-radio v-model="q4" label="3"></el-radio></td>
          <td><el-radio v-model="q4" label="4"></el-radio></td>
          <td><el-radio v-model="q4" label="5"></el-radio></td>
        </tr>
        <tr>
          <td>
            Even if the bot can help me with the moderation task, I should pay
            attention to its performance.
          </td>
          <td><el-radio v-model="q5" label="1"></el-radio></td>
          <td><el-radio v-model="q5" label="2"></el-radio></td>
          <td><el-radio v-model="q5" label="3"></el-radio></td>
          <td><el-radio v-model="q5" label="4"></el-radio></td>
          <td><el-radio v-model="q5" label="5"></el-radio></td>
        </tr>
        <tr>
          <td>
            Distractions and interruptions are less of a problem for me when I
            have a bot to cover the moderation task.
          </td>
          <td><el-radio v-model="q5" label="1"></el-radio></td>
          <td><el-radio v-model="q5" label="2"></el-radio></td>
          <td><el-radio v-model="q5" label="3"></el-radio></td>
          <td><el-radio v-model="q5" label="4"></el-radio></td>
          <td><el-radio v-model="q5" label="5"></el-radio></td>
        </tr>
        <tr>
          <td>
            Constantly monitoring the bot’s performance is a waste of time.
          </td>
          <td><el-radio v-model="q5" label="1"></el-radio></td>
          <td><el-radio v-model="q5" label="2"></el-radio></td>
          <td><el-radio v-model="q5" label="3"></el-radio></td>
          <td><el-radio v-model="q5" label="4"></el-radio></td>
          <td><el-radio v-model="q5" label="5"></el-radio></td>
        </tr>
        <tr>
          <td>
            Even when I have a lot to do, I am likely to watch the bot carefully
            for errors.
          </td>
          <td><el-radio v-model="q5" label="1"></el-radio></td>
          <td><el-radio v-model="q5" label="2"></el-radio></td>
          <td><el-radio v-model="q5" label="3"></el-radio></td>
          <td><el-radio v-model="q5" label="4"></el-radio></td>
          <td><el-radio v-model="q5" label="5"></el-radio></td>
        </tr>
        <tr>
          <td>
            It’s not 5 necessary to pay much attention to the bot when it
            catches the potential abusive comments on the forum.
          </td>
          <td><el-radio v-model="q5" label="1"></el-radio></td>
          <td><el-radio v-model="q5" label="2"></el-radio></td>
          <td><el-radio v-model="q5" label="3"></el-radio></td>
          <td><el-radio v-model="q5" label="4"></el-radio></td>
          <td><el-radio v-model="q5" label="5"></el-radio></td>
        </tr>
        <tr>
          <td>
            Carefully watching the bot takes time away from more important or
            interesting things.
          </td>
          <td><el-radio v-model="q5" label="1"></el-radio></td>
          <td><el-radio v-model="q5" label="2"></el-radio></td>
          <td><el-radio v-model="q5" label="3"></el-radio></td>
          <td><el-radio v-model="q5" label="4"></el-radio></td>
          <td><el-radio v-model="q5" label="5"></el-radio></td>
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
      q6: undefined,
      q7: undefined,
      q8: undefined,
      q9: undefined,
      q10: undefined,
    };
  },
  computed: {
    isFinished() {
      return (
        this.q1 &&
        this.q2 &&
        this.q3 &&
        this.q4 &&
        this.q5 &&
        this.q6 &&
        this.q7 &&
        this.q8 &&
        this.q9 &&
        this.q10
      );
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
          q6: this.q6,
          q7: this.q7,
          q8: this.q8,
          q9: this.q9,
          q10: this.q10,
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
h1 {
  line-height: 1.4;
}
</style>
