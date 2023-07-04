// 样式
import '@/assets/css/app.css';

import { createApp } from 'vue';
import App from '@/App.vue';

const app = createApp(App);

// pinia状态管理
import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia);

// 路由
import router from '@/router';
app.use(router);

// 主题默认设置
import appSetting from '@/appSetting';
appSetting.init();

import { createHead } from '@vueuse/head';
const head = createHead();
app.use(head);

// 图标
import { Icon } from '@iconify/vue';
app.component('Icon', Icon);

app.mount('#app');
