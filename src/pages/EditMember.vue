<template>
  <div class="edit-container">

    <h1>Edit Member</h1>

    <form @submit.prevent="updateMember">

      <input
        v-model="member.name"
        type="text"
        placeholder="Name"
      />

      <input
        v-model="member.phone"
        type="text"
        placeholder="Phone"
      />

      <input
        v-model="member.address"
        type="text"
        placeholder="Address"
      />

      <input
        v-model="member.school"
        type="text"
        placeholder="School"
      />

      <input
        v-model="member.stage"
        type="text"
        placeholder="Stage"
      />

      <input
        v-model="member.confession_father"
        type="text"
        placeholder="Confession Father"
      />

      <textarea
        v-model="member.notes"
        placeholder="Notes"
      ></textarea>

      <button type="submit">
        Save Changes
      </button>

    </form>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '../services/api'

const route = useRoute()
const router = useRouter()

const member = ref({})

onMounted(async () => {

  const response = await api.get(
    `/members/${route.params.id}`
  )

  member.value = response.data

})

async function updateMember() {

  try {

    const response = await api.put(
      `/members/${route.params.id}`,
      member.value
    )

    console.log(response.data)

    alert('Member Updated Successfully')

    router.push(
      `/member/${route.params.id}`
    )

  } catch(error) {

    console.error(error)

    alert('Failed To Update Member')

  }

}
</script>

<style scoped>

.edit-container{
  max-width:700px;
  margin:auto;
  padding:20px;
}

form{
  display:flex;
  flex-direction:column;
  gap:15px;
}

input,
textarea{
  padding:15px;
  border:1px solid #ddd;
  border-radius:12px;
  outline:none;
}

textarea{
  min-height:120px;
}

button{
  background:black;
  color:white;
  border:none;
  padding:15px;
  border-radius:12px;
  cursor:pointer;
}

</style>