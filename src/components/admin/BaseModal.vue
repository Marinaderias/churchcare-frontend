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

defineEmits(['close'])

</script>

<style scoped>

.overlay{

    position:fixed;

    inset:0;

    background:rgba(0,0,0,.45);

    display:flex;

    justify-content:center;

    align-items:center;

    padding:20px;

    z-index:999;

}

.modal{

    width:min(900px,100%);

    max-height:90vh;

    background:white;

    border-radius:22px;

    display:flex;

    flex-direction:column;

    overflow:hidden;

    animation:popup .25s;

}

.modal-header{

    padding:22px 25px;

    border-bottom:1px solid #eee;

    display:flex;

    justify-content:space-between;

    align-items:center;

    flex-shrink:0;

}

.modal-header h2{

    margin:0;

    font-size:24px;

}

.close-btn{

    border:none;

    background:none;

    cursor:pointer;

    font-size:26px;

}

.modal-body{

    padding:25px;

    overflow-y:auto;

}

@keyframes popup{

from{

transform:scale(.9);

opacity:0;

}

to{

transform:scale(1);

opacity:1;

}

}

@media(max-width:768px){

.overlay{

align-items:flex-end;

padding:0;

}

.modal{

width:100%;

max-height:95vh;

border-radius:25px 25px 0 0;

}

.modal-header{

padding:18px;

}

.modal-body{

padding:18px;

}

}

</style>