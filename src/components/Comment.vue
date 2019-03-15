<template>
  <div class="comment" :class="{ reply: isReply }">
    <div class="comment__main">
      <img class="comment__main_avatar" :src="imageURL" />
      <div class="comment__main__body">
        <div class="comment___main__body__nickname__report">
          <div class="comment__main__body__nickname">{{comment.nickname}}</div>
          <div v-if="isReportEnabled && !comment.byCurrentUser" class="comment___main__body__report">
            <div class="comment___main__body__report__info">
              <template v-if="comment.flagInfo">
                <img class="flag" src="../assets/flag.png" v-show="attitude !== false">
                {{flagInfoDisplay}}
                <el-popover
                  placement="top-end"
                  width="300"
                  trigger="hover"
                  :offset="-100"
                  v-show="attitude === undefined && reported === undefined">
                  <img slot="reference" class="help" src="../assets/help.png">
                  <template v-if="study === 2 && condition === 1">
                    <p><strong>The recommendation decision is made based on our comment policy.</strong></p>
                    <ul>
                      <li>Commenters in this forum are instructed to be civil in addressing and referencing other commenters and stay focused on the subject at hand.</li>
                      <li>Comments represent a range of views and are judged the most interesting or thoughtful.</li>
                      <li>In some cases, comments may be specifically highlighted to showcase commentary from a particular region, or readers with first-hand knowledge of an issue.</li>
                    </ul>
                  </template>
                  <template v-else-if="study === 2 && condition === 2">
                    <p><strong>The moderation decision is made based on our comment policy.</strong></p>
                    <ul>
                      <p>Commentators in this forum are instructed to observe the following rules:</p>
                      <ul>
                        <li>Abusive, defamatory, offensive or disparaging comments on the basis of disability, ethnicity, gender, or otherwise are forbidden.</li>
                        <li>Comments that are attacks or threaten another person, promote violence, wish for harm to befall another person are forbidden.</li>
                        <li>Stalking or harassing another person and any form of discouraging participation by others are forbidden.</li>
                        <li>Misrepresentation of comments, user profiles, posting advertisements, and all forms of spamming are forbidden. </li>
                        <li>The forum administrators reserve the right to remove any comment for any reason. They may also bar individuals who break the above commenting rules.</li>
                      </ul>
                    </ul>
                  </template>
                  <template v-else>
                    <p><strong>Commentators in this forum are instructed to observe the following rules:</strong></p>
                    <ul>
                      <li>Abusive, defamatory, offensive or disparaging comments on the basis of disability, ethnicity, gender, or otherwise are forbidden.</li>
                      <li>Comments that are attacks or threaten another person, promote violence, wish for harm to befall another person are forbidden.</li>
                      <li>Stalking or harassing another person and any form of discouraging participation by others are forbidden.</li>
                      <li>Misrepresentation of comments, user profiles, posting advertisements, and all forms of spamming are forbidden. </li>
                      <li>The forum administrators reserve the right to remove any comment for any reason. They may also bar individuals who break the above commenting rules.</li>
                    </ul>
                  </template>
                </el-popover>
              </template>
            </div>
            <template v-if="comment.flagInfo">
              <div class="button danger" v-show="attitude === undefined" @click="confirm">Agree</div>
              <div class="button danger" v-show="attitude === undefined" @click="unflag">Disagree</div>
            </template>
            <template v-if="!comment.flagInfo">
              <div class="button" @click="report">
                <img src="../assets/flag-outline.png">
                {{reportInfoDisplay}}
              </div>
            </template>
            <div class="button danger" v-show="attitude !== undefined || reported !== undefined" @click="change">Undo</div>
          </div>
          <div v-if="comment.byCurrentUser" class="button" @click="showEditBox">Edit</div>
        </div>
        <div class="comment__main__body__content">{{editedContent}}</div>
        <div class="comment__main__body__buttons" v-if="!comment.byCurrentUser">
          <div class="button" :class="{ active: isShowingReplyBox }" @click="toggleReplyBox">Reply</div>
          <div class="button" v-if="!isReply && hasReplies" :disabled="!hasReplies" @click="toggleReplies" :class="{ active: isShowingReplies }">Replies ({{repliesCount}})</div>
          <div class="button" @click="voteLike"><img :class="{ active: like === true }" src="../assets/like.png"> ({{likeCount}})</div>
          <div class="button" @click="voteDislike"><img :class="{ active: like === false }" src="../assets/dislike.png" > ({{dislikeCount}})</div>
        </div>
      </div>
    </div>
    <ReplyBox :user="user" :comment="comment" :parent-comment="parentComment" v-show="isShowingReplyBox" :fold="foldReplyBox"/>
    <div v-if="!isReply && hasReplies && isShowingReplies" class="comment__replies">
      <comment v-for="reply in replies" :key="reply.id" :comment="reply" :parent-comment="comment" :is-reply="true" :user="user" :saved-data="savedData"/>
    </div>

    <el-dialog title="Edit" :visible="isShowingEditBox" center :before-close="hideEditBox">
      <el-form>
        <el-form-item label="Comment">
          <el-input type="textarea" v-model="editingContent"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="edit">Submit</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import firebase from 'firebase'
import { MessageBox } from 'element-ui'
import ReplyBox from './ReplyBox.vue'
import { getReplies } from '../data'
import emitter from '../emitter'
import config from '../config'

export default {
  name: 'comment',
  components: {
    ReplyBox,
  },
  props: ['comment', 'parentComment', 'user', 'savedData'],
  data() {
    const { nickname, id } = this.user
    const isReply = !!this.parentComment 

    let replies = getReplies(this.comment.id);
    let like = undefined
    let attitude = undefined
    let reported = undefined

    if (this.savedData.reactions) {
      if (!isReply) {
        const found = this.savedData.reactions[this.comment.id]
        if (found) {
          like = found.like
          attitude = found.attitude
          reported = found.reported
        }
      } else {
        const found = this.savedData.reactions[this.parentComment.id] && this.savedData.reactions[this.parentComment.id].replies[this.comment.id]
        if (found) {
          like = found.like
          attitude = found.attitude
          reported = found.reported
        }
      }
    }

    if (this.savedData.replies) {
      Object.keys(this.savedData.replies).forEach((replyId) => {
        const reply = this.savedData.replies[replyId]
        if (!isReply && reply.commentId === this.comment.id) {
          const content = Object.values(reply.content)[Object.values(reply.content).length - 1];

          replies.push({
            content,
            id: replyId,
            nickname,
            uid: id,
            like: 0,
            dislike: 0,
            type: 0,
            byCurrentUser: true,
          })
        }
      })
    }

    return {
      isReportEnabled: true,
      isShowingReplies: false,
      isShowingReplyBox: false,
      isShowingEditBox: false,
      editedContent: this.comment.content,
      editingContent: '',
      replies,
      reported, // reported as abuse?
      attitude, // confirm or unflag
      like, // like or dislike
      study: config.study,
      condition: config.condition,
    }
  },
  computed: {
    isReply() {
      return !!this.parentComment
    },
    hasReplies() {
      return this.replies.length > 0
    },
    imageURL() {
      return `https://ui-avatars.com/api/?name=${this.comment.nickname}`
    },
    repliesCount() {
      return this.replies.length
    },
    whom() {
      return this.comment.type === 0 ?  '' : this.comment.type === 1 ? 'bot' : 'community'
    },
    flagInfoDisplay() {
      if (this.attitude === undefined) {
        return this.comment.flagInfo
      }

      if (this.attitude === false) {
        return this.condition === 1 ? 'Disagree with the bot: this post is not insightful' : 'Disagree with the bot: this post is not inappropriate'
      }

      return this.condition === 1 ? 'Agree with the bot: this is insightful' : 'Agree with the bot: this is inappropriate'
    },
    reportInfoDisplay() {
      if (!this.reported) {
        return this.study === 1 ? 'Report' : this.condition === 1 ? 'Recommend to bot' : 'Report to bot'
      }
      return this.study === 1 ? 'Reported' : this.condition === 1 ? 'Recommended: this is insightful' : 'Reported: this is inappropriate'
    },
    likeCount() {
      return parseInt(this.comment.like, 10) + (this.like === true ? 1 : 0)
    },
    dislikeCount() {
      return parseInt(this.comment.dislike, 10) + (this.like === false ? 1 : 0)
    },
  },
  methods: {
    reactionsRef(endpoint) {
      return (this.isReply ? `${this.user.id}/reactions/${this.parentComment.id}/replies/${this.comment.id}/` : `${this.user.id}/reactions/${this.comment.id}/`) + endpoint
    },
    report() {
      MessageBox.alert('Thank you for your feedback!', undefined, {
        showConfirmButton: true,
        confirmButtonText: 'Back to discussion',
        closeOnClickModal: true,
        center: true,
      });
      firebase.database().ref(this.reactionsRef('reported')).set(true)
      this.reported = true;
    },
    confirm() {
      firebase.database().ref(this.reactionsRef('attitude')).set(true)
      this.attitude = true;
    },
    unflag() {
      MessageBox.alert(`Thank you for your help. Your unflagging action has been reported${this.whom ? ` to the ${this.whom}` : ''}.`, undefined, {
        showConfirmButton: true,
        confirmButtonText: 'Back to discussion',
        closeOnClickModal: true,
        center: true,
      });
      firebase.database().ref(this.reactionsRef('attitude')).set(false)
      this.attitude = false;
    },
    change() {
      if (this.attitude !== undefined) {
        firebase.database().ref(this.reactionsRef('attitude')).set(null)
        this.attitude = undefined;
      }
      if (this.reported !== undefined) {
        firebase.database().ref(this.reactionsRef('reported')).set(null)
        this.reported = undefined;
      }
    },
    voteLike() {
      this.like = this.like === true ? null : true;
      firebase.database().ref(this.reactionsRef('like')).set(this.like)
    },
    voteDislike() {
      this.like = this.like === false ? null : false;
      firebase.database().ref(this.reactionsRef('like')).set(this.like)
    },
    toggleReplies() {
      this.isShowingReplies = !this.isShowingReplies
      firebase.database().ref(this.reactionsRef('viewReplies')).push((new Date()).toGMTString())
    },
    toggleReplyBox() {
      this.isShowingReplyBox = !this.isShowingReplyBox
    },
    foldReplyBox() {
      this.isShowingReplyBox = false
    },
    showEditBox() {
      this.isShowingEditBox = true
      this.editingContent = this.editedContent
    },
    hideEditBox() {
      this.isShowingEditBox = false
    },
    edit() {
      firebase.database().ref(`${this.user.id}/replies/${this.comment.id}/content`).push(this.editingContent)
      this.editedContent = this.editingContent
      this.isShowingEditBox = false
    },
  },
  mounted() {
    emitter.on('post', ({ commentId, replyId, comment }) => {
      if (commentId === this.comment.id) {
        const ref = `${this.user.id}/replies/`
        const data = {
          commentId,
          content: {
            [firebase.database().ref().child(ref).push().key]: comment.content,
          },
        }
        if (replyId) {
          data.replyId = replyId
        }
        const newKey = firebase.database().ref(ref).push().key
        firebase.database().ref(ref + newKey).set(data).then(() => {
          this.replies.push({
            ...comment,
            id: newKey,
          })
          this.isShowingReplies = true
        })
      }
    })
  },
}
</script>

<style scoped>
.button {
  display: flex;
  flex-direction: row;

  cursor: pointer;

  height: 100%;
  color: #606266;
  font-size: 12px;
  margin-right: 12px;
}
.button:disabled {
  cursor: not-allowed;
}
.button:hover, .button.active {
  color: #409eff;
}
.button > img {
  width: 13px;
  height: 13px;
  margin-right: 4px;
  filter: grayscale(10);
}
.button > img.active {
  filter: unset;
}
.button.danger {
  color: #BD1515;
  text-decoration: underline;
}
.comment {
  display: flex;
  flex-direction: column;
  margin: 8px 0;
}
.comment__main {
  display: flex;
  flex-direction: row;
}
.comment__main_avatar {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
.reply .comment__main_avatar {
  width: 30px;
  height: 30px;
  border-radius: 15px;
}
.comment__main__body {
  display: flex;
  flex-direction: column;
  flex: 1;

  margin-left: 16px;
}
.comment___main__body__nickname__report {
  display: flex;
  flex-direction: row;
}
.comment__main__body__nickname {
  color: #188fff;
  font-size: 16px;
  flex: 1;
}
.comment___main__body__report {
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 12px;
}
.comment___main__body__report__info {
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-right: 12px;
  color: #BD1515;
}
.comment___main__body__report__info img {
  width: 13px;
  height: 13px;
}
.comment___main__body__report__info .help {
  width: 12px;
  height: 12px;

  margin-left: 3px;
  margin-top: -5px;
}
.comment__main__body__content {
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.4;
}
.comment__main__body__buttons {
  display: flex;
  flex-direction: row;

  margin: 8px 0;
}
.comment__replies {
  margin-left: 56px;
}
.flag {
  margin-right: 4px;
}
</style>
