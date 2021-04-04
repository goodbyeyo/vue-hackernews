export default {
    SET_NEWS(state, news) {  // SET_NEWS:function() ( , inheist object literal, 향샹된 객체정의법
        state.news = news;
    },
    SET_JOBS(state, jobs) {
        state.jobs = jobs;
    },
    SET_ASKS(state, asks) {
        state.asks = asks;
    },
    SET_USER(state, user) {
        state.user = user;
    }
}