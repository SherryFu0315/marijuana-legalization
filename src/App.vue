<template>
  <div id="app">
    <Slides v-if="!isSlidesRead" :which="which" :done="markSlidesRead"/>
    <template v-else>
      <Login v-if="!isUserinfoSet" :saveUserinfo="setUserinfo"/>
      <div class="main" v-else>
          <NewsArticle />
          <Statement :which="which"/>
          <Comments :user="user" :savedData="savedData"/>
      </div>
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
  margin-top: 32px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
.main {
  width: 100%;
  max-width: 39rem;
  display: flex;
  flex-direction: column;
}
</style>
