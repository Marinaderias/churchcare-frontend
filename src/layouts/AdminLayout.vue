<template>

<div class="layout">

    <AdminSidebar
        :class="{
            open:isSidebarOpen
        }"
    />

    <div class="main">

        <AdminNavbar
            @toggle-sidebar="toggleSidebar"
        />

        <div class="content">

            <router-view />

        </div>

    </div>

</div>

</template>

<script setup>

import { ref } from 'vue'

import AdminSidebar from '../components/admin/AdminSidebar.vue'
import AdminNavbar from '../components/admin/AdminNavbar.vue'

const isSidebarOpen = ref(false)

function toggleSidebar(){

    isSidebarOpen.value =
        !isSidebarOpen.value

}

</script>

<style scoped>

.layout{

    display:flex;

    min-height:100vh;

    background:#f6f7fb;

}

.main{

    flex:1;

    margin-left:270px;

    padding:20px;

    transition:.3s;

}

.content{

    margin-top:20px;

}

/* Tablet */

@media(max-width:992px){

.main{

    margin-left:90px;

}

}

/* Mobile */

@media(max-width:768px){

.main{

    margin-left:0;

    padding:15px;

}

}

</style>