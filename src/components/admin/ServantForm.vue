<template>

<form
    class="form"
    @submit.prevent="save"
>

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

            <option value="servant">Servant</option>

            <option value="admin">Admin</option>

        </select>

    </div>

    <button
        class="save-btn"
        type="submit"
    >
        Save
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

    role:'servant'

})

function save(){

    emit('save',{...form})

}

</script>

<style scoped>

.form{

    display:flex;

    flex-direction:column;

    gap:18px;

}

.form-group{

    display:flex;

    flex-direction:column;

}

label{

    margin-bottom:8px;

    font-weight:600;

}

input,
select{

    padding:14px;

    border-radius:12px;

    border:1px solid #ddd;

    font-size:15px;

    width:100%;

    box-sizing:border-box;

}

input:focus,
select:focus{

    outline:none;

    border-color:black;

}

.save-btn{

    background:black;

    color:white;

    border:none;

    padding:14px;

    border-radius:12px;

    cursor:pointer;

    font-size:16px;

}

.save-btn:hover{

    opacity:.9;

}

@media(max-width:768px){

.form{

    gap:15px;

}

}

</style>