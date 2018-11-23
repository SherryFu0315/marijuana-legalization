<template>
  <div id="app">
    <Slides v-if="!isSlidesRead" :which="which" :done="markSlidesRead"/>
    <template v-else>
      <Login v-if="!isUserinfoSet" :saveUserinfo="setUserinfo"/>
      <el-row :gutter="20" v-else>
        <el-col :span="16" :offset="4">
          <NewsArticle />
          <Statement />
          <Comments :user="user" :savedData="savedData"/>
        </el-col>
      </el-row>
    </template>
  </div>
</template>

<script>
import firebase from 'firebase'
import Slides from './components/Slides.vue'
import Login from './components/Login.vue'
import NewsArticle from './components/NewsArticle.vue'
import Statement from './components/Statement.vue'
import Comments from './components/Comments.vue'

export default {
  name: 'app',
  components: {
    Slides,
    Login,
    NewsArticle,
    Statement,
    Comments,
  },
  props: ['which'],
  data() {
    return {
      isSlidesRead: false,
      isUserinfoSet: false,
      user: {
        nickname: 'chengkang',
        password: '123456',
        id: undefined,
      },
      savedData: {},
    }
  },
  methods: {
    markSlidesRead() {
      this.isSlidesRead = true
    },
    setUserinfo(nickname, password) {
      const id = btoa(`${nickname}-${password}`)
      this.user = { nickname, password, id }
      firebase.database().ref(id).once('value').then((snapshot) => {
        const data = snapshot.val() || {}
        this.savedData = data
        this.isUserinfoSet = true
      })
    },
  },
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
.el-popover {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  font-size: 12px;
}
</style>
