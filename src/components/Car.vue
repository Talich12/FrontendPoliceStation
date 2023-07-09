<template>
    <h1>Автомобиль</h1>
    <el-form :inline="true" size="large" :model="car" label-width="120px" class="demo-form-inline">
      <el-form-item label="Модель">
        <el-input v-model="car.mark" />
      </el-form-item>
      <el-form-item label="Марка">
        <el-input v-model="car.model" />
      </el-form-item>
    </el-form>
    <h1>Сотрудники</h1>
    <el-table :data="policeman" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="lastname" label="Фамилия"/>
      <el-table-column prop="name" label="Имя"/>
      <el-table-column prop="sername" label="Отчество" />
      <el-table-column prop="job_name" label="Должность" />
      <el-table-column prop="birthday" label="Дата рождения" />
      <el-table-column prop="hire_date" label="Дата найма" />
      <el-table-column label="Действие">
        <template #default="{ row }">
          <el-button type="primary" @click="redirectToPoliceman(row)">Открыть</el-button>
        </template>
      </el-table-column>
      <el-table-column label="Удалить">
        <template #default="{ row }">
          <el-button type="danger" @click="deletePoliceman(row)">Удалить</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button-group>
      <el-form-item class="add" label="Сотрудник">
        <el-select v-model="policeman_id" class="m-2" placeholder="Select" size="large">
          <el-option
            v-for="item in not_policemans"
            :key="item.id"
            :label="item.inicials"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-button class="add" type="primary" @click="Confirm()">Сохранить</el-button>
      <el-button class="add" type="success" @click="addCarAccounting()">Добавить сотрудника в машину</el-button>
  </el-button-group>

</template>

 
<script>
import dayjs from 'dayjs';
import axios from 'axios';
export default {
  name: 'Policeman',
  data() {
      return {
        car: {},
        policeman: [],
        not_policemans: [],
        policeman_id: ""
      };
  },
  methods:{
    redirectToPoliceman(row) {
      // Перенаправление на другой путь с помощью Vue Router
      this.$router.push(`/policeman/${row.id}`);
    },
    deletePoliceman(row){
      axios.delete("http://localhost:3000/car-account/" + row.id + "/policeman")
      .then(response => {
        console.log(response.data)
        this.GetPoliceman()
      })
      .catch(error => {
        console.log(error)
      })
    },
    GetCar(){
      axios.get("http://localhost:3000/autopark/" + this.$route.params.id)
      .then(response => {
        this.car = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    GetPoliceman(){
      axios.get("http://localhost:3000/autopark/" + this.$route.params.id + "/policeman")
      .then(response => {
        this.policeman = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    GetPolicemanNot(){
      axios.get("http://localhost:3000/autopark/" + this.$route.params.id + "/policeman/not")
      .then(response => {
        this.not_policemans = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    Confirm(){
      axios.post("http://localhost:3000/autopark/" + this.$route.params.id, {
        mark: this.car.mark,
        model: this.car.model
      })
      .then(response => {
        this.$router.push(`/`);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    addCarAccounting(){
      console.log(this.policeman_id)
      axios.post("http://localhost:3000/car-account", {
        car_id: this.$route.params.id,
        policeman_id: this.policeman_id
      })
      .then(response => {
        this.GetPoliceman()
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  created() {
    this.GetCar()
    this.GetPoliceman()
    this.GetPolicemanNot()
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