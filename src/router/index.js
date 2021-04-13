import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index.vue';
import productinfo from '../components/Productinfo.vue';
import login from '../views/login.vue';
import register from '../views/register.vue'
import order from '../components/Order.vue'
import usermessage from '../components/Usermessage.vue'
import shangzhuang from '../components/ShangZhuang.vue'
import qunzhuang from '../components/QunZhuang.vue'
import xiazhuang from '../components/XiaZhuang.vue'
import user from "../views/user.vue";
import userupdate from "../components/userupdate.vue"
import password from "../components/password.vue"
import orderupdate from "../components/orderupdate.vue"
import axios from 'axios'

Vue.prototype.$axios = axios;

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/productinfo/:proid',
            name: 'productinfo',
            component: productinfo
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/shangzhuang',
            name: 'shangzhuang',
            component: shangzhuang
        },
        {
            path: '/qunzhuang',
            name: 'qunzhuang',
            component: qunzhuang
        },
        {
            path: '/xiazhuang',
            name: 'xiazhuang',
            component: xiazhuang
        },
        {
            path: '/order',
            name: 'order',
            component: order

        },
        {
            path: '/usermessage',
            name: 'usermessage',
            component: usermessage

        },
        {
            path: '/user',
            name: 'user',
            component: user

        },
        {
            path: '/userupdate',
            name: 'userupdate',
            component: userupdate
        },
        {
            path: '/password',
            name: 'password',
            component: password
        },
        {
            path: '/orderupdate',
            name: 'orderupdate',
            component: orderupdate
        },
        {
            path: '*',
            redirect: { name: 'index' },
        }
    ]
})