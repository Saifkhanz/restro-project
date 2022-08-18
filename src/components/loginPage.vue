<template>
  <div>
    <h2>Login Page</h2>
    <div class="login">
      <input type="text" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
    </div>
    <button class="login-btn" @click="login">Login</button>
    <p>
      <router-link to="/sign-Up">Sign-Up</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "loginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      alert("Hello Vue");
      let result = await axios.get(
        `http://localhost:3000/user?email=${this.email}&password=${this.password}`
      );

      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({
          name: "homePage",
        });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "homePage" });
    }
  },
};
</script>

<style>
</style>