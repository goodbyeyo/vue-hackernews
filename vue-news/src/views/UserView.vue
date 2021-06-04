<template>
  <div>
      <user-profile :info="userInfo"></user-profile>  <!-- computed 속성으로 내려받음-->
      <!-- 
      <p> name : {{ this.$store.state.user.id}} </p>
      <p> karma : {{ this.$store.state.user.karma}} </p>
      <p> created : {{ this.$store.state.user.created}} </p> 
      -->
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';


export default {
  components: {
    UserProfile,
  },
  computed: {
    userInfo(){
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    // userName을 dispacth 를 통해 store로 전달해서 API 호출
    this.$store.dispatch('FETCH_USER', userName);
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`)
    
  
  }
}
</script>

<style>

</style>