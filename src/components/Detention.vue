<template>
    <h1>Сотрудник</h1>
    <el-form :inline="true" size="large" :model="detention" label-width="120px" class="demo-form-inline">
      <el-form-item label="Статья">
        <el-input v-model="detention.article" />
      </el-form-item>
      
      <el-form-item label="Сотрудник">
        <el-select v-model="detention.policeman.id" class="m-2" placeholder="Select" size="large">
          <el-option
            v-for="item in policemans"
            :key="item.id"
            :label="item.inicials"
            :value="item.id"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="Задержанный">
        <el-select v-model="detention.criminal.id" class="m-2" placeholder="Select" size="large">
          <el-option
            v-for="item in criminals"
            :key="item.id"
            :label="item.inicials"
            :value="item.id"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="Дата">
        <el-date-picker
          v-model="detention.date"
          type="date"
          placeholder="Pick a date"
          format = "YYYY-MM-DD"
          clearable
        />
      </el-form-item>
    </el-form>
    <el-button class="add" type="primary" @click="Confirm()">Сохранить</el-button>
  </template>
    
  <script>
    import dayjs from 'dayjs';
    import axios from 'axios';
    export default {
      name: 'Detention',
      data() {
          return {
            detention: {
                policeman: {
                    id: ""
                },
                criminal: {
                    id: ""
                }
            },
            policemans: [],
            criminals: []
          };
      },
      methods:{
        GetDetention(){
            axios.get("http://localhost:3000/detention/" + this.$route.params.id)
          .then(response => {
            this.detention = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
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
        GetCriminal(){
          axios.get("http://localhost:3000/criminal")
          .then(response => {
            this.criminals = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
        },
        Confirm(){
          axios.post("http://localhost:3000/detention/" + this.$route.params.id, {
            policeman_id: this.detention.policeman.id,
            criminal_id: this.detention.criminal.id,
            article: this.detention.article,
            date: dayjs(this.detention.date).format('YYYY-MM-DD')
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
        this.GetDetention()
        this.GetPoliceman()
        this.GetCriminal()
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