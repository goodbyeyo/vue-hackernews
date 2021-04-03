import axios from 'axios'

// 1. HTTP Request & Response와 관련된 기본설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'    // prefix 개념의 URL
};

// 2. API 함수들을 정리
function fetchNewsList() {
    // return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);   // ` `으로 전체 url을 묶고 변수부분을 ${ } 로 처리하면 변수와 문자열 합칠수있다
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
}

// fetchNewsList()
//     .then()
//     .catch()

export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
}