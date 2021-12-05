<script setup>
import { LOGIN_URL } from '../conf';
</script>

<script>
export default {
    data() {
        return {
            isLoggedIn: false,
            userName: null,
            userRole: 'N/A',
            hint: null
        }
    },
    async mounted() {
        const isLoggedIn = window.localStorage.getItem('isLoggedIn')
        const userName = window.localStorage.getItem('userName')
        const userRole = window.localStorage.getItem('userRole')
        console.log('mountedLoginChecker', this.isLoggedIn, this.userName, this.userRole)
        await this.login('admin', 'admin')
        console.log('now:', this.isLoggedIn, this.userName, this.userRole)
    },

    methods: {
        async login(username, password) {
            const response = await fetch(LOGIN_URL, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                // redirect: 'follow', // manual, *follow, error
                body: JSON.stringify({
                    username,
                    password
                }) // body data type must match "Content-Type" header
            });
            const json_data = await response.json()
            console.log('got resp:', json_data)
            const respRetcode = json_data.retcode
            const respData = json_data.data
            if (respRetcode == 0) {
                this.isLoggedIn = true
                this.userName = username
                this.userRole = respData.role
                this.hint = '登录成功'
            } else {
                this.isLoggedIn = false
                this.userName = username
                this.userRole = 'UNKNOWN'
                this.hint = `登录失败` // ${respData.data}`
            }
        },

        async logout() {
            const response = await fetch(LOGOUT_URL, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                // redirect: 'follow', // manual, *follow, error
                body: JSON.stringify() // body data type must match "Content-Type" header
            });
            const json_data = await response.json()
            console.log('got resp:', json_data)
            const respRetcode = json_data.retcode
            if (respRetcode == 0) {
            } else {
            }
        }
    }
}
</script>>

<template>
    <p>{{ isLoggedIn }} {{ userRole }} {{ hint }}</p>
</template>