<template>
  <el-dialog
    :visible.sync="visible"
    width="80%"
    center
    :show-close="false"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <Introduction v-if="step === 'introduction'" />
    <template v-if="study === 1">
      <template v-if="step === 'rule'">
        <ModerationRule11 v-if="condition === 1" />
        <ModerationRule12 v-if="condition === 2" />
        <ModerationRule13
          v-if="condition === 3 || condition === 31 || condition === 32"
        />
        <ModerationRule14 v-if="condition === 4" />
        <ModerationRule15 v-if="condition === 5" />
      </template>
      <template v-if="step === 'explanation'">
        <BotExplanation14 v-if="condition === 4" />
        <BotExplanation15 v-if="condition === 5" />
      </template>
    </template>
    <template v-if="study === 2">
      <template v-if="step === 'rule'">
        <ModerationRule21 v-if="condition === 1" />
        <ModerationRule22 v-if="condition === 2" />
      </template>
      <template v-if="step === 'explanation'">
        <BotExplanation21 v-if="condition === 1" />
        <BotExplanation22 v-if="condition === 2" />
      </template>
    </template>
    <template v-if="step === 'new-article'">
      <NewArticle1 v-if="condition === 31" />
      <NewArticle2 v-if="condition === 32" />
    </template>
    <Measurement v-if="step === 'measurement'" />
    <PeerReview
      v-if="step === 'peer-review'"
      :key="peerReviewCurrent"
      :count="peerReviewCount"
      :current="peerReviewCurrent"
      :id="peerReviewId"
      :content="peerReviewContent"
      :bot="peerReviewBot"
    />
    <OwnComment v-if="step === 'resubmit-comment'" />
    <Done v-if="step === 'done'" />
    <span slot="footer" class="dialog-footer">
      <el-button type="info" @click="next" :disabled="!canProceed"
        >{{ step === "done" ? "Enter the forum" : "Next"
        }}<i class="el-icon-arrow-right el-icon--right"></i
      ></el-button>
    </span>
  </el-dialog>
</template>

<script>
import firebase from "firebase";

import Introduction from "./Introduction";
import ModerationRule11 from "./ModerationRule/ModerationRule11";
import ModerationRule12 from "./ModerationRule/ModerationRule12";
import ModerationRule13 from "./ModerationRule/ModerationRule13";
import ModerationRule14 from "./ModerationRule/ModerationRule14";
import ModerationRule15 from "./ModerationRule/ModerationRule15";
import ModerationRule21 from "./ModerationRule/ModerationRule21";
import ModerationRule22 from "./ModerationRule/ModerationRule22";
import BotExplanation14 from "./BotExplanation/BotExplanation14";
import BotExplanation15 from "./BotExplanation/BotExplanation15";
import BotExplanation21 from "./BotExplanation/BotExplanation21";
import BotExplanation22 from "./BotExplanation/BotExplanation22";
import NewArticle1 from "./NewArticle/NewArticle1";
import NewArticle2 from "./NewArticle/NewArticle2";
import PeerReview from "./PeerReview";
import Measurement from "./Measurement";
import OwnComment from "./OwnComment";
import Done from "./Done";

import { getPeerReviews } from "../data";
import config from "../config";
import emitter from "../emitter";

export default {
  name: "study-dialog",
  components: {
    Introduction,
    ModerationRule11,
    ModerationRule12,
    ModerationRule13,
    ModerationRule14,
    ModerationRule15,
    ModerationRule21,
    ModerationRule22,
    BotExplanation14,
    BotExplanation15,
    BotExplanation21,
    BotExplanation22,
    NewArticle1,
    NewArticle2,
    PeerReview,
    OwnComment,
    Measurement,
    Done,
  },
  props: ["visible"],
  data() {
    return {
      study: config.study,
      condition: config.condition,
      step: config.study === 1 ? "introduction" : "rule",
      peerReviews: getPeerReviews(),
      peerReviewCurrent: 0,
      isProcessing: false,
      canProceed: false,
      stepsData: [
        {
          type: "comment",
          input: config.comment,
          date: new Date().getTime(),
        },
      ],
      lastStepData: undefined,
    };
  },
  computed: {
    peerReviewCount() {
      return this.peerReviews.length;
    },
    peerReviewContent() {
      return (
        this.study === 1 && this.peerReviews[this.peerReviewCurrent].content
      );
    },
    peerReviewId() {
      return this.study === 1 && this.peerReviews[this.peerReviewCurrent].id;
    },
    peerReviewBot() {
      return this.study === 1 && this.peerReviews[this.peerReviewCurrent].bot;
    },
  },
  mounted() {
    emitter.on("step-finished", (data) => {
      this.lastStepData = data;
      this.canProceed = true;
    });
    emitter.on("step-unfinished", () => {
      this.lastStepData = undefined;
      this.canProceed = false;
    });
  },
  methods: {
    next() {
      if (this.isProcessing) {
        return;
      }

      this.isProcessing = true;

      this.canProceed = false;

      this.stepsData.push({
        ...this.lastStepData,
        date: new Date().getTime(),
      });

      this.updateStep();

      this.isProcessing = false;

      document.getElementsByClassName("el-dialog__wrapper")[0].scrollTop = 0;
    },

    updateStep() {
      const { step, study, condition, peerReviewCurrent, peerReviewCount } =
        this;

      if (step === "introduction") {
        this.step = "rule";
        return;
      }

      if (step === "rule") {
        if (study === 1 && condition === 3) {
          this.step = "measurement";
          return;
        }
        if (study === 1 && (condition === 31 || condition === 32)) {
          this.step = "new-article";
          return;
        }

        if ((study === 1 && condition > 3) || study === 2) {
          this.step = "explanation";
          return;
        }

        this.step = "peer-review";
        return;
      }

      if (step === "explanation") {
        this.step = "measurement";
        return;
      }

      if (step === "new-article") {
        this.step = "measurement";
        return;
      }

      if (step === "measurement") {
        if (study === 2) {
          this.step = "resubmit-comment";
          return;
        }

        this.step = "peer-review";

        return;
      }

      if (step === "peer-review") {
        if (peerReviewCurrent < peerReviewCount - 1) {
          this.peerReviewCurrent += 1;
          return;
        }

        this.step = "resubmit-comment";
        return;
      }

      if (step === "resubmit-comment") {
        this.step = "done";
        return;
      }

      if (step === "done") {
        firebase
          .database()
          .ref(`${config.user.id}/actions`)
          .set(this.stepsData);

        emitter.emit("done");
        return;
      }
    },
  },
};
</script>

<style scoped>
.dialog-footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
