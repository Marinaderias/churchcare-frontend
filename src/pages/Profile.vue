<template>

  <div class="profile-container">

    <div class="header">

      <div class="avatar">
        👤
      </div>

      <div v-if="!isEditing">
     <h2>{{ servant.name }}</h2>
    </div>

     <div v-else>
  <input
    v-model="servant.name"
    class="edit-input"
  />
</div>

      <p>Servant</p>

    </div>

    <div class="motivation-card">

  <h3>🏆 Great Progress</h3>

  <p>
    Keep Going 🔥
  </p>

</div>

<div class="stats">

  <div class="stat-card">
    <h3>👥</h3>
    <p>{{ servant.members?.length || 0 }}</p>
    <span>Members</span>
  </div>

  <div class="stat-card">
    <h3>📅</h3>
    <p>{{ servant.visits?.length || 0 }}</p>
    <span>Visits</span>
  </div>

  <div class="stat-card">
    <h3>📚</h3>
    <p>
  {{ servant.preparations?.length || 0 }}</p>
    <span>Preparations</span>
  </div>

  <div class="stat-card">
    <h3>✨</h3>
    <h3 v-if="progress >= 100">
  🌟 Excellent Servant
</h3>

<h3 v-else-if="progress >= 75">
  🏆 Great Progress
</h3>

<h3 v-else-if="progress >= 50">
  💪 Keep Going
</h3>

<h3 v-else>
  🙏 Start Today
</h3>
    <span>Progress</span>
  </div>

</div>


    <div class="card">

      <h3>Personal Information</h3>

     <div v-if="!isEditing">

  <p>
    <strong>Phone:</strong>
    {{ servant.phone }}
  </p>

</div>

<div v-else>

  <input
    v-model="servant.phone"
    class="edit-input"
  />

</div>
     <div v-if="!isEditing">

  <p>
    <strong>Email:</strong>
    {{ servant.email }}
  </p>

</div>

<div v-else>

  <label>Email</label>

  <input
    type="email"
    v-model="servant.email"
    class="edit-input"
  />

</div>

<div v-if="!isEditing">

  <p>
    <strong>Address:</strong>
    {{ servant.address }}
  </p>

</div>

<div v-else>

  <label>Address</label>

  <input
    v-model="servant.address"
    class="edit-input"
  />

</div>

<div v-if="!isEditing">

  <p>
    <strong>Job:</strong>
    {{ servant.job }}
  </p>

</div>

<div v-else>

  <label>Job</label>

  <input
    v-model="servant.job"
    class="edit-input"
  />

</div>

<div v-if="!isEditing">

  <p>
    <strong>Confession Father:</strong>
    {{ servant.confession_father }}
  </p>

</div>

<div v-else>

  <label>Confession Father</label>

  <input
    v-model="servant.confession_father"
    class="edit-input"
  />

</div>

<div v-if="!isEditing">

  <p>
    <strong>Birth Date:</strong>
    {{ servant.birth_date }}
  </p>

</div>

<div v-else>

  <label>Birth Date</label>

  <input
    type="date"
    v-model="servant.birth_date"
    class="edit-input"
  />

</div>
    
    </div>

<div class="journey-card">

  <h3>✨ Spiritual Journey</h3>

  <div class="progress-bar">

    <div
      class="progress-fill"
      :style="{
        width: progress + '%'
      }"
    ></div>

  </div>

  <p>
    {{ progress }}%
  </p>

</div>

<div class="tasks-card">

  <h3>🙏 Spiritual Tasks</h3>

  <div
    class="task-item"
    v-for="task in tasks"
    :key="task.id"
  >

    <input
      type="checkbox"
      v-model="task.completed"
    />

    <span>
      {{ task.title }}
    </span>

  </div>

</div>

<div class="badge-card">

  <h3>🏆 Achievement</h3>

  <h2 v-if="progress >= 100">
    🌟 Excellent Servant
  </h2>

  <h2 v-else-if="progress >= 75">
    🏆 Great Progress
  </h2>

  <h2 v-else-if="progress >= 50">
    💪 Keep Going
  </h2>

  <h2 v-else>
    🙏 Start Today
  </h2>

</div>

<div class="recent-card">

  <h3>📚 Latest Preparations</h3>

  <div
    v-for="prep in recentPreparations"
    :key="prep.id"
    class="recent-item"
  >

    {{ prep.title }}

  </div>

</div>

   <button
  class="edit-btn"
  @click="isEditing = !isEditing"
>

  {{ isEditing ? 'Cancel' : 'Edit Profile' }}

</button>

  </div>


</template>
  <script setup>

import { ref, onMounted, computed } from 'vue'
import api from '../services/api'

const servant = ref({})

onMounted(async () => {

  try {

    const response =
      await api.get('/users/1')

    servant.value =
      response.data

  } catch(error) {

    console.error(error)

  }

})

const progress = computed(() => {

  const visits =
    servant.value.visits?.length || 0

  const members =
    servant.value.members?.length || 0

  return (visits * 10) + (members * 2)

})

const tasks = ref([

  {
    id:1,
    title:'Daily Prayer',
    completed:true
  },

  {
    id:2,
    title:'Read Bible',
    completed:false
  },

  {
    id:3,
    title:'Attend Liturgy',
    completed:true
  },

  {
    id:4,
    title:'Quiet Time',
    completed:false
  }

])

const recentPreparations = computed(() => {

  return servant.value.preparations
    ?.slice(0,3) || []

})

async function updateProfile() {

  try {

    await api.put(

      `/users/${servant.value.id}`,

      {

        name: servant.value.name,

        phone: servant.value.phone,
        
        email: servant.value.email,
        
        address: servant.value.address,

        job: servant.value.job,

        confession_father:
          servant.value.confession_father

      }

    )

    isEditing.value = false

    alert('Profile Updated')

  }

  catch(error){

    console.error(error)

  }

}

const isEditing = ref(false)

</script>

<style scoped>

.profile-container{

  min-height:100vh;

  background:#f5f5f5;

  padding:20px;

  padding-bottom:100px;
}

.header{
  text-align:center;
  margin-bottom:25px;
}

.avatar{
  width:100px;
  height:100px;
  border-radius:50%;
  background:black;
  color:white;

  display:flex;
  justify-content:center;
  align-items:center;

  margin:auto;

  font-size:40px;
}

.stats{

  display:grid;

  grid-template-columns:repeat(2,1fr);

  gap:15px;

  margin-bottom:25px;

  margin-top:10px;
}

.stat-card{
  background:white;
  padding:15px;
  border-radius:15px;
  text-align:center;
}

.card{
  background:white;
  padding:20px;
  border-radius:15px;
  margin-bottom:20px;
}

.edit-btn{
  width:100%;
  padding:15px;
  border:none;
  border-radius:15px;
  background:black;
  color:white;
  cursor:pointer;
}

.motivation-card{

  background:black;

  color:white;

  border-radius:20px;

  padding:20px;

  text-align:center;

  margin-bottom:25px;
}

.journey-card{

  background:white;

  padding:20px;

  border-radius:20px;

  margin-bottom:20px;

  text-align:center;
}

.progress-bar{

  width:100%;

  height:15px;

  background:#eee;

  border-radius:50px;

  overflow:hidden;

  margin-top:15px;
}

.progress-fill{

  height:100%;

  background:black;

  transition:.5s;
}

.tasks-card{

  background:white;

  padding:20px;

  border-radius:20px;

  margin-bottom:20px;

  box-shadow:0 4px 12px rgba(0,0,0,.08);
}

.task-item{

  display:flex;

  align-items:center;

  gap:12px;

  margin-top:15px;

  padding:10px;

  border-radius:12px;

  background:#f7f7f7;
}

.task-item input{

  width:18px;

  height:18px;
}

.badge-card{

  background:black;

  color:white;

  padding:25px;

  border-radius:20px;

  text-align:center;

  margin-bottom:20px;

  box-shadow:0 8px 20px rgba(0,0,0,.15);
}

.recent-card{

  background:white;

  padding:20px;

  border-radius:20px;

  margin-bottom:20px;
}

.recent-item{

  padding:12px;

  margin-top:10px;

  background:#f7f7f7;

  border-radius:12px;
}

.edit-input{

  width:100%;

  padding:12px;

  border:1px solid #ddd;

  border-radius:12px;

  margin-top:8px;

  margin-bottom:12px;
}

.save-btn{

  width:100%;

  padding:15px;

  border:none;

  border-radius:15px;

  background:green;

  color:white;

  cursor:pointer;

  margin-bottom:15px;
}

</style>