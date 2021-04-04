<template>
  <div>
      <!-- <div v-for="job in jobs"> {{ job.title }} </div> -->
      <!-- <div v-for="job in this.$store.state.jobs">{{ job.title }}</div> -->
      <p v-for="item in this.$store.state.jobs">
        <!-- v-bind 속성 연결하면 href에 변수명이 대입된다 -->
        <a :href="item.url"> <!-- <a v-bind:href="item.url"> 동일 -->
          {{ item.title }} 
        </a>
      <small>{{item.time_ago}} , {{ item.domain }} </small>
    </p>
  </div>
</template>

<script>
// import {fetchJobsList} from '../api/index.js';
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
    // fetchJobsList()
    //   .then( response => this.jobs = response.data )
    //   .catch( error => console.log(error) );
  }

}
</script>

<style>

</style>