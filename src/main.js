import Vue from 'vue'
import firebase from 'firebase';
import 'element-ui/lib/theme-chalk/index.css'
import './style.css'
import { 
  Button,
  ButtonGroup,
  Select,
  Row,
  Col,
  Popover,
  Input,
  Dialog,
  Radio,
  Form,
  FormItem,
  Rate,
} from 'element-ui';
import App from './App.vue'
import loadData from './data'
import config from './config'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Select)
Vue.use(Row)
Vue.use(Col)
Vue.use(Popover)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Rate)
Vue.use(Radio)

firebase.initializeApp({
  apiKey: "AIzaSyALHkxJvISPWUgVnkbtQCt4HP_U4TsdCKI",
  authDomain: "march2022-69ef0.firebaseapp.com",
  databaseURL: "https://march2022-69ef0-default-rtdb.firebaseio.com",
  projectId: "march2022-69ef0",
  storageBucket: "march2022-69ef0.appspot.com",
  messagingSenderId: "850332051972",
  appId: "1:850332051972:web:2147495efd0d0f3fb62351"
})

loadData().then(({ study, condition, name }) => {
  config.initialize({ study, condition, name })

  new Vue({
    render: h => h(App),
  }).$mount('#app')
})

