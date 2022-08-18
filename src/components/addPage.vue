<template>
  <div>
    <headerPage />
    <h1>Welcome to Add addResturant Page</h1>
    <form class="add">
      <input type="text" placeholder="Enter Name" v-model="restaurent.name" />
      <input
        type="text"
        placeholder="Enter Address"
        v-model="restaurent.address"
      />
      <input
        type="password"
        placeholder="Enter Contact"
        v-model="restaurent.contactNo"
      />
      <button type="button" v-on:click="addRestu" class="add-btn">Add</button>
    </form>
  </div>
</template>     
<script>
import headerPage from "./headerPage.vue";
import axios from "axios";
export default {
  name: "addPage",
  components: {
    headerPage,
  },
  data() {
    return {
      restaurent: {
        name: "",
        address: "",
        contactNo: "",
      },
    };
  },
  methods: {
    addRestu() {
      alert("Hello addRestu");
      const result = axios.post("http://localhost:3000/restaurent/", {
        name: this.restaurent.name,
        address: this.restaurent.address,
        contactNo: this.restaurent.contactNo,
      });
      if (result.status == 201) {
        this.$router.push({ name: "homePage" });
      }
    },
  },
  mounted() { 
    
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "signUp" });
    }
  },
};
</script>

<style>
</style>