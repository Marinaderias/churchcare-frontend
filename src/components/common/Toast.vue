<template>

<transition name="toast">

<div
    v-if="show"
    class="toast"
>

    {{ message }}

</div>

</transition>

</template>

<script setup>

defineProps({

    show:Boolean,

    message:String

})

</script>

<style scoped>

.toast{

position:fixed;

top:25px;

right:25px;

background:#16a34a;

color:white;

padding:15px 22px;

border-radius:12px;

font-weight:600;

box-shadow:0 10px 25px rgba(0,0,0,.2);

z-index:99999;

}

.toast-enter-active,
.toast-leave-active{

transition:.3s;

}

.toast-enter-from,
.toast-leave-to{

opacity:0;

transform:translateY(-20px);

}

@media(max-width:768px){

.toast{

left:15px;

right:15px;

top:20px;

text-align:center;

}

}

</style>