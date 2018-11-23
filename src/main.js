import Vue from 'vue'
import firebase from "firebase"
import 'element-ui/lib/theme-chalk/index.css';
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
} from 'element-ui';
import App from './App.vue'
import loadData from './data'

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

const config = {
  apiKey: "AIzaSyD4ib-H0aPM6TyQE4D8-AZij7OvSv6crl0",
  authDomain: "bot-signal-2.firebaseapp.com",
  databaseURL: "https://bot-signal-2.firebaseio.com",
  projectId: "bot-signal-2",
  storageBucket: "bot-signal-2.appspot.com",
  messagingSenderId: "120691170931",
}
firebase.initializeApp(config)

loadData().then((which) => {
  new Vue({
    render: h => h(App, {
      props: {
        which,
      },
    }),
  }).$mount('#app')
})

