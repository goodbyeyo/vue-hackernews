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
    // high order component 구현으로 불필요한 action function 제거
    FETCH_NEWS(context) {
        return fetchNewsList()  // 메서드 체이닝을 위해 return이 있어야 비동기처리가능
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
        return fetchJobsList()
            .then(({ data }) => {   
                console.log(data);
                commit('SET_JOBS', data);   // mutations
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_ASK({ commit }) {
        return fetchAskList()
            .then(({ data }) => {   
                console.log(data);
                commit('SET_ASKS', data);   // mutations 호출
            })
            .catch((error) => {
                console.log(error);
            })
    },
    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
            .then(({ data }) => {
                console.log(data);
                commit('SET_USER', data);   // mutations 호출
            })  
            .catch((error) => {
                console.log(error);
            })
    },
    FETCH_ITEM({ commit }, id) {
        return fetchCommentItem(id)
            .then(({ data }) => {
                console.log(data);
                commit('SET_ITEM', data);   // mutations 호출
            })  
            .catch((error) => {
                console.log(error);
            })
    },
    FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then(({ data }) => {
                console.log(data);
                commit('SET_LIST', data);   // mutations 호출
            })
            .catch((error) => {
                console.log(error);
            })
    }
}