import Vue from 'vue';
import Vuex from 'vuex';
import {fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js';

Vue.use(Vuex); // vuex는 플러그인 형태로 제공되기때문에 Vue.use로 사용 선언

// Vuex 는 상태관리 도구
// 상태는 여러콤포넌트간의 공유되는 데이터 속성
// instance에 해당하므로 main.js 로 내보내야.. export
export const store = new Vuex.Store({    
    state: {
        news: [],
        jobs: [],
        asks: [],
    },
    actions: {  // actions 는 API 호출을 위한 역할
        FETCH_NEWS(context) {
            fetchNewsList()
                .then(response => {
                    console.log(response.data);
                    context.commit('SET_NEWS', response.data);
                })
                .catch(error => {
                    console.log(error);
            })
        },
        FETCH_JOBS(context) {
            fetchJobsList()
                .then(({data}) => {
                    console.log(data);
                    console.log(context);
                    context.commit('SET_JOBS', data);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        FETCH_ASK(context) {
            fetchAskList()
                .then(response => {   
                    console.log(response.data);
                    context.commit('SET_ASKS', response.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    mutations: {    // state에 값을 저장하기 위한 역할
        SET_NEWS(state, news) {  // SET_NEWS:function() ( , inheist object literal, 향샹된 객체정의법
            state.news = news;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        },
        SET_ASKS(state, asks) {
            state.asks = asks;
        }
    }
  })