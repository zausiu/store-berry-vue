<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import LoginStatusCheckerVue from './LoginStatusChecker.vue';
import Admin from './Admin.vue';
</script>

<script>
const LOGIN_MARKER = 'login-staus-marker'

export default {
  data() {
    return {
      hint: null
    }
  },
  methods: {
    async login({ username, password }) {
    }
  }
}
</script>

<template>
  <LoginStatusCheckerVue>
    <Admin />
  </LoginStatusCheckerVue>
</template>

<style>
</style>