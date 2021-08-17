import Vue from 'vue';
import Vuex from 'vuex';
// actions.js 로 옮긴다
// import {fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js';
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex); // vuex는 플러그인 형태로 제공되기때문에 Vue.use로 사용 선언

// Vuex 는 상태관리 도구
// 상태는 여러콤포넌트간의 공유되는 데이터 속성cd
// instance에 해당하므로 main.js 로 내보내야.. export
export const store = new Vuex.Store({    
    state: {
        news: [],
        jobs: [],
        asks: [],
        user: {},
        item: {},   // itemView에 객체를 전달해야함 =>fetchedItem , [] 배열을 전달할경우 에러 발생
        list: [],   // news, jobs, asks
    },
    getters: {  // computed와 같은 속성인데 store에 있는것
        fetchedAsk(state) {
            return state.asks;
        },
        fetchedItem(state) {
            return state.item;
        }
    },
    mutations, //  축약가능(mutations:  mutations)
    // mutations: {    // state에 값을 저장하기 위한 역할
    //     SET_NEWS(state, news) {  // SET_NEWS:function() ( , inheist object literal, 향샹된 객체정의법
    //         state.news = news;
    //     },
    //     SET_JOBS(state, jobs) {
    //         state.jobs = jobs;
    //     },
    //     SET_ASKS(state, asks) {
    //         state.asks = asks;
    //     }
    // },
    actions,  // 축약 가능(actions: actions)
    // actions: {  // actions 는 API 호출을 위한 역할
    //     FETCH_NEWS(context) {
    //         fetchNewsList()
    //             .then(response => {
    //                 console.log(response.data);
    //                 context.commit('SET_NEWS', response.data);
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //         })
    //     },
    //     FETCH_JOBS({ commit }) {
    //         fetchJobsList()
    //             .then(({ data }) => {   
    //                 console.log(data);
    //                 commit('SET_JOBS', data);   // mutations
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             })
    //     },
    //     FETCH_ASK({ commit }) {
    //         fetchAskList()
    //             .then(({data}) => {   
    //                 console.log(data);
    //                 commit('SET_ASKS', data);   // mutations 호출
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             })
    //     }
    // },
  })