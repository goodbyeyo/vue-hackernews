<template>
  <div>
    <list-item></list-item>
    <!-- 
      <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" class="post">
        <div class="points">
          11
        </div> 
        <p class='news-title'>
          <a :href="job.url"> 
           {{ job.title }} 
          </a>
        </p>
        <small class="link-text">
          {{job.time_ago}} by 
          <a :href="job.url">
             {{ job.domain }}
          </a>
        </small>
      </li>
    </ul> 
    -->
      <!-- <div v-for="job in jobs"> {{ job.title }} </div> -->
      <!-- <div v-for="job in this.$store.state.jobs">{{ job.title }}</div> -->
    <!-- <p v-for="item in this.$store.state.jobs">
        <a :href="item.url"> 
          {{ item.title }} 
        </a>
      <small>{{item.time_ago}} , {{ item.domain }} </small>
    </p> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';
// import {fetchJobsList} from '../api/index.js';
export default {
  components: { ListItem },
  created() {
    bus.$emit('start:spinner');   // 데이터를 호출하기전에 spinner을 띄워놓고
    setTimeout(() => {
      this.$store.dispatch('FETCH_JOBS') // 데이터를 호출하는것을(담아오는것) 의미함
      .then(() => {
        console.log('fetched')
        bus.$emit('end:spinner');  // 데이터를 담아오고 나서 3초후 spinner을 종료 
      })
      .catch((error) => {
        console.log(error);
      });
    }, 3000);
  }
}
  // created() {
  //   this.$store.dispatch('FETCH_JOBS');
    // fetchJobsList()
    //   .then( response => this.jobs = response.data )
    //   .catch( error => console.log(error) );
  // }

// }
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;  /* 수직 정렬 */
  justify-content: center; /* 가로 정렬 */
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282
}

</style>