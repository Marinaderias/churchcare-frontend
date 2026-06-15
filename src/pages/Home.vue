  <script setup>
import BottomNavbar from '../components/BottomNavbar.vue'
</script> 

<template>

  <div class="home-container">

    <!-- Welcome Card -->
    <div class="welcome-card">
      <h2>Good Evening, Marina 👋</h2>
      <p>Secondary Service</p>
    </div>

    <!-- Statistics -->
    <div class="stats-grid">

      <div class="stat-card">
        <div class="icon">👥</div>
        <h3>25</h3>
        <p>Members</p>
      </div>

      <div class="stat-card">
        <div class="icon">📍</div>
        <h3>18</h3>
        <p>Visited</p>
      </div>

      <div class="stat-card">
        <div class="icon">❌</div>
        <h3>7</h3>
        <p>Absent</p>
      </div>

      <div class="stat-card">
        <div class="icon">📊</div>
        <h3>82%</h3>
        <p>Attendance</p>
      </div>

    </div>

    <!-- Announcements -->
    <div class="section">

      <h2>📢 Announcements</h2>

      <div class="announcement-card">
        Friday Meeting at 7 PM
      </div>

      <div class="announcement-card">
        Monthly Service Conference
      </div>

      <div class="announcement-card">
        New Members Registration Open
      </div>

    </div>

  </div>
</template>

<style scoped>

.home-container{
  min-height:100vh;
  padding:20px;
  padding-bottom:100px;
  background:#f5f5f5;
}

/* Welcome */

.welcome-card{
  background:black;
  color:white;
  padding:22px;
  border-radius:20px;
  margin-bottom:20px;
}

.welcome-card h2{
  margin:0;
}

.welcome-card p{
  margin-top:8px;
  opacity:.8;
}

/* Statistics */

.stats-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:15px;
}

.stat-card{
  background:white;
  padding:20px;
  border-radius:18px;
  text-align:center;
  box-shadow:0 4px 12px rgba(0,0,0,.08);
}

.icon{
  font-size:28px;
  margin-bottom:10px;
}

.stat-card h3{
  margin:0;
  font-size:32px;
}

.stat-card p{
  margin-top:10px;
  color:#555;
}

/* Announcements */

.section{
  margin-top:30px;
}

.section h2{
  margin-bottom:15px;
}

.announcement-card{
  background:white;
  padding:16px;
  border-radius:15px;
  margin-bottom:12px;
  box-shadow:0 4px 12px rgba(0,0,0,.08);
}

/* Responsive */

@media (max-width: 500px){

  .stats-grid{
    grid-template-columns:1fr 1fr;
  }

  .welcome-card h2{
    font-size:22px;
  }

}

</style>