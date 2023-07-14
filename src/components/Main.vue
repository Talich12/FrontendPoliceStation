
<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="Сотрудники" name="first">Сотрудники</el-tab-pane>
    <el-tab-pane label="Автопарк" name="second">Автопарк</el-tab-pane>
    <el-tab-pane label="Оружейный склад" name="third">Оружейный склад</el-tab-pane>
    <el-tab-pane label="Стажеры" name="fourth">Стажеры</el-tab-pane>
    <el-tab-pane label="Задержания" name="five">Задержания</el-tab-pane>
    <el-tab-pane label="Преступники" name="six">Преступники</el-tab-pane>
    <el-tab-pane label="Должности" name="seven">Должности</el-tab-pane>
    <el-tab-pane label="Статусы" name="eight">Статусы</el-tab-pane>
    <el-tab-pane label="Отчеты" name="nine">Отчеты</el-tab-pane>
    <el-tab-pane label="Жалобы" name="ten">Жалобы</el-tab-pane>
  </el-tabs>

  <div v-if="activeName == 'first'">
    <el-table :data="tableData" style="width: 100%">
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
    <el-button @click="addPoliceman()" class="add" size="large" type="primary">Добавить сотрудника</el-button>
  </div>

  <div v-if="activeName == 'second'">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="mark" label="Марка" />
      <el-table-column prop="model" label="Модель" />
      <el-table-column label="Действие">
        <template #default="{ row }">
          <el-button type="primary" @click="redirectToAuto(row)">Открыть</el-button>
        </template>
      </el-table-column>
      <el-table-column label="Удалить">
        <template #default="{ row }">
          <el-button type="danger" @click="deleteCar(row)">Удалить</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button  @click="addCar()"  class="add" size="large" type="primary">Добавить авто</el-button>
  </div>

  <div v-if="activeName == 'third'">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="weapon_type" label="Тип" />
      <el-table-column prop="code" label="Код" />
      <el-table-column prop="full_name" label="Полное название" />
      <el-table-column prop="status" label="Статус" />
      <el-table-column label="Действие">
        <template #default="{ row }">
          <el-button type="primary" @click="redirectToGun(row)">View</el-button>
        </template>
      </el-table-column>
      <el-table-column label="Удалить">
        <template #default="{ row }">
          <el-button type="danger" @click="deleteGun(row)">Удалить</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="addGun(row)" class="add" size="large" type="primary">Добавить оружие</el-button>
  </div>

  <div v-if="activeName == 'fourth'">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="lastname" label="Фамилия"/>
      <el-table-column prop="name" label="Имя"/>
      <el-table-column prop="sername" label="Отчество" />
      <el-table-column prop="birthday" label="Дата рождения" />
      <el-table-column prop="curator_fullname" label="Куратор" />
      <el-table-column label="Действие">
        <template #default="{ row }">
          <el-button type="primary" @click="redirectToTrainee(row)">View</el-button>
        </template>
      </el-table-column>
      <el-table-column label="Удалить">
        <template #default="{ row }">
          <el-button type="danger" @click="deleteTrainee(row)">Удалить</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="addTrainee(row)" class="add" size="large" type="primary">Добавить стажера</el-button>
  </div>

  <div v-if="activeName == 'five'">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="policeman_fullname" label="Сотрудник"/>
      <el-table-column prop="criminal_fullname" label="Задержанный"/>
      <el-table-column prop="article" label="Статья" />
      <el-table-column prop="report" label="Отчет" />
      <el-table-column prop="date" label="Дата задержания" />
      <el-table-column label="Действие">
        <template #default="{ row }">
          <el-button type="primary" @click="redirectToDetention(row)">View</el-button>
        </template>
      </el-table-column>
      <el-table-column label="Удалить">
        <template #default="{ row }">
          <el-button type="danger" @click="deleteDetention(row)">Удалить</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button  @click="addDetention(row)" class="add" size="large" type="primary">Добавить задержание</el-button>
  </div>

  <div v-if="activeName == 'six'">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="lastname" label="Фамилия"/>
      <el-table-column prop="name" label="Имя"/>
      <el-table-column prop="sername" label="Отчество" />
      <el-table-column prop="birthday" label="Дата рождения" />
      <el-table-column prop="status.status" label="Статус" />
      <el-table-column label="Действие">
        <template #default="{ row }">
          <el-button type="primary" @click="redirectToCriminal(row)">View</el-button>
        </template>
      </el-table-column>
      <el-table-column label="Удалить">
        <template #default="{ row }">
          <el-button type="danger" @click="deleteCriminal(row)">Удалить</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="addCriminal()" class="add" size="large" type="primary">Добавить преступника</el-button>
  </div>
  
  <div v-if="activeName == 'seven'">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="name" label="Название должности"/>
      <el-table-column label="Удалить">
        <template #default="{ row }">
          <el-button type="danger" @click="deleteJob(row)">Удалить</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="addJob()" class="add" size="large" type="primary">Добавить Должность</el-button>
  </div>

  <div v-if="activeName == 'eight'">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="status" label="Статус"/>
      <el-table-column label="Удалить">
        <template #default="{ row }">
          <el-button type="danger" @click="deleteStatus(row)">Удалить</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="addStatus()" class="add" size="large" type="primary">Добавить Должность</el-button>
  </div>

  <div v-if="activeName == 'nine'">
    <el-tabs v-model="activeReport" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="Сотрудники с оружием" name="one">Сотрудники с оружием</el-tab-pane>
      <el-tab-pane label="Сотрудники без оружия" name="two">Сотрудники без оружия</el-tab-pane>
      <el-tab-pane label="Сотрудники - Кураторы" name="three">Сотрудники - Кураторы</el-tab-pane>
      <el-tab-pane label="Свободные преступники" name="forth">Свободные преступники</el-tab-pane>
      <el-tab-pane label="Задержанные преступники" name="five">Задержанные преступники</el-tab-pane>
      <el-tab-pane label="Оружие на складе" name="six">Оружие на складе</el-tab-pane>
    </el-tabs>

    <div v-if="activeReport == 'one'">
      <el-table :data="reportData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="180" />
        <el-table-column prop="lastname" label="Фамилия"/>
        <el-table-column prop="name" label="Имя"/>
        <el-table-column prop="sername" label="Отчество" />
        <el-table-column prop="job.name" label="Должность" />
        <el-table-column prop="birthday" label="Дата рождения" />
        <el-table-column prop="hire_date" label="Дата найма" />
        <el-table-column label="Действие">
          <template #default="{ row }">
            <el-button type="primary" @click="redirectToPoliceman(row)">Открыть</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div v-if="activeReport == 'two'">
      <el-table :data="reportData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="180" />
        <el-table-column prop="lastname" label="Фамилия"/>
        <el-table-column prop="name" label="Имя"/>
        <el-table-column prop="sername" label="Отчество" />
        <el-table-column prop="job.name" label="Должность" />
        <el-table-column prop="birthday" label="Дата рождения" />
        <el-table-column prop="hire_date" label="Дата найма" />
        <el-table-column label="Действие">
          <template #default="{ row }">
            <el-button type="primary" @click="redirectToPoliceman(row)">Открыть</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div v-if="activeReport == 'three'">
      <el-table :data="reportData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="180" />
        <el-table-column prop="lastname" label="Фамилия"/>
        <el-table-column prop="name" label="Имя"/>
        <el-table-column prop="sername" label="Отчество" />
        <el-table-column prop="job.name" label="Должность" />
        <el-table-column prop="birthday" label="Дата рождения" />
        <el-table-column prop="hire_date" label="Дата найма" />
        <el-table-column label="Действие">
          <template #default="{ row }">
            <el-button type="primary" @click="redirectToPoliceman(row)">Открыть</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div v-if="activeReport == 'forth'">
      <el-table :data="reportData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="lastname" label="Фамилия"/>
      <el-table-column prop="name" label="Имя"/>
      <el-table-column prop="sername" label="Отчество" />
      <el-table-column prop="birthday" label="Дата рождения" />
      <el-table-column prop="status.status" label="Статус" />
      <el-table-column label="Действие">
        <template #default="{ row }">
          <el-button type="primary" @click="redirectToCriminal(row)">View</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>

    <div v-if="activeReport == 'five'">
      <el-table :data="reportData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="lastname" label="Фамилия"/>
      <el-table-column prop="name" label="Имя"/>
      <el-table-column prop="sername" label="Отчество" />
      <el-table-column prop="birthday" label="Дата рождения" />
      <el-table-column prop="status.status" label="Статус" />
      <el-table-column label="Действие">
        <template #default="{ row }">
          <el-button type="primary" @click="redirectToCriminal(row)">View</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>

    <div v-if="activeReport == 'six'">
      <el-table :data="reportData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="weapon_type" label="Тип" />
      <el-table-column prop="code" label="Код" />
      <el-table-column prop="full_name" label="Полное название" />
      <el-table-column prop="status" label="Статус" />
      <el-table-column label="Действие">
        <template #default="{ row }">
          <el-button type="primary" @click="redirectToGun(row)">View</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
  </div>

  <div v-if="activeName == 'ten'">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="lastname" label="Фамилия"/>
      <el-table-column prop="name" label="Имя"/>
      <el-table-column prop="sername" label="Отчество" />
      <el-table-column prop="adress" label="Адресс" />
      <el-table-column prop="birthday" label="Дата рождения" />
      <el-table-column prop="date" label="Дата" />
      <el-table-column prop="report" label="Жалоба" />
      <el-table-column label="Действие">
        <template #default="{ row }">
          <el-button type="primary" @click="redirectToAppeal(row)">Открыть</el-button>
        </template>
      </el-table-column>
      <el-table-column label="Удалить">
        <template #default="{ row }">
          <el-button type="danger" @click="deleteAppeal(row)">Удалить</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="addAppeal()" class="add" size="large" type="primary">Добавить сотрудника</el-button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data() {
      return {
        activeName: "first",
        activeReport: "one",
        tableData: [],
        reportData: [],
      };
  },
  methods:{
    redirectToPoliceman(row) {
      // Перенаправление на другой путь с помощью Vue Router
      this.$router.push(`/policeman/${row.id}`);
    },
    addPoliceman(row) {
      // Перенаправление на другой путь с помощью Vue Router
      this.$router.push(`/add-policeman`);
    },
    deletePoliceman(row){
      axios.delete("http://localhost:3000/policeman/" + row.id)
      .then(response => {
        console.log(response.data)
        this.GetPoliceman()
      })
      .catch(error => {
        console.log(error)
      })
    },
    redirectToAuto(row){
      this.$router.push(`/car/${row.id}`);
    },
    addCar(){
      this.$router.push(`/add-car`);
    },
    deleteCar(row){
      axios.delete("http://localhost:3000/autopark/" + row.id)
      .then(response => {
        console.log(response.data)
        this.GetAutoPark()
      })
      .catch(error => {
        console.log(error)
      })
    },
    redirectToGun(row){
      this.$router.push(`/armory/` + row.id);
    },
    addGun(){
      this.$router.push(`/add-armory`);
    },
    deleteGun(row){
      axios.delete("http://localhost:3000/armory/" + row.id)
      .then(response => {
        console.log(response.data)
        this.GetArmory()
      })
      .catch(error => {
        console.log(error)
      })
    },
    redirectToTrainee(row){
      this.$router.push(`/trainee/${row.id}`);
    },
    addTrainee(){
      this.$router.push(`/add-trainee`)
    },
    deleteTrainee(row){
      axios.delete("http://localhost:3000/trainee/" + row.id)
      .then(response => {
        console.log(response.data)
        this.GetTrainee()
      })
      .catch(error => {
        console.log(error)
      })
    },
    redirectToDetention(row){
      this.$router.push(`/detention/${row.id}`);
    },
    addDetention(){
      this.$router.push(`/add-detention`)
    }, 
    deleteDetention(row){
      axios.delete("http://localhost:3000/detention/" + row.id)
      .then(response => {
        console.log(response.data)
        this.GetDetention()
      })
      .catch(error => {
        console.log(error)
      })
    },
    redirectToCriminal(row){
      this.$router.push(`/criminal/${row.id}`)
    },
    addCriminal(){
      this.$router.push(`add-criminal`)
    },
    deleteCriminal(row){
      axios.delete("http://localhost:3000/criminal/" + row.id)
      .then(response => {
        console.log(response.data)
        this.GetCriminal()
      })
      .catch(error => {
        console.log(error)
      })
    },
    GetPoliceman(){
      axios.get("http://localhost:3000/policeman")
      .then(response => {
        this.tableData = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    GetAutoPark(){
      axios.get("http://localhost:3000/autopark")
      .then(response => {
        this.tableData = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    GetArmory(){
      axios.get("http://localhost:3000/armory")
      .then(response => {
        this.tableData = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    GetArmoryReport(){
      axios.get("http://localhost:3000/policeman/gun")
      .then(response => {
        this.reportData = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    GetArmoryReportNot(){
      axios.get("http://localhost:3000/policeman/gun/not")
      .then(response => {
        this.reportData = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    GetTrainee(){
      axios.get("http://localhost:3000/trainee")
      .then(response => {
        this.tableData = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    GetTraineePoliceman(){
      axios.get("http://localhost:3000/policeman/trainee")
      .then(response => {
        this.reportData = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    GetDetention(){
      axios.get("http://localhost:3000/detention")
      .then(response => {
        this.tableData = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    GetCriminal(){
      axios.get("http://localhost:3000/criminal")
      .then(response => {
        this.tableData = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    GetFreeCriminal(){
      axios.get("http://localhost:3000/criminal/free")
      .then(response => {
        this.reportData = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    GetNotFreeCriminal(){
      axios.get("http://localhost:3000/criminal/free/not")
      .then(response => {
        this.reportData = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    GetJob(){
      axios.get("http://localhost:3000/job")
      .then(response => {
        this.tableData = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    addJob(){
      this.$router.push(`/add-job`)
    },
    deleteJob(row){
      axios.delete("http://localhost:3000/job/" + row.id)
      .then(response => {
        this.GetJob()
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    GetStatus(){
      axios.get("http://localhost:3000/status")
      .then(response => {
        this.tableData = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    addStatus(){
      this.$router.push(`/add-status`)
    },
    deleteStatus(row){
      axios.delete("http://localhost:3000/status/" + row.id)
      .then(response => {
        this.GetStatus()
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    GetAppeal(){
      axios.get("http://localhost:3000/appeal")
      .then(response => {
        this.tableData = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    redirectToAppeal(row){
      this.$router.push(`/appeal/${row.id}`);
    },
    addAppeal(){
      this.$router.push(`/add-appeal`)
    },
    deleteAppeal(row){
      axios.delete("http://localhost:3000/appeal/" + row.id)
      .then(response => {
        this.GetAppeal()
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    GetFreeArmory(){
      axios.get("http://localhost:3000/armory/not")
      .then(response => {
        this.reportData = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    }

  },
  created() {
    this.GetPoliceman()
    this.GetArmoryReport()
  },
  watch:{
    activeName: function(){
      if (this.activeName == "first"){
        this.GetPoliceman()
      }
      else if(this.activeName == "second"){
        this.GetAutoPark()
      }
      else if(this.activeName == "third"){
        this.GetArmory()
      }
      else if(this.activeName == "fourth"){
        this.GetTrainee()
      }
      else if(this.activeName == "five"){
        this.GetDetention()
      }
      else if(this.activeName == "six"){
        this.GetCriminal()
      }
      else if(this.activeName == "seven"){
        this.GetJob()
      }
      else if(this.activeName == "eight"){
        this.GetStatus()
      }
      else if(this.activeName == "ten"){
        this.GetAppeal()
      }
    },
    activeReport: function(){
      if (this.activeReport == "one"){
        this.GetArmoryReport()
      }
      else if (this.activeReport == "two"){
        this.GetArmoryReportNot()
      }
      else if (this.activeReport == "three"){
        this.GetTraineePoliceman()
      }
      else if (this.activeReport == "forth"){
        this.GetFreeCriminal()
      }
      else if (this.activeReport == "five"){
        this.GetNotFreeCriminal()
      }
      else if (this.activeReport == "six"){
        this.GetFreeArmory()
      }
    }
  }
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