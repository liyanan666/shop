import VueRouter from 'vue-router'
import Vue from 'vue'
//模板

const index = resolve => require(['../components/index/Index.vue'], resolve)
const search = resolve => require(['../components/index/Serach.vue'], resolve)
const detail = resolve => require(['../components/detail/Details.vue'], resolve)
const classification = resolve => require(['../components/classification/Classification.vue'], resolve)
const personal = resolve => require(['../components/Personal/PersonalCenter.vue'], resolve)
const personinfo = resolve => require(['../components/Personal/PersonInfo.vue'], resolve)
const shop = resolve => require(['../components/shop/Shopcart.vue'], resolve)

const login = resolve => require(['../components/login/Login.vue'], resolve)
const regiest = resolve => require(['../components/regiest/Regiest.vue'], resolve)
const tobuess = resolve => require(['../components/buess/ToBuess.vue'], resolve)
const buessDetail = resolve => require(['../components/buess/BuessDetails.vue'], resolve)
const addproduct = resolve => require(['../components/buess/AddProduct.vue'], resolve)
Vue.use(VueRouter);
//配置路由
const routes = [
    {
        path: '/index',
        name:'index',
        component: index,
    },
    {
        path: '/search',
        name:'search',
        component: search,
    },
    {
        path: '/classification',
        name:'classification',
        component: classification,
    },{
        path: '/personal',
        name:'personal',
        component: personal,
    },{
        path: '/personinfo',
        name:'personinfo',
        component: personinfo,
    }
    ,{
        path: '/shop',
        name:'shop',
        component: shop,
    },
    {
        path: '/tobuess',
        name:'tobuess',
        component: tobuess,
    },
    {
        path: '/buessDetail',
        name:'buessDetail',
        component: buessDetail,
    },
    {
        path: '/addproduct',
        name:'addproduct',
        component: addproduct,
    },
    {
        path: '/login',
        name:'login',
        component: login,
    },
    {
        path: '/regiest',
        name:'regiest',
        component: regiest,
    },
    {
        path: '/detail',
        name:'detail',
        component: detail,
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