<script setup>
import { LISTSKU_URL } from '../conf'
</script>

<script>
export default {
  data() {
    return {
      tableData: [
      ],
      keywords: ''
    }
  },
  async mounted() { 
    this.refresh()
  },

  methods: {
    async refresh() {
      const url = `${LISTSKU_URL}?keywords=${this.keywords}`
      const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include",
        // headers: {
        // 'Cookie': 'adonis-session=s%3AeyJtZXNzYWdlIjoiY2t3c3dwcW14MDA2OGgwanViZGtqMXJwaSIsInB1cnBvc2UiOiJhZG9uaXMtc2Vzc2lvbiJ9.31PSHPumUwk2NIjk5847JkIe4cuIZ5NUmC8H6venzHU; ckwswpqmx0068h0jubdkj1rpi=e%3AHuopoQeSMbc0K3hX4irT6PEMzeVjIPQ6L7ho4BBVNFYSMaJ6lQ8_Hkkf-BugC-ORa38qZzleiTTjlpd3I6J_kdNJ3YMtljfIb8U7ORmaf1Q.dE1Ed1F4WUVHRWYxN1o2Yw.LOofM44ajq-pixfoJrSIqqiphStPdVSfmcBckxl6MmI'
        // },
        // body: JSON.stringify([]) // body data type must match "Content-Type" header
      });
      const jsonData = await response.json()
      // console.log('jsonData:', jsonData)
      if (jsonData.retcode != 0) {
        throw Error('alas~~' + jsonData)
      }

      this.tableData = jsonData.data
    }
  }
}
</script>

<template>
  <div style="text-align: center;">
    <el-container style="margin:20px">
      <el-table :data="tableData">
        <el-table-column prop="name" label="Name" width="140"></el-table-column>
        <el-table-column prop="description" label="Description" width="300"></el-table-column>
        <el-table-column prop="price" label="Price" width="80"></el-table-column>
        <el-table-column prop="stock" label="Stock" width="80"></el-table-column>
      </el-table>
    </el-container>
    <el-row>
      <el-col :span="4">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          <el-input v-model="keywords" placeholder="商品名或介绍关键字" />
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content">
          <el-button @click="refresh" size="medium">Search</el-button>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
</style>
