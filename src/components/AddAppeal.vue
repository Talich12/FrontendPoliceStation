<template>
    <h1>Жалоба</h1>
    <el-form :inline="true" size="large" :model="policeman" label-width="120px" class="demo-form-inline">
      <el-form-item label="Фамилия">
        <el-input v-model="policeman.lastname" />
      </el-form-item>
      <el-form-item label="Имя">
        <el-input v-model="policeman.name" />
      </el-form-item>
      <el-form-item label="Отчество">
        <el-input v-model="policeman.sername" />
      </el-form-item>
      <el-form-item label="Отчет">
        <el-input v-model="policeman.report" />
      </el-form-item>
      <el-form-item label="Адресс">
        <el-input v-model="policeman.adress" />
      </el-form-item>
      <el-form-item label="День рождения">
        <el-date-picker
          v-model="policeman.birthday"
          type="date"
          placeholder="Pick a date"
          format = "YYYY-MM-DD"
          clearable
        />
      </el-form-item>
      <el-form-item label="Дата">
        <el-date-picker
          v-model="policeman.date"
          type="date"
          placeholder="Pick a date"
          format = "YYYY-MM-DD"
          clearable
        />
      </el-form-item>
    </el-form>
    <el-button class="add" type="primary" @click="Confirm()">Добавить</el-button>
  </template>
    
  <script>
    import dayjs from 'dayjs';
    import axios from 'axios';
    export default {
      name: 'Policeman',
      data() {
          return {
            policeman: {},
            jobs: [],
            gun_data: [],
            guns_data: [],
            auto_data: [],
            gun_id: ''
          };
      },
      methods:{
        Confirm(){
          console.log(this.policeman.hire_date)
          axios.post("http://localhost:3000/appeal", {
            name: this.policeman.name,
            sername: this.policeman.sername,
            lastname: this.policeman.lastname,
            adress: this.policeman.adress,
            report: this.policeman.report,
            date: dayjs(this.policeman.date).format('YYYY-MM-DD'),
            birthday: dayjs(this.policeman.birthday).format('YYYY-MM-DD')
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