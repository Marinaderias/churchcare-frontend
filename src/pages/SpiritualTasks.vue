<template>

  <div class="todo-container">

    <div class="hero-card">

      <h1>✨ Spiritual Journey</h1>

      <p>
        June 2026 - Week 1
      </p>

      <div class="progress-number">

        {{ progress }}%

      </div>

      <div class="progress-bar">

        <div
          class="progress-fill"
          :style="{ width: progress + '%' }"
        ></div>

      </div>

    </div>

    <div
      class="task-card"
      v-for="task in tasks"
      :key="task.id"
    >

      <label>

        <input
          type="checkbox"
          v-model="task.completed"
        />

        <span>

          {{ task.title }}

        </span>

      </label>

    </div>

    <div class="motivation">

      🏆 Keep Going!

    </div>

  </div>

</template>

<script setup>

import { ref, computed } from 'vue'

const tasks = ref([

  {
    id:1,
    title:'Daily Prayer',
    completed:true
  },

  {
    id:2,
    title:'Bible Reading',
    completed:true
  },

  {
    id:3,
    title:'Attend Liturgy',
    completed:false
  },

  {
    id:4,
    title:'Visit Member',
    completed:true
  }

])

const progress = computed(() => {

  const done =
    tasks.value.filter(
      task => task.completed
    ).length

  return Math.round(
    (done / tasks.value.length) * 100
  )

})

</script>

<style scoped>

.todo-container{

  max-width:700px;

  margin:auto;

  padding:20px;
}

.hero-card{

  background:black;

  color:white;

  padding:25px;

  border-radius:25px;

  margin-bottom:20px;
}

.hero-card h1{

  margin:0;
}

.progress-number{

  font-size:42px;

  font-weight:bold;

  margin-top:15px;
}

.progress-bar{

  height:10px;

  background:#444;

  border-radius:20px;

  margin-top:15px;

  overflow:hidden;
}

.progress-fill{

  height:100%;

  background:white;

  transition:.3s;
}

.task-card{

  background:white;

  padding:18px;

  border-radius:18px;

  margin-bottom:12px;

  box-shadow:
    0 4px 12px rgba(0,0,0,.08);
}

.task-card label{

  display:flex;

  align-items:center;

  gap:15px;

  cursor:pointer;
}

.task-card input{

  width:22px;

  height:22px;
}

.motivation{

  text-align:center;

  margin-top:25px;

  font-weight:bold;

  font-size:18px;
}

</style>

