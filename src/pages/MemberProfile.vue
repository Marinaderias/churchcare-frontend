<template>
  <div class="profile-container">

    <!-- Header -->
    <div class="header">

      <img
        :src="member.image || '/default-user.png'"
         class="avatar"
       />

         <h2>{{ member.name }}</h2>

      <p>
        {{ member.stage || 'Church Member' }}
      </p>

     <div class="member-code">
       {{ member.member_code }}
     </div>


     <div
         v-if="member.member_code"
       class="qr-container"
>
    <QrcodeVue
       :value="member.member_code"
       :size="180"
       />
     </div> 
    </div>

   <!-- score-card -->

   <p class="month-title">

  {{ currentMonthName }}

</p>
    <div class="score-card">

      
  <h3>⭐ Member Score</h3>

  <h1>{{ memberScore }}</h1>

  <span>/100</span>

</div>

    <!-- Info -->

    <div class="card">
      <h3>Personal Information</h3>

     <p class="info-item">
       <i class="fas fa-phone"></i>
       {{ member.phone }}
     </p>


     <p class="info-item">
       <i class="fas fa-calendar"></i>
       {{ member.birth_date }}
     </p>

      <p class="info-item">
        <i class="fas fa-church"></i>
        {{ member.confession_father || 'No confession father' }}
      </p>
    </div>

     <div class="card">
     <h3>Address</h3>

     <p class="info-item">
      <i class="fas fa-location-dot"></i>
      {{ member.address }}
     </p>
</div>

<div class="card">
  <h3>School</h3>

  <p class="info-item">
     <i class="fas fa-school"></i>
     {{ member.school || 'No school added' }}
  </p>
</div>

<div class="card">
  <h3>Stage</h3>

   <p class="info-item">
     <i class="fas fa-graduation-cap"></i>
     {{ member.stage || 'No stage added' }}
   </p>
</div>

<div class="card">

  <h3>
    <i class="fas fa-users"></i>
    Family Information
  </h3>

  <p class="info-item">
    <i class="fas fa-user"></i>
    Father:
    {{ member.father_name || 'Not added' }}
  </p>

  <p class="info-item">
    <i class="fas fa-user"></i>
    Mother:
    {{ member.mother_name || 'Not added' }}
  </p>

</div>

    <!-- Attendance -->
<div class="card">

  <h3>Attendance</h3>

  <div class="attendance-actions">

    <button
      class="present-btn"
      @click="markAttendance('present')"
    >
      Present
    </button>

    <button
      class="late-btn"
      @click="markAttendance('late')"
    >
      Late
    </button>

    <button
      class="absent-btn"
      @click="markAttendance('absent')"
    >
      Absent
    </button>

  </div>

  <div class="attendance-rate">

    <h2>
      {{ attendanceStats.rate }}%
    </h2>

    <div class="progress-bar">

      <div
        class="progress-fill"
        :style="{
          width:
          attendanceStats.rate + '%'
        }"
      ></div>

    </div>

  </div>

  <div class="attendance-summary">

    <p>
      🟢 Present:
      {{ attendanceStats.present }}
    </p>

    <p>
      🟡 Late:
      {{ attendanceStats.late }}
    </p>

    <p>
      🔴 Absent:
      {{ attendanceStats.absent }}
    </p>

  </div>

</div>

    <!-- Visit -->

   <<div class="card">

  <h3>Visits</h3>

 <button
  class="visit-btn"
  @click="showVisitForm = !showVisitForm"
>
  ➕ Add Visit
</button>

<div
  v-if="showVisitForm"
  class="visit-form"
>

  <input
    type="date"
    v-model="visitForm.visit_date"
  />

  <textarea
    v-model="visitForm.notes"
    placeholder="Visit notes..."
  ></textarea>

  <button
    class="save-btn"
    @click="saveVisit"
  >
    Save Visit
  </button>

</div>
  <div
    v-if="member.visits?.length"
  >

    <div
      v-for="visit in member.visits"
      :key="visit.id"
      class="visit-item"
    >

      <p>
        🗓 {{ visit.visit_date }}
      </p>

      <p>
        {{ visit.notes }}
      </p>

    </div>

  </div>

  <div v-else>

    <p>No visits yet</p>

  </div>

</div>

    <!-- Notes -->

 <div class="card">

  <h3>
    <i class="fas fa-note-sticky"></i>
    Servant Notes
  </h3>

  <p>
    {{ member.notes || 'No notes yet' }}
  </p>

</div>

<!--edit button-->

<button
  class="edit-btn"
  @click="router.push(`/member/${member.id}/edit`)"
>
  <i class="fas fa-pen"></i>
  Edit Profile
</button>

<!--delete button-->
<button
  class="delete-btn"
  @click="deleteMember"
>
  Delete Member
</button>

  </div>
</template>

  <script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import api from '../services/api'
import QrcodeVue from 'qrcode.vue'
import { useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const showVisitForm = ref(false)

const visitForm = ref({
  visit_date: '',
  notes: ''
})
const member = ref({})


const attendanceStats = computed(() => {

  const attendances = member.value.attendances || []

  const present =
    attendances.filter(
      a => a.status === 'present'
    ).length

  const late =
    attendances.filter(
      a => a.status === 'late'
    ).length

  const absent =
    attendances.filter(
      a => a.status === 'absent'
    ).length

  const total =
    present + late + absent

  const rate =
    total > 0
      ? Math.round(((present + late) / total) * 100)
      : 0

  return {
    present,
    late,
    absent,
    rate
  }

})

const currentMonthName = computed(() => {

  return new Date().toLocaleString(
    'en-US',
    { month: 'long', year: 'numeric' }
  )

})

const memberScore = computed(() => {

  const attendances =
    member.value.attendances || []

  const currentMonth =
    new Date().getMonth()

  const currentYear =
    new Date().getFullYear()

  const monthlyAttendances =
    attendances.filter(att => {

      const date =
        new Date(att.date)

      return (
        date.getMonth() === currentMonth &&
        date.getFullYear() === currentYear
      )

    })

  const presentCount =
    monthlyAttendances.filter(
      att => att.status === 'present'
    ).length

  return Math.round(
    (presentCount / 4) * 100
  )

})

async function markAttendance(status) {

  try {

    await api.post('/attendances', {

      member_id: member.value.id,

      date: new Date()
        .toISOString()
        .split('T')[0],

      status

    })

    await loadMember()

    alert('Attendance saved')

  } catch(error) {

    console.error(error)

  }

}

async function saveVisit() {

  try {

    await api.post('/visits', {

      member_id: member.value.id,

      user_id: 1,

      visit_date: visitForm.value.visit_date,

      notes: visitForm.value.notes

    })

    await loadMember()

    visitForm.value = {
      visit_date: '',
      notes: ''
    }

    showVisitForm.value = false

    alert('Visit Added')

  } catch(error) {

    console.error(error)

  }

}

onMounted(async () => {

  console.log('Route ID:', route.params.id)

  try {

    const response = await api.get(
      `/members/${route.params.id}`
    )

    console.log(response.data)

    member.value = response.data

  } catch(error) {

    console.error(error)

  }

})

async function deleteMember() {

  if (!confirm('Are you sure?')) return

  try {

    await api.delete(
      `/members/${route.params.id}`
    )

    alert('Member Deleted')

    router.push('/members')

  } catch(error) {

    console.error(error)

  }

}
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
  margin-bottom:20px;
}

.avatar{
  width:100px;
  height:100px;

  background:white;

  border-radius:50%;

  display:flex;
  justify-content:center;
  align-items:center;

  font-size:45px;

  margin:auto;

  box-shadow:0 4px 10px rgba(0,0,0,.1);
}

.card{
  background:white;

  padding:20px;

  margin-bottom:15px;

  border-radius:18px;

  box-shadow:0 4px 10px rgba(0,0,0,.08);
}

.card h3{
  margin-top:0;
}

textarea{
  width:100%;
  min-height:120px;

  padding:12px;

  border-radius:12px;

  border:1px solid #ddd;

  resize:none;

  box-sizing:border-box;
}

.member-code{
  display:inline-block;
  margin-top:10px;
  padding:8px 14px;
  background:#000;
  color:white;
  border-radius:10px;
  font-size:14px;
  font-weight:bold;
}

.qr-container{
  margin-top:20px;

  display:flex;
  justify-content:center;
}

.info-item{
  display:flex;
  align-items:center;
  gap:12px;
  margin:12px 0;
}

.info-item i{
  width:20px;
  text-align:center;
}

.edit-btn{
  margin-top:15px;
  border:none;
  background:black;
  color:white;
  padding:10px 18px;
  border-radius:12px;
  cursor:pointer;
}
.attendance-item{
  padding:10px 0;
  border-bottom:1px solid #eee;
}

.attendance-item:last-child{
  border-bottom:none;
}

.attendance-actions{

  display:flex;

  gap:10px;

  margin-bottom:15px;

  flex-wrap:wrap;
}

.present-btn,
.late-btn,
.absent-btn{

  border:none;

  padding:10px 15px;

  border-radius:10px;

  cursor:pointer;

  color:white;
}

.present-btn{
  background:#22c55e;
}

.late-btn{
  background:#f59e0b;
}

.absent-btn{
  background:#ef4444;
}

.attendance-rate{
  text-align:center;
  margin-top:15px;
}

.attendance-rate h2{
  margin-bottom:10px;
}

.progress-bar{

  width:100%;

  height:12px;

  background:#eee;

  border-radius:20px;

  overflow:hidden;
}

.progress-fill{

  height:100%;

  background:#22c55e;

  transition:.4s;
}

.attendance-summary{

  margin-top:20px;

  display:flex;

  justify-content:space-between;

  flex-wrap:wrap;
}

.attendance-summary p{

  margin:5px 0;

  font-weight:bold;
}

.visit-btn{

  border:none;

  background:black;

  color:white;

  padding:10px 15px;

  border-radius:10px;

  cursor:pointer;

  margin-bottom:15px;
}

.visit-item{

  padding:10px 0;

  border-bottom:1px solid #eee;
}

.visit-item:last-child{

  border-bottom:none;
}

.score-card{

  background:white;

  padding:20px;

  border-radius:20px;

  text-align:center;

  margin:20px 0;

  box-shadow:0 4px 12px rgba(0,0,0,.08);
}

.score-card h1{

  font-size:48px;

  margin:10px 0;
}

.month-title{

  text-align:center;

  font-weight:bold;

  margin-top:20px;

  color:#666;
}

</style>