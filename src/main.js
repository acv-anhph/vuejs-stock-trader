import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import routes from './routes';
import store from './store/store';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://stock-trader-65c52.firebaseio.com/';

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.filter('currency', value => {
    return '$' + value.toLocaleString();
});

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
