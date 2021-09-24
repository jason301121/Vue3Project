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
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// 表單規則
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
configure({
    generateMessage: localize({ zh_TW: zhTW }),
    validateOnInput: true
})
setLocale('zh_TW')

const app = createApp(App);
app.config.globalProperties.$MessageState = $MessageState;
app.config.globalProperties.$filters = {
    currency,
    date,
}
app.component('Loading', Loading);
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');