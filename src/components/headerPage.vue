<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand" href="#">Home</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                to="addPage"
                class="nav-link active"
                aria-current="page"
                href="#"
              >
                Add Resturant</router-link
              >
            </li>

            <li class="nav-item">
              <a v-on:click="logOut" class="nav-link" href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "headerPage",
  methods: {
    logOut() {
      localStorage.clear();
      this.$router.push({ name: "loginPage" });
    },
  },
};
</script>

<style>
</style>