<script setup>
import Header from './Header.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        password: '',
      },
    }
  },
  methods: {
    onSubmit() {
    },
    clearForm() {
      this.form.name = this.form.password = '';
    }
  },
}
</script>>

<template>
  <Header></Header>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="用户名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>

    <el-form-item label="密码">
      <el-input v-model="form.password"></el-input>
    </el-form-item>

    <el-form-item style="text-align: right;">
      <el-button type="primary" @click="onSubmit">登录</el-button>
      <el-button @click="clearForm">重置</el-button>
    </el-form-item>

  </el-form>
</template>

<style scoped>
</style>