import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import app_addPlayer from './pages/addPlayer';
import app_showPlayer from './pages/showPlayer';
import app_auth from './pages/auth';
import app_reg from './pages/helpers/registration'

const routers = [
    {
        path:'/addPlayer',
        component: app_addPlayer,
    },
    {
        path:'/showPlayer',
        component: app_showPlayer,
    },
    {
        path: '/auth',
        component: app_auth,
    },
    {
        path: '/',
        component: app_auth,
    },

];

export const router = new VueRouter({
    routes: routers,
    mode: 'history',
});