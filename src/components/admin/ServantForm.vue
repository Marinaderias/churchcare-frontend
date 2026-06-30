<template>

<form
    class="form"
    @submit.prevent="save"
>

    <h3 class="section-title">
        Basic Information
    </h3>

    <div class="form-group">
        <label>Name</label>
        <input
            type="text"
            v-model="form.name"
            placeholder="Enter servant name"
        />
    </div>

    <div class="form-group">
        <label>Phone</label>
        <input
            type="text"
            v-model="form.phone"
            placeholder="Enter phone number"
        />
    </div>

    <div class="form-group">
        <label>Email</label>
        <input
            type="email"
            v-model="form.email"
            placeholder="Enter email"
        />
    </div>

    <div class="form-group">
        <label>Password</label>
        <input
            type="password"
            v-model="form.password"
            placeholder="Enter password"
        />
    </div>

    <div class="form-group">
        <label>Role</label>

        <select v-model="form.role">

            <option value="servant">
                Servant
            </option>

            <option value="admin">
                Admin
            </option>

            <option value="secretary">
                Secretary
            </option>

        </select>

    </div>

    <hr>

    <h3 class="section-title">
        Additional Information
    </h3>

<div class="form-group full">

    <label>Address</label>

    <input
        type="text"
        v-model="form.address"
        placeholder="Address"
    />

</div>

    <div class="form-group">
        <label>Birth Date</label>
        <input
            type="date"
            v-model="form.birth_date"
        />
    </div>

    <div class="form-group">
        <label>Job</label>
        <input
            type="text"
            v-model="form.job"
            placeholder="Job"
        />
    </div>

    <div class="form-group">
        <label>Confession Father</label>
        <input
            type="text"
            v-model="form.confession_father"
            placeholder="Father Name"
        />
    </div>

    <button
        class="save-btn"
        type="submit"
    >
        Save Servant
    </button>

</form>

</template>

<script setup>

import { reactive } from 'vue'

const emit = defineEmits(['save'])

const form = reactive({

    name:'',
    phone:'',
    email:'',
    password:'',
    role:'servant',

    address:'',

    birth_date:'',

    job:'',

    confession_father:'',

    image:''

})

function save(){

    emit('save',{...form})

}

</script>

<style scoped>

.form{

display:flex;

flex-direction:column;

gap:22px;

}

.grid{

display:grid;

grid-template-columns:repeat(2,1fr);

gap:20px;

}

.section-title{

grid-column:1/-1;

margin:0;

font-size:20px;

font-weight:700;

}

.form-group{

display:flex;

flex-direction:column;

}

.form-group.full{

grid-column:1/-1;

}

label{

margin-bottom:8px;

font-weight:600;

font-size:14px;

}

input,
select{

width:100%;

padding:14px;

border:1px solid #ddd;

border-radius:12px;

font-size:15px;

box-sizing:border-box;

transition:.25s;

}

input:focus,
select:focus{

outline:none;

border-color:black;

box-shadow:0 0 0 3px rgba(0,0,0,.08);

}

.save-btn{

width:100%;

padding:16px;

border:none;

border-radius:14px;

background:black;

color:white;

font-size:16px;

font-weight:600;

cursor:pointer;

}

.save-btn:hover{

opacity:.9;

}

@media(max-width:768px){

.grid{

grid-template-columns:1fr;

}

.form-group.full{

grid-column:auto;

}

}

</style>