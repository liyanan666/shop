import VueRouter from 'vue-router'
import Vue from 'vue'
//模板

const index = resolve => require(['../components/index/Index.vue'], resolve)
Vue.use(VueRouter);
//配置路由
const routes = [
    {
        path: '/index',
        component: index,
    },
    {
        path: '*',
        redirect: '/index'
    }
];

//生成路由实例
const router = new VueRouter({
    routes
});

export default router;