<template>
    <h1>Оружие</h1>
    <el-form :inline="true" size="large" :model="armory" label-width="120px" class="demo-form-inline">
      <el-form-item label="Тип">
        <el-input v-model="armory.weapon_type" />
      </el-form-item>
      <el-form-item label="Код">
        <el-input v-model="armory.code" />
      </el-form-item>
      <el-form-item label="Название">
        <el-input v-model="armory.full_name" />
      </el-form-item>
      <el-form-item class="add" label="Сотрудник">
        <el-select v-model="armory.policeman.id" class="m-2" placeholder="Select" size="large">
          <el-option
            v-for="item in policemans"
            :key="item.id"
            :label="item.inicials"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <el-button class="add" type="primary" @click="Confirm()">Сохранить</el-button>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Policeman',
    data() {
        return {
          armory: {
            policeman: {
                inicials: "",
                id: 0
            }
          },
          policemans: []
        };
    },
    methods:{
      redirectToAuto(row){
        this.$router.push(`/car/${row.id}`);
      },
      GetPoliceman(){
        axios.get("http://localhost:3000/policeman")
        .then(response => {
          this.policemans = response.data
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      },
      Confirm(){
        console.log(this.armory.policeman.id)
        axios.post("http://localhost:3000/armory", {
            weapon_type: this.armory.weapon_type,
            code: this.armory.code,
            full_name: this.armory.full_name,
            policeman_id: this.armory.policeman.id
        })
        .then(response => {
          this.$router.push(`/`)
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      }
    },
    created() {
      this.GetPoliceman()
    },
  }
  </script>
  
  <style>
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  
  .add {
    margin-top: 20px;
  }
  </style>