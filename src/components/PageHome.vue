<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import SkuTable from './SkuTable.vue'
import LoginStatusCheckerVue from './LoginStatusChecker.vue';
</script>

<template>
  <LoginStatusCheckerVue>
    <SkuTable />
  </LoginStatusCheckerVue>
</template>

<style>
</style>