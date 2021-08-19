<template>
    <div class="header">
        <router-link to="/news">News</router-link>
        <router-link to="/ask">Ask</router-link>
        <router-link to="/jobs">Jobs</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/chart">BarChart</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.header{
    color : white;
    background-color: #42b883;
    display: flex;
    padding: 8px 8px 8px 25px;
    align-items: center;
}
.header .router-link-exact-active {
    color : #35495e;
}
.header a{
    color : white
}

</style>