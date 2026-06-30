<template>

<div class="page">

    <div class="page-header">

        <div>

            <h1>Servants</h1>

            <p>Manage Church Servants</p>

        </div>

       <button
    class="add-btn"
    @click="showModal=true"
>
            + Add Servant
        </button>

    </div>

    <DataTable

        :columns="columns"

        :rows="servants"

        @edit="editServant"

        @delete="deleteServant"

    />

</div>

<BaseModal

    :show="showModal"

    title="Add Servant"

    @close="showModal=false"

>

   <ServantForm
    @save="saveServant"
/>

</BaseModal>

<Toast

    :show="toast"

    :message="toastMessage"

/>


</template>

<script setup>

import { ref } from 'vue'

import DataTable from '../../components/admin/DataTable.vue'
import BaseModal from '../../components/admin/BaseModal.vue'
import ServantForm from '../../components/admin/ServantForm.vue'
import Toast from '../../components/common/Toast.vue'
import { onMounted } from 'vue'
import api from '../../services/api'

const showModal = ref(false)

const columns = [

    {
        label: 'Name',
        key: 'name'
    },

    {
        label: 'Phone',
        key: 'phone'
    },

    {
        label: 'Email',
        key: 'email'
    },

    {
        label: 'Role',
        key: 'role'
    }

]

const servants = ref([])

function editServant(servant){

    console.log(servant)

}

function deleteServant(servant){

    console.log(servant)

}

async function loadServants(){

    try{

        const response = await api.get('/users')

        servants.value = response.data

    }

    catch(error){

        console.error(error)

    }

}

onMounted(()=>{

    loadServants()

})

async function saveServant(data){

    try{

        await api.post('/users',data)

        showModal.value=false

        toastMessage.value='Servant Added Successfully 🎉'

        toast.value=true

        setTimeout(()=>{

            toast.value=false

        },2500)

        await loadServants()

    }

    catch(error){

        console.error(error)

    }

}

</script>

<style scoped>

.page{

    width:100%;

}

.page-header{

    display:flex;

    justify-content:space-between;

    align-items:center;

    margin-bottom:25px;

    gap:20px;

    flex-wrap:wrap;

}

.page-header h1{

    margin:0;

    font-size:30px;

}

.page-header p{

    color:#777;

    margin-top:8px;

}

.add-btn{

    background:black;

    color:white;

    border:none;

    padding:12px 20px;

    border-radius:12px;

    cursor:pointer;

    font-size:15px;

    transition:.3s;

}

.add-btn:hover{

    opacity:.9;

}

@media(max-width:768px){

.page-header{

    flex-direction:column;

    align-items:flex-start;

}

.add-btn{

    width:100%;

}

}

</style>