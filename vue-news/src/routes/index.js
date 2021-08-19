import Vue from 'vue';
import VueRouter from 'vue-router';
// high order component 구현으로 CreateListView.js 와 ListView.vue만 필요함, 나머진 불필요
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView.js';
// beforeEnter안에 eventBus 와 store에 접근하기 위해서 
import bus from '../utils/bus.js';
import { store } from '../store/index.js';
import LoginView from '../views/LoginView.vue';
import ChartView from '../views/ChartView.vue';


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',    // url에  # 해쉬값 제거
    routes: [   // url 에 대한 라우팅 정보 명시
        {
            path: '/',
            redirect: '/news',
            // component: NewsView, 
        },
        {
            // path: url 주소
            path: '/news',
            name: 'news',
            // component: createListView('NewsView'),  // high order component
            //component: url 주소로 갔을때 표시될 컴포넌트
            component: NewsView,
            // 특정 URL 접근할때 인증정보가 있는지 확인할때 주로 사용
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');   // 데이터를 호출하기전에 spinner을 띄워놓고
                // this.$store는 vue instance 안에서 접근가능함
                store.dispatch('FETCH_LIST', to.name) // 데이터를 호출하는것을(담아오는것) 의미함
                    .then(() => {
                        // #5
                        console.log('fetched')
                        console.log(5);
                        // mixin에서 처리
                        // bus.$emit('end:spinner');  // 데이터를 담아오고 나서 3초후 spinner을 종료 
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                next();
                // console.log('to', to);  // to : 이동할 URL의 라우팅의 정보
                // console.log('from', from);  // from : 현재 URL의 라우팅 정보
                // console.log(next);
                // if(to.auth) {
                //     next();
                // }else {
                //     router.replace('/login')
                // }
                // next();
            }
        },
        {
            path: '/ask',
            name: 'ask',
            // component: createListView('AskView'),   // high order component
            component: AskView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');   // 데이터를 호출하기전에 spinner을 띄워놓고
                // this.$store는 vue instance 안에서 접근가능함
                store.dispatch('FETCH_LIST', to.name) // 데이터를 호출하는것을(담아오는것) 의미함
                    .then(() => {
                        // #5
                        console.log('fetched')
                        console.log(5);
                        // mixin에서 처리
                        // bus.$emit('end:spinner');  // 데이터를 담아오고 나서 3초후 spinner을 종료 
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                next();
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            // component: createListView('JobsView'),  // high order component
            component: JobsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');   // 데이터를 호출하기전에 spinner을 띄워놓고
                // this.$store는 vue instance 안에서 접근가능함
                store.dispatch('FETCH_LIST', to.name) // 데이터를 호출하는것을(담아오는것) 의미함
                    .then(() => {
                        // #5
                        console.log('fetched')
                        console.log(5);
                        // mixin에서 처리
                        // bus.$emit('end:spinner');  // 데이터를 담아오고 나서 3초후 spinner을 종료 
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                next();
            }
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView
        },
        {
            path: '/login',
            component: LoginView
        },
        {
            path: '/chart',
            component: ChartView
        },
    ]
})

