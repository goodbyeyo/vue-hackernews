<template>
    <div class="user-container">
            <div>
                <i class="fas fa-user"></i>
            </div>
            <div class="user-description">
               <div>
                   {{ info.id }}
                </div>
                <div class="time">
                    {{ info.created }}
                </div>
            </div>
    </div>
</template>

<script>
export default {
    props: {
        info: Object
    },
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