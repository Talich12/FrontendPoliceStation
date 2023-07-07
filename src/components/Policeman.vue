<template>
  <el-form :model="policeman" label-width="120px">
    <el-form-item label="Activity name">
      <el-input v-model="policeman.name" />
    </el-form-item>
  </el-form>
</template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'Policeman',
    data() {
        return {
          policeman: []
        };
    },
    methods:{
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