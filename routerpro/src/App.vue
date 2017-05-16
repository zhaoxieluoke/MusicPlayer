<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <h3>MUSIC</h3>
     <p>
        <router-link to="/music/foo/pop">流行</router-link>
        <router-link to="/music/foo/rock">华语</router-link>
        <router-link to="/music/foo/eltrc">电子</router-link>
     </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'microsoft yahei','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fafafa;
  margin-top: 60px;
  font-size: 24px;
}
a{
  color: #fafafa;
  text-decoration: none;
}
.router-link-exact-active{
  color: #c7dbc1;
}
</style>
