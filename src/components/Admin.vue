<script setup>
import { ADDSKU_URL } from '../conf';
import { myFetch } from '../utils';
</script>

<script>
export default {
  mounted() {
  },
  data() {
    return {
      form: {
        name: '',
        description: '',
        stock: 0,
        price: 0
      },
      hint: "大王，请在此增加库存"
    }
  },
  methods: {
    async onSubmit() {
      const response = await myFetch(ADDSKU_URL, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // redirect: 'follow', // manual, *follow, error
        body: JSON.stringify({
          name: this.form.name,
          description: this.form.description,
          stock: this.form.stock,
          price: this.form.price,
        }) // body data type must match "Content-Type" header
      });
      const jsonData = await response.json()
      console.log('got resp:', jsonData)
      const respRetcode = jsonData.retcode
      console.log('AddSku got resp:', jsonData)
      if (respRetcode == 0) {
        this.hint = "增加商品成功"
      } else {
        this.hint = `增加商品失败 ${jsonData.data}`
      }
    },
    clearForm() {
      this.form.name = this.form.description = '';
      this.form.stock = this.form.price = '';
    }
  },
}
</script>>

<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="商品名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>

    <el-form-item label="描述">
      <el-input v-model="form.description"></el-input>
    </el-form-item>

    <el-form-item label="库存数量">
      <el-input v-model="form.stock"></el-input>
    </el-form-item>

    <el-form-item label="单价(元)">
      <el-input v-model="form.price"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button @click="clearForm">重置</el-button>
    </el-form-item>
  </el-form>
  <p style="text-align:center;">{{ hint }}</p>
</template>