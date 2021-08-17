import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',    // url에  # 해쉬값 제거
    routes: [   // url 에 대한 라우팅 정보 명시
        {
            path: '/',
            component: NewsView, 
        },
        {
            // path: url 주소
            path: '/news',
            name: 'news',
            component: createListView('NewsView'),  // high order component
            //component: url 주소로 갔을때 표시될 컴포넌트
            // component: NewsView,
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('AskView'),   // high order component
            // component: AskView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('JobsView'),  // high order component
            // component: JobsView,
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView
        },
    ]
})

