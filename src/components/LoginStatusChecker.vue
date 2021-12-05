<script setup>
import { LOGIN_STATUS_MARKER } from '../conf';
import { doLogout } from '../utils'

const props = defineProps({
    hint: String
})

</script>

<script>
export default {
    data() {
        return {
            isLoggedIn: false,
            userName: null,
            userRole: 'N/A',
        }
    },
    async mounted() {
        const loginMarker = window.localStorage.getItem(LOGIN_STATUS_MARKER)
        console.log('loginMarker is:', loginMarker)
        if (!loginMarker || typeof loginMarker != 'string') {
            this.$router.push('/login')
            return
        }
        const [userName, userRole] = loginMarker.split(',')
        if (!userName || !userRole) {
            this.$router.push('/login')
            return
        }

        this.isLoggedIn = true
        this.userName = userName
        this.userRole = userRole

        this.$router.push('/')
    },

    methods: {
        async logout() {
            await doLogout();
            this.$router.push('/login')
        }
    }
}
</script>>

<template>
    <!-- <router-link to="/">~Home~  </router-link> -->
    <!-- <router-link to="/login">~Login~</router-link> -->
    <p v-if="isLoggedIn" style="text-align: right;">
        用户 {{ userName }} 角色 {{ userRole }}
        <el-button @click="logout" type="primary">登出</el-button>
        <slot></slot>
    </p>
    <p v-else style="text-align: right;">
        未登录
        <span style="color:red;">{{ this.hint }}</span>
        <slot></slot>
    </p>
</template>