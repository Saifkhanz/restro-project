<template>
  <div>
    <img class="logo" alt="Resturant logo" src="./assets/restroimage.png" />
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 8px;
}
.logo {
  margin-bottom: 5px;
  width: 150px;
}
.registration input,
.login input,
.add input {
  width: 300px;
  height: 40px;
  padding-left: 15px;
  margin-bottom: 30px;
  display: block;
  border: 1px solid seagreen;
  margin-left: auto;
  margin-right: auto;
}
.sign-up-btn,
.login-btn,
.add-btn {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: rgb(119, 13, 48);
  color: #fff;
  cursor: pointer;
}
</style>
