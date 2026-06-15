<template>
  <div class="members-container">

```
<h1>My Members 👥</h1>

<div class="search-box">
  <input
    v-model="search"
    type="text"
    placeholder="Search member..."
  />
</div>

<div
  v-if="filteredMembers.length === 0"
  class="empty-state"
>
  No members found
</div>

<div
  class="member-card"
  v-for="member in filteredMembers"
  :key="member.id"
  @click="openMember(member.id)"
>

  <div class="avatar">
    {{ member.name ? member.name.charAt(0).toUpperCase() : 'M' }}
  </div>

  <div class="member-info">
    <h3>{{ member.name }}</h3>
    <p>📞 {{ member.phone }}</p>
  </div>

  <div class="card-actions">

    <button
      class="edit-btn"
      @click.stop="editMember(member.id)"
    >
      ✏️
    </button>

    <button
      class="delete-btn"
      @click.stop="deleteMember(member.id)"
    >
      🗑️
    </button>

  </div>

</div>
```

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'

const router = useRouter()

const search = ref('')
const members = ref([])

function openMember(id) {
  router.push(`/member/${id}`)
}

function editMember(id) {
  router.push(`/member/${id}/edit`)
}

async function deleteMember(id) {

  if (!confirm('Delete this member?'))
    return

  try {

    await api.delete(`/members/${id}`)

    members.value = members.value.filter(
      member => member.id !== id
    )

    alert('Member deleted successfully')

  } catch (error) {

    console.error(error)
    alert('Delete failed')

  }

}

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
  background:#f6f7fb;
  padding:20px;
  padding-bottom:100px;
}

.members-container h1{
  margin-bottom:20px;
}

.search-box{
  margin-bottom:20px;
}

.search-box input{
  width:100%;
  padding:15px;
  border:none;
  border-radius:15px;
  background:white;
  outline:none;
  box-sizing:border-box;
  box-shadow:0 4px 12px rgba(0,0,0,.08);
}

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
  background:black;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:24px;
  font-weight:bold;
}

.member-info{
  flex:1;
}

.member-info h3{
  margin:0;
}

.member-info p{
  margin-top:5px;
  color:#666;
}

.card-actions{
  display:flex;
  gap:10px;
}

.edit-btn,
.delete-btn{
  width:42px;
  height:42px;
  border:none;
  border-radius:12px;
  cursor:pointer;
  transition:.3s;
}

.edit-btn{
  background:#f0f0f0;
}

.edit-btn:hover{
  transform:scale(1.05);
}

.delete-btn{
  background:black;
  color:white;
}

.delete-btn:hover{
  transform:scale(1.05);
}

.empty-state{
  text-align:center;
  background:white;
  padding:30px;
  border-radius:15px;
  box-shadow:0 4px 12px rgba(0,0,0,.08);
}

@media(max-width:500px){

  .avatar{
    width:50px;
    height:50px;
    font-size:20px;
  }

  .member-card{
    padding:12px;
  }

}
</style>
