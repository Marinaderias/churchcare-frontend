<template>

<div
    v-if="show"
    class="overlay"
    @click.self="$emit('close')"
>

    <div class="modal">

        <div class="modal-header">

            <h2>{{ title }}</h2>

            <button
                class="close-btn"
                @click="$emit('close')"
            >
                ✕
            </button>

        </div>

        <div class="modal-body">

            <slot />

        </div>

    </div>

</div>

</template>

<script setup>

defineProps({

    show:Boolean,

    title:String

})

defineEmits([

    'close'

])

</script>

<style scoped>

.overlay{

    position:fixed;

    inset:0;

    background:rgba(0,0,0,.45);

    display:flex;

    justify-content:center;

    align-items:center;

    z-index:999;

    padding:20px;

}

.modal{

    width:100%;

    max-width:550px;

    background:white;

    border-radius:20px;

    overflow:hidden;

    animation:popup .25s ease;

}

.modal-header{

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:20px;

    border-bottom:1px solid #eee;

}

.modal-body{

    padding:20px;

}

.close-btn{

    border:none;

    background:none;

    font-size:24px;

    cursor:pointer;

}

@keyframes popup{

from{

    opacity:0;

    transform:scale(.9);

}

to{

    opacity:1;

    transform:scale(1);

}

}

@media(max-width:768px){

.modal{

    max-width:100%;

    border-radius:18px;

}

}

</style>