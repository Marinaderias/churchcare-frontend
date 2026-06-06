<template>
  <div class="members-container">

    <h1>My Members 👥</h1>

    <!-- Search Bar -->
    <div class="search-box">
      <input
        v-model="search"
        type="text"
        placeholder="Search member..."
      />
    </div>

    <!-- Members List -->
    <div
       class="member-card"
       v-for="member in filteredMembers"
       :key="member.id"
       @click="openMember(member.id)"
    >
      <div class="avatar">
        👤
      </div>

      <div class="member-info">
        <h3>{{ member.name }}</h3>

        <p>{{ member.service }}</p>

        <span>
          Attendance: {{ member.attendance }}%
        </span>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'

const router = useRouter()

function openMember(id){
  router.push(`/member/${id}`)
}
const search = ref('')
const members = ref([])

const filteredMembers = computed(() => {
  return members.value.filter(member =>
    member.name
      .toLowerCase()
      .includes(search.value.toLowerCase())
  )
})

onMounted(async () => {
  try {

    const response = await api.get('/members')

    members.value = response.data

  } catch (error) {

    console.error(error)

  }
})

</script>

<style scoped>

.members-container{
  min-height:100vh;
  background:#f5f5f5;
  padding:20px;
  padding-bottom:100px;
}

.members-container h1{
  margin-bottom:20px;
}

/* Search */

.search-box{
  margin-bottom:20px;
}

.search-box input{
  width:100%;
  padding:15px;
  border:none;
  border-radius:15px;
  outline:none;
  background:white;
  box-sizing:border-box;

  box-shadow:0 4px 12px rgba(0,0,0,.08);
}

.search-box input:focus{
  border:1px solid black;
}

/* Cards */

.member-card{
  background:white;

  border-radius:18px;

  padding:15px;

  margin-bottom:15px;

  display:flex;
  align-items:center;
  gap:15px;

  box-shadow:0 4px 12px rgba(0,0,0,.08);

  cursor:pointer;

  transition:.3s;
}

.member-card:hover{
  transform:translateY(-2px);
}

.avatar{
  width:60px;
  height:60px;

  border-radius:50%;

  background:#eee;

  display:flex;
  justify-content:center;
  align-items:center;

  font-size:28px;
}

.member-info h3{
  margin:0;
}

.member-info p{
  margin:5px 0;
  color:#666;
}

.member-info span{
  font-size:14px;
  font-weight:bold;
}

/* Mobile */

@media(max-width:500px){

  .member-card{
    padding:12px;
  }

  .avatar{
    width:50px;
    height:50px;
    font-size:24px;
  }

}

</style>