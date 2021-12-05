<script setup>
</script>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ]
    }
  },
  methods: {
    async refresh() {
      // const url = ''
      // const response = await fetch(url, {
      //   method: 'GET', // *GET, POST, PUT, DELETE, etc.
      //   mode: 'cors', // no-cors, *cors, same-origin
      //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //   // headers: {
      //   // 'Content-Type': 'application/json'
      //   // 'Content-Type': 'application/x-www-form-urlencoded',
      //   // },
      //   redirect: 'follow', // manual, *follow, error
      //   // body: JSON.stringify([]) // body data type must match "Content-Type" header
      // });
      // console.log('got resp:', response.json());

      this.tableData.push({
        date: 'data ta d dfad',
        name: "name....",
        address: "Aaa"
      })
    }
  }
}
</script>

<template>
  <div style="text-align: center;">
    <el-container style="margin:20px">
      <el-table :data="tableData">
        <el-table-column prop="date" label="Date" width="140"></el-table-column>
        <el-table-column prop="name" label="Name" width="120"></el-table-column>
        <el-table-column prop="address" label="Address" width="300"></el-table-column>
      </el-table>
    </el-container>
    <el-button @click="refresh">Primary</el-button>
  </div>
</template>

<style scoped>
</style>
