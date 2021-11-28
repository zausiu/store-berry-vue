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
        name: 'aaa',
        description: '',
        number: '',
        price: ''
      },
    }
  },
  methods: {
    onSubmit() {
      console.log('before name:', this.name)
      console.log('submit!')
      console.log('after name:', this.name)
    },
    clearForm() {
      this.name = this.description = '';
      this.number = this.price = 0;
      console.log('before name:', this.name)
      console.log('clearForm!')
      console.log('after name:', this.name)
    }
  },
}
</script>>

<template>
  <Header></Header>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="商品名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>

    <el-form-item label="描述">
      <el-input v-model="form.description"></el-input>
    </el-form-item>

    <el-form-item label="库存数量">
      <el-input v-model="form.number"></el-input>
    </el-form-item>

    <el-form-item label="单价">
      <el-input v-model="form.price"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button @click="clearForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>