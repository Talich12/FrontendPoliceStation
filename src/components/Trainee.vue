<template>
    <h1>Стажер</h1>
    <el-form :inline="true" size="large" :model="trainee" label-width="120px" class="demo-form-inline">
      <el-form-item label="Фамилия">
        <el-input v-model="trainee.lastname" />
      </el-form-item>
      <el-form-item label="Имя">
        <el-input v-model="trainee.name" />
      </el-form-item>
      <el-form-item label="Отчество">
        <el-input v-model="trainee.sername" />
      </el-form-item>
      <el-form-item label="Сотрудник">
        <el-select v-model="trainee.curator.id" class="m-2" placeholder="Select" size="large">
          <el-option
            v-for="item in policemans"
            :key="item.id"
            :label="item.inicials"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="День рождения">
        <el-date-picker
          v-model="trainee.birthday"
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
      name: 'Trainee',
      data() {
          return {
            trainee: {
              curator: {
                id: ""
              }
            },
            policemans: []
          };
      },
      methods:{
        redirectToAuto(row){
          this.$router.push(`/car/${row.id}`);
        },
        redirectToGun(row){
          this.$router.push(`/armory/${row.id}`);
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
        GetTrainee(){
          axios.get("http://localhost:3000/trainee/" + this.$route.params.id)
          .then(response => {
            this.trainee = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
        },
        Confirm(){
          axios.post("http://localhost:3000/trainee/" + this.$route.params.id, {
            name: this.trainee.name,
            sername: this.trainee.sername,
            lastname: this.trainee.lastname,
            curator_id: this.trainee.curator.id,
            birthday: dayjs(this.trainee.birthday).format('YYYY-MM-DD')
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
        this.GetTrainee()
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