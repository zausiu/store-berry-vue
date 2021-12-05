<script setup>
const props = defineProps({ login: Function, logout: Function })
const emit = defineEmits(['login-event'])
</script>

<script>
export default {
  data() {
    return {
      form: {
        name: 'admin',
        password: 'admin',
      },
    }
  },
  methods: {
    onSubmit() {
      const arg = {
        username: this.form.name,
        password: this.form.password
      }
      // i don't know why custom event doesn't work ~~~
      this.$emit('login-event', arg)
      console.log('Fired loginEvent...', this.$emit)
      // this.login(arg)  // using the reactjs way to get it around
    },
    clearForm() {
      this.form.name = this.form.password = '';
    },
    fillAsAdmin() {
      this.form.name = this.form.password = 'admin'
    },
    fillAsNormal() {
      this.form.name = 'foo'
      this.form.password = 'bar'
    }
  },
}
</script>>

<template>
    <h1 style="text-align:center;">Welcome to Store-berry, A naive ecommerce toy system</h1>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="form.password" show-password></el-input>
      </el-form-item>

      <el-form-item style="text-align: right;">
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button @click="clearForm">重置</el-button>
      </el-form-item>
    </el-form>
    <h3 style="margin-top:50px; color: red;" class="align-right">Cheatsheet</h3>
    <p style class="align-right">管理员用户名 admin 密码 admin</p>
    <p style class="align-right">普通用户名 foo 密码 bar</p>
    <div style class="align-right">
      <el-button @click="fillAsAdmin">用管理员登录</el-button>
      <el-button @click="fillAsNormal">用普通用户登录</el-button>
    </div>
</template>

<style scoped>
.align-right {
  text-align: right;
}
</style>
