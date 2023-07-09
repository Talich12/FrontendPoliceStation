<template>
    <h1>Сотрудник</h1>
    <el-form :inline="true" size="large" :model="criminal" label-width="120px" class="demo-form-inline">
      <el-form-item label="Фамилия">
        <el-input v-model="criminal.lastname" />
      </el-form-item>
      <el-form-item label="Имя">
        <el-input v-model="criminal.name" />
      </el-form-item>
      <el-form-item label="Отчество">
        <el-input v-model="criminal.sername" />
      </el-form-item>
      <el-form-item label="Статус">
        <el-input v-model="criminal.status" />
      </el-form-item>
      <el-form-item label="День рождения">
        <el-date-picker
            v-model="criminal.birthday"
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
      name: 'Criminal',
      data() {
          return {
            criminal: {},
          };
      },
      methods:{
        GetCriminal(){
          axios.get("http://localhost:3000/criminal/" + this.$route.params.id)
          .then(response => {
            this.criminal = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
        },
        Confirm(){
          axios.post("http://localhost:3000/criminal/" + this.$route.params.id, {
            name: this.criminal.name,
            sername: this.criminal.sername,
            lastname: this.criminal.lastname,
            status: this.criminal.status,
            birthday: dayjs(this.criminal.birthday).format('YYYY-MM-DD')
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