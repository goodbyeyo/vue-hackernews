<template>
    <div>
        <section>    
            <!--사용자 정보 -->
            <user-profile :info="fetchedItem">
                <!-- <router-link slot="username" :to="`/user/${fetchedItem.user}`">
                    {{ fetchedItem.user }}
                </router-link> -->
                <div slot="username">{{ fetchedItem.user }} </div>
                <template slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</template>
            </user-profile>
            <!--
            <div class="user-container">
                <div>
                    <i class="fas fa-user"></i>
                </div>
                <div class="user-description">
                    <router-link slot="username" :to="`/user/${fetchedItem.user}`">
                        {{ fetchedItem.user }}
                    </router-link>
                    <div class="time">
                        {{ fetchedItem.time_ago }}
                    </div>
                </div>
            </div> 
            -->
        </section> 
        <section>
            <h2>{{ fetchedItem.title }}</h2>
        </section>

        <section>   <!-- 질문 댓글 -->
            <div v-html="fetchedItem.content"></div>
        </section>
        
        <!-- <p>{{ this.$store.state.item.title }}</p>
        <div>{{ this.$store.state.item.content }}</div> -->
        <!-- <p>{{ fetchedItem.title }}</p>
        <div>{{ fetchedItem.content }}</div> -->
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
    components: { UserProfile },
    computed: {
        ...mapGetters(['fetchedItem' ]),
    },
    created() {
        console.log('id :::', this.$route.params.id);
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', itemId);
    }
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