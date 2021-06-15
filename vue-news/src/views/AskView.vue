<template> <!-- page component 로서의 역할만 하도록 처리--> 
  <div>
    <list-item></list-item>
    <!-- 
      <ul class="news-list">
      <li v-for="item in fetchedAsk" class="post">
        <div class="points">
          {{ item.points}}
        </div> 
        <p class='news-title'>
          <router-link :to="`item/${item.id}`">
            {{ item.title }} 
          </router-link>
        </p>
        <small class="link-text">
           {{item.time_ago}} by 
          <router-link v-bind:to="`/user/${item.user}`">{{ item.user }} </router-link>
        </small>
      </li>
    </ul> 
    -->
    <!----------------------------------------------------------------------->
    <!-- <p v-for="item in fetchedAsk">
      <router-link :to="`item/${item.id}`"> {{ item.title }} </router-link>
      <small> {{item.time_ago}} by {{ item.user }} </small>
    </p> -->
  </div>
</template>

<script>
// import { fetchAskList } from '../api/index.js';
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';
// import { mapState, mapGetters } from 'vuex'
export default {
  components: {
    ListItem,
  },
  created() {
    bus.$emit('start:spinner');   // 데이터를 호출하기전에 spinner을 띄워놓고
    setTimeout(() => {
      this.$store.dispatch('FETCH_ASK') // 데이터를 호출하는것을(담아오는것) 의미함
      .then(() => {
        console.log('fetched')
        bus.$emit('end:spinner');  // 데이터를 담아오고 나서 3초후 spinner을 종료 
      })
      .catch((error) => {
        console.log(error);
      });
    }, 3000);
  }
  // created() {
  //   this.$store.dispatch('FETCH_ASK');
  // }
}

</script>

<style scoped>

</style>