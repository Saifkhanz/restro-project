<template>
  <div>
    <headerPage />
    <h1>Hello {{ name }} Welcome to Homepage</h1>
    <table border="3">
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Address</td>
        <td>Contact No</td>
      </tr>
      <tr v-for="item in restaurents" :key="item.id">
        <td>
          {{ item.id }}
        </td>
        <td>
          {{ item.name }}
        </td>
        <td>
          {{ item.address }}
        </td>
        <td>
          {{ item.contactNo }}
        </td>
        <td>
          <router-link :to="'/updatepage/' + item.id">Update</router-link>
          <button v-on:click="deleteData(item.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>     
<script>
import headerPage from "./headerPage.vue";
import axios from "axios";
export default {
  name: "homePage",
  components: {
    headerPage,
  },
  data() {
    return {
      name: "",
      restaurents: [],
    };
  },
  methods: {
    async deleteData(id) {
      console.warn(id);
      let result = await axios.delete("http://localhost:3000/restaurent/" + id);
      if (result == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "signUp" });
      }
      let result = await axios.get("http://localhost:3000/restaurent");
      this.restaurents = result.data;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style>
table {
  margin-left: 150px;
}
td {
  width: 160px;
  height: 40px;
}
</style>