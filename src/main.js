import { createApp } from 'vue';
import App from './App.vue';
// Axios
import axios from 'axios';
import VueAxios from 'vue-axios';
// 路由
import router from './router';
// 讀取效果
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
//ToastMessage
import $MessageState from './methods/MessageState';
// currency
import { currency, date } from './methods/filters';
// Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';
// 表單驗證
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
//csshake
import 'csshake';
//vuex
import store from './store';
//sweetalert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const option = {
        toast: true,
        position: 'top-end',
        background: 'white',
        showConfirmButton: false,
        timer: 1500,
    }
    //AOS滑動效果
import AOS from 'aos'
import 'aos/dist/aos.css'
// import 'animate.css'


// 表單規則
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
configure({
    generateMessage: localize({ zh_TW: zhTW }),
    validateOnInput: true
})
setLocale('zh_TW')

const app = createApp(App).use(store);
app.config.globalProperties.$MessageState = $MessageState;
app.config.globalProperties.$filters = {
    currency,
    date,
}

AOS.init({
    delay: 100,
    duration: 500
})

app.component('Loading', Loading);
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.use(VueSweetalert2, option)
app.use(VueAxios, axios);
app.use(router);
app.use(store);
app.mount('#app');