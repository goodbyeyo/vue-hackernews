<template>
    <div class="user-container">
            <div>
                <i class="fas fa-user"></i>
            </div>
            <div class="user-description">
                <slot name="username">
                    <!--상위컴포넌트에서 정의할 영역 -->    
                </slot>
                <div class="time">
                    <slot name="time">
                        <!--상위컴포넌트에서 정의할 영역 -->    
                    </slot>
                    <slot name="karma">
                        <!--상위컴포넌트에서 정의할 영역 -->    
                    </slot>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    props: {
        info: Object
    },
    // 1. UserView => action 호출
    // 2. action -> api 호출
    // 3. actions -> mutations -> state 호출
    // 4. state -> userProfile computed로 data 전달
    
    // 표현하는 부분에서 vuex에서 데이터를 가져오도록 하는게 적합하다

    // components tag 에서 명시적으로 데이터 전달
    // => 이점 : 

    // props로 내려온 info를 전달하기때문에 computed 속성은 필요없음
    // computed: {
    //     userInfo(){
    //         return this.$store.state.user;
    //     }
    // },

}
</script>

<style scoped>
.user-container {
    /* div가 수평으로  */
    display: flex;  
    align-items: center;
    padding: 0.5rem;
}
.fa-user {
    font-size: 2.0rem;

}
.user-description {
    padding: 8px;
}
.time {
    font-size: 7px
}
</style>