// 정의된 API 함수 
import {
    fetchNewsList, 
    fetchJobsList, 
    fetchAskList,
    fetchUserInfo,
    fetchCommentItem,
    fetchList
} from '../api/index.js';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                // 데이터를 꺼내와서 담은 다음 mutation에 담아주고 응답데이터를 화면으로 리턴
                context.commit('SET_NEWS', response.data);  
                // promise 객체를 반환
                // $store.dispatch 이후에 .then(), .catch() 메서드체이닝 가능
                return response;
            })
            .catch(error => {
                console.log(error);
        })
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => {   
                console.log(data);
                commit('SET_JOBS', data);   // mutations
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(({ data }) => {   
                console.log(data);
                commit('SET_ASKS', data);   // mutations 호출
            })
            .catch((error) => {
                console.log(error);
            })
    },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
            .then(({ data }) => {
                console.log(data);
                commit('SET_USER', data);   // mutations 호출
            })  
            .catch((error) => {
                console.log(error);
            })
    },
    FETCH_ITEM({ commit }, id) {
        fetchCommentItem(id)
            .then(({ data }) => {
                console.log(data);
                commit('SET_ITEM', data);   // mutations 호출
            })  
            .catch((error) => {
                console.log(error);
            })
    },
    FETCH_LIST({ commit }, pageName) {
        fetchList(pageName)
            .then(({ data }) => {
                console.log(data);
                commit('SET_LIST', data);   // mutations 호출
            })
            .catch((error) => {
                console.log(error);
            })
    }
}