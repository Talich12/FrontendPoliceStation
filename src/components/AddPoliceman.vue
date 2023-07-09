<template>
    <h1>Сотрудник</h1>
    <el-form :inline="true" size="large" label-width="120px" class="demo-form-inline">
      <el-form-item label="Фамилия">
        <el-input v-model="lastname" />
      </el-form-item>
      <el-form-item label="Имя">
        <el-input v-model="name" />
      </el-form-item>
      <el-form-item label="Отчество">
        <el-input v-model="sername" />
      </el-form-item>
      <el-form-item label="Должность">
        <el-select v-model="job_id" class="m-2" placeholder="Select" size="large">
          <el-option
            v-for="item in jobs"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="День рождения">
        <el-date-picker
          v-model="birthday"
          type="date"
          placeholder="Pick a date"
          format = "YYYY-MM-DD"
          clearable
        />
      </el-form-item>
      <el-form-item label="Дата найма">
        <el-date-picker
          v-model="hire_date"
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
            name: "",
            lastname: "",
            sername: "",
            job_id: "",
            birthday: "",
            hire_date: "",
            jobs: []
        };
    },
    methods:{
      GetJobs(){
        axios.get("http://localhost:3000/job")
        .then(response => {
          this.jobs = response.data
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      },
      Confirm(){
        axios.post("http://localhost:3000/policeman", {
          name: this.name,
          sername: this.sername,
          lastname: this.lastname,
          job_id: this.job_id,
          hire_date: dayjs(this.hire_date).format('YYYY-MM-DD'),
          birthday: dayjs(this.birthday).format('YYYY-MM-DD')
        })
        .then(response => {
          this.jobs = response.data
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
        this.$router.push(`/`);
      }
    },
    created() {
      this.GetJobs()
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