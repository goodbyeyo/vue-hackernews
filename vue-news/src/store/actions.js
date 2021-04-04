// 정의된 API 함수 
import {
    fetchNewsList, 
    fetchJobsList, 
    fetchAskList 
} from '../api/index.js';

export default {
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
    }
}