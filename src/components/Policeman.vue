<template>
  <h1>Сотрудник</h1>
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
    <el-form-item label="Должность">
      <el-select v-model="policeman.job_id" class="m-2" placeholder="Select" size="large">
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
        v-model="policeman.birthday"
        type="date"
        placeholder="Pick a date"
        format = "YYYY-MM-DD"
        clearable
      />
    </el-form-item>
    <el-form-item label="Дата найма">
      <el-date-picker
        v-model="policeman.hire_date"
        type="date"
        placeholder="Pick a date"
        format = "YYYY-MM-DD"
        clearable
      />
    </el-form-item>
  </el-form>
  <h1>Оружие</h1>
  <el-table :data="gun_data" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="weapon.weapon_type" label="Тип" />
      <el-table-column prop="weapon.code" label="Код" />
      <el-table-column prop="weapon.full_name" label="Полное название" />
      <el-table-column label="Удалить">
        <template #default="{ row }">
          <el-button type="danger" @click="deleteWeapon(row)">Удалить</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-form-item label="Оружие">
        <el-select v-model="gun_id" class="m-2" placeholder="Select" size="large">
          <el-option
            v-for="item in guns_data"
            :key="item.id"
            :label="item.full_name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
  <el-button class="add" type="primary" @click="pushGun()">Добавить оружие</el-button>
  <h1>Автомобили</h1>
  <el-table :data="auto_data" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="mark" label="Марка" />
      <el-table-column prop="model" label="Модель" />
      <el-table-column label="Действие">
        <template #default="{ row }">
          <el-button type="primary" @click="redirectToAuto(row)">Подробнее</el-button>
        </template>
      </el-table-column>
    </el-table>
  <el-button class="add" type="primary" @click="Confirm()">Сохранить</el-button>
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
      redirectToAuto(row){
        this.$router.push(`/car/${row.id}`);
      },
      redirectToGun(row){
        this.$router.push(`/armory/${row.id}`);
      },
      GetPoliceman(){
        axios.get("http://localhost:3000/policeman/" + this.$route.params.id)
        .then(response => {
          this.policeman = response.data
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      },
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
      GetGun(){
        axios.get("http://localhost:3000/policeman/" + this.$route.params.id + "/gun")
        .then(response => {
          this.gun_data = response.data
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      },
      pushGun(){
        axios.post("http://localhost:3000/armory-account", {
          policeman_id: this.policeman.id,
          armory_id: this.gun_id
        })
        .then(response => {
          this.GetGun()
          this.GetGuns()
          this.gun_id = ""
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      },
      GetGuns(){
        axios.get("http://localhost:3000/armory/not")
        .then(response => {
          this.guns_data = response.data
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      },
      deleteWeapon(row){
        axios.delete("http://localhost:3000/armory-account/" + row.id)
        .then(response => {
          this.GetGun()
          this.GetGuns()
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      },
      GetAuto(){
        axios.get("http://localhost:3000/policeman/" + this.$route.params.id + "/auto")
        .then(response => {
          this.auto_data = response.data
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      },
      Confirm(){
        console.log(this.policeman.hire_date)
        axios.post("http://localhost:3000/policeman/" + this.$route.params.id, {
          name: this.policeman.name,
          sername: this.policeman.sername,
          lastname: this.policeman.lastname,
          job_id: this.policeman.job_id,
          hire_date: dayjs(this.policeman.hire_date).format('YYYY-MM-DD'),
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
      this.GetPoliceman()
      this.GetJobs()
      this.GetGun()
      this.GetAuto()
      this.GetGuns()
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