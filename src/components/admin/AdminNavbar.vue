<template>

<header class="navbar">

    <button
        class="menu-btn"
        @click="$emit('toggle-sidebar')"
    >
        <i class="fas fa-bars"></i>
    </button>

    <div class="title">

        <h2>Dashboard</h2>

        <span>Welcome Back, Admin 👋</span>

    </div>

    <div class="right">

        <button class="icon">

            <i class="fas fa-bell"></i>

        </button>

       <div class="avatar">

    <i class="fas fa-user"></i>

</div>

    </div>

</header>

</template>

<script setup>

defineEmits([
    'toggle-sidebar'
])

</script>

<style scoped>

.navbar{

    height:75px;

    background:white;

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:0 25px;

    border-radius:20px;

    box-shadow:0 5px 18px rgba(0,0,0,.08);

    margin-bottom:25px;

}

.title h2{

    margin:0;

}

.title span{

    color:#777;

    font-size:14px;

}

.right{

    display:flex;

    align-items:center;

    gap:15px;

}

.icon{

    width:42px;

    height:42px;

    border:none;

    border-radius:50%;

    background:#f3f3f3;

    cursor:pointer;

}

.avatar{

    width:45px;

    height:45px;

    border-radius:50%;

    background:#eee;

    display:flex;

    justify-content:center;

    align-items:center;

    font-size:22px;

}

.menu-btn{

    display:none;

    border:none;

    background:none;

    font-size:24px;

    cursor:pointer;

}

@media(max-width:768px){

.menu-btn{

    display:block;

}

.title span{

    display:none;

}

.navbar{

    padding:0 15px;

}

}

</style>