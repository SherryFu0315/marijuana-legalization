import Vue from 'vue'
import firebase from "firebase"
import 'element-ui/lib/theme-chalk/index.css'
import './style.css'
import { 
  Button, 
  Select,
  Row,
  Col,
  Popover,
  Input,
  Dialog,
  Form,
  FormItem,
  Rate,
} from 'element-ui';
import App from './App.vue'
import loadData from './data'
import config from './config'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Select)
Vue.use(Row)
Vue.use(Col)
Vue.use(Popover)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Rate)

firebase.initializeApp({
  apiKey: "AIzaSyCSGV8SL8f15gYwwBuK2t6k2yJ0ke80qUQ",
  authDomain: "march-version.firebaseapp.com",
  databaseURL: "https://march-version.firebaseio.com",
  projectId: "march-version",
  storageBucket: "march-version.appspot.com",
  messagingSenderId: "58729237152"
})

loadData().then(({ study, condition, name }) => {
  config.initialize({ study, condition, name })

  new Vue({
    render: h => h(App),
  }).$mount('#app')
})

