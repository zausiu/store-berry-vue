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

        // this.$router.push('/')
    },

    methods: {
        async logout() {
            await doLogout();
            this.$router.push('/login')
        },
        toAdmin() {
            console.log('to pageAdmin')
            this.$router.push('/admin')
        },
        toHome() {
            this.$router.push('/')
        }
    }
}
</script>>

<template>
    <!-- <router-link to="/">~Home~  </router-link> -->
    <!-- <router-link to="/login">~Login~</router-link> -->
    <el-row v-if="isLoggedIn">
        <el-col :span="8">
            <div class="grid-content"></div>
        </el-col>
        <el-col :span="8">
            <div class="grid-content"></div>
        </el-col>
        <el-col :span="8">
            <div class="grid-content">
                用户 {{ userName }} 角色 {{ userRole }}
                <el-button @click="logout" type="primary">登出</el-button>
                <el-button @click="toHome" type="primary">HOME</el-button>
                <el-button v-if="userRole == 'ADMIN'"  @click="toAdmin" type="primary">管理页面</el-button>
            </div>
        </el-col>
    </el-row>
    <el-row v-else>
        <el-col :span="8">
            <div class="grid-content"></div>
        </el-col>
        <el-col :span="8">
            <div class="grid-content"></div>
        </el-col>
        <el-col :span="8">
            <div class="grid-content">
                未登录
                <span style="color:red;">{{ this.hint }}</span>
            </div>
        </el-col>
    </el-row>
    <slot></slot>
</template>