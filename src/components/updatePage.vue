<template>
  <div>
    <headerPage />
    <h1>Welcome to Update Resturant Page</h1>
    <form class="add">
      <input type="text" placeholder="Enter Name" v-model="restaurent.name" />
      <input
        type="text"
        placeholder="Enter Address"
        v-model="restaurent.address"
      />
      <input
        type="text"
        placeholder="Enter Contact"
        v-model="restaurent.contactNo"
      />
      <button type="button" v-on:click="updateData" class="add-btn">
        Update data
      </button>
    </form>
  </div>
</template>     
<script>
import headerPage from "./headerPage.vue";
import axios from "axios";
export default {
  name: "updatePage",
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
    updateData() {
      alert("Hello update_Data");
      const result = axios.put(
        "http://localhost:3000/restaurent/" + this.$route.params.id,
        {
          name: this.restaurent.name,
          address: this.restaurent.address,
          contactNo: this.restaurent.contactNo,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "homePage" });
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "signUp" });
    }
    const result = await axios.get(
      "http://localhost:3000/restaurent/" + this.$route.params.id
    );
    this.restaurent = result.data;
  },
};
</script>

<style>
</style>