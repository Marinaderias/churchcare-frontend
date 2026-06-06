<template>
  <div class="profile-container">

    <!-- Cover -->
    <div class="cover">
      <button class="edit-cover">
        Edit Cover
      </button>
    </div>

    <!-- Profile Header -->
    <div class="profile-header">

      <div class="avatar">
        👤
      </div>

      <h2>Marina Derias</h2>

      <span class="badge">
        Secondary Service
      </span>

      <button class="edit-profile">
        Edit Profile
      </button>

    </div>

    <!-- Statistics -->

    <div class="stats-section">

      <div class="stat-card">
        <h3>25</h3>
        <p>Members</p>
      </div>

      <div class="stat-card">
        <h3>18</h3>
        <p>Visits</p>
      </div>

      <div class="stat-card">
        <h3>82%</h3>
        <p>Attendance</p>
      </div>

    </div>

    <!-- Tabs -->

    <div class="tabs">

      <button class="tab active">
        Preparations
      </button>

      <button class="tab">
        Tasks
      </button>

      <button class="tab">
        Statistics
      </button>

    </div>

    <!-- Preparations -->

    <div class="post-card">

      <h3>📖 Sunday Lesson</h3>

      <p>
        Topic: Faith and Trust in God
      </p>

    </div>

    <div class="post-card">

      <h3>📖 Bible Study</h3>

      <p>
        Romans Chapter 8
      </p>

    </div>

    <!-- Tasks -->

    <div class="task-section">

      <h3>My Tasks</h3>

      <div class="task-card">
        ☐ Visit Mina
      </div>

      <div class="task-card">
        ☑ Prepare Lesson
      </div>

      <div class="task-card">
        ☐ Call Mary
      </div>

    </div>

  </div>
</template>

<style scoped>

.profile-container{
  min-height:100vh;
  background:#f5f5f5;
  padding-bottom:100px;
}

/* Cover */

.cover{
  height:220px;
  background:black;
  position:relative;
}

.edit-cover{
  position:absolute;
  right:15px;
  bottom:15px;
  border:none;
  background:white;
  padding:8px 15px;
  border-radius:10px;
  cursor:pointer;
}

/* Profile Header */

.profile-header{
  text-align:center;
  margin-top:-60px;
  padding:0 20px;
}

.avatar{
  width:120px;
  height:120px;
  background:white;
  border-radius:50%;
  margin:auto;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:50px;
  border:5px solid white;
  box-shadow:0 4px 12px rgba(0,0,0,.1);
}

.profile-header h2{
  margin-top:15px;
  margin-bottom:10px;
}

.badge{
  display:inline-block;
  background:black;
  color:white;
  padding:8px 15px;
  border-radius:20px;
  font-size:14px;
}

.edit-profile{
  display:block;
  margin:15px auto;
  border:none;
  background:white;
  padding:10px 20px;
  border-radius:10px;
  cursor:pointer;
  box-shadow:0 2px 8px rgba(0,0,0,.1);
}

/* Statistics */

.stats-section{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:12px;
  padding:20px;
}

.stat-card{
  background:white;
  padding:15px;
  text-align:center;
  border-radius:15px;
  box-shadow:0 4px 10px rgba(0,0,0,.08);
}

.stat-card h3{
  margin:0;
}

/* Tabs */

.tabs{
  display:flex;
  gap:10px;
  padding:0 20px;
}

.tab{
  flex:1;
  border:none;
  background:white;
  padding:12px;
  border-radius:12px;
  cursor:pointer;
}

.tab.active{
  background:black;
  color:white;
}

/* Posts */

.post-card{
  background:white;
  margin:20px;
  padding:20px;
  border-radius:15px;
  box-shadow:0 4px 10px rgba(0,0,0,.08);
}

/* Tasks */

.task-section{
  padding:0 20px;
}

.task-card{
  background:white;
  padding:15px;
  margin-top:10px;
  border-radius:15px;
  box-shadow:0 4px 10px rgba(0,0,0,.08);
}

</style>