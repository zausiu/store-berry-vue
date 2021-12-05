<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import LoginStatusCheckerVue from './LoginStatusChecker.vue';
import LoginForm from './LoginForm.vue';
import { doLogin } from '../utils';
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
      console.log('got ', username, password)
      const answer = await doLogin({ username, password })
      console.log('answer is:', answer)
      if (answer.retcode != 0) {
        this.hint = '登录失败 ' + answer.data
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<template>
  <LoginStatusCheckerVue :hint="hint">
    <LoginForm @login-event="login"></LoginForm>
  </LoginStatusCheckerVue>
</template>

<style>
</style>