<script setup>
</script>

<script>
export default {
  data() {
    return {
      userName: "kamuszhou",
      isLogged: true,
    }
  },
  methods: {
  }
}
</script>

<template>
  <el-header style="text-align: right; font-size: 21px; margin-right: 20px;">
    <!-- <span>{{ userName }}</span> -->
    <!-- <span>{{ isLogged ? userName : "Login" }}</span> -->
    <router-link to="/">~Home~  </router-link>
    <router-link to="/login">~Login~</router-link>
  </el-header>
</template>

<style scoped>
</style>