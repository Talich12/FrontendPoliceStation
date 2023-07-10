<template>
    <h1>Должность</h1>
    <el-form :inline="true" size="large" label-width="120px" class="demo-form-inline">
        <el-form-item label="Название">
            <el-input v-model="name" />
        </el-form-item>
    </el-form>
    <el-button class="add" type="primary" @click="Confirm()">Добавить</el-button>
</template>

<script>
import dayjs from 'dayjs';
import axios from 'axios';
export default {
    name: 'Trainee',
    data() {
        return {
            name: ''
        };
    },
    methods:{
    Confirm(){
        axios.post("http://localhost:3000/job", {
        name: this.name,
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