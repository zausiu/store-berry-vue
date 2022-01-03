<script setup>
import _ from 'lodash'
import { BUYSKU_URL, LISTSKU_URL } from '../conf'
import { myFetch } from '../utils';
</script>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          bCount: null,
        }
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
      const response = await myFetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include",
        headers: {},
        // body: JSON.stringify([]) // body data type must match "Content-Type" header
      });
      const jsonData = await response.json()
      console.log('jsonData:', jsonData)
      if (jsonData.retcode != 0) {
        throw Error('alas~~' + jsonData)
      }
      let records = jsonData.data
      records = records.map(x => {
        x.price = x.price / 100
        x.bCount = 0
        return x
      }).reverse()
      this.tableData = records
      console.log('tableData: ', records)
    },

    buy: _.debounce(async function (row) {
      console.log(`Fun buy got request: ${row}`);
      const skuId = row.id
      const bCount = row.bCount
      const skuName = row.name
      const response = await myFetch(BUYSKU_URL, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sku_id: skuId,
          sku_count: bCount
        }) // body data type must match "Content-Type" header
      });
      const jsonData = await response.json()
      console.log('Tried to make order and got resp:', jsonData)
      const respRetcode = jsonData.retcode
      if (respRetcode == 0) {
        row.stock = jsonData.stock
        alert(`成功购买 ${skuName} x ${bCount}`)
      } else {
        alert(`购买失败！ ${jsonData.data}`)
      }
    }, 666),

    async handleChange(v) {
      // console.log('handleChange', v)
    }
  }
}
</script>

<template>
  <el-container style="margin-left:200px;">
    <el-table :data="tableData">
      <!-- <el-table-column prop="id" label="商品编号" width="50"></el-table-column> -->
      <el-table-column prop="name" label="商品名" width="100"></el-table-column>
      <el-table-column prop="description" label="描述" width="220"></el-table-column>
      <el-table-column prop="price" label="价格/元" width="90"></el-table-column>
      <el-table-column prop="stock" label="库存数量" width="90"></el-table-column>
      <el-table-column prop="bCount" label="购买数量" width="90"></el-table-column>

      <el-table-column label="为何不BUY" width="180">
        <template #default="scope">
          <el-button @click="buy(scope.row)">买他</el-button>
          <el-input-number v-model="scope.row.bCount" :min="1" :max="10" @change="handleChange" />
        </template>
      </el-table-column>
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
        <el-button @click="refresh()" size="medium">Search</el-button>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content"></div>
    </el-col>
  </el-row>
</template>

<style scoped>
</style>
