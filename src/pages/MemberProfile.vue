<template>
  <div class="profile-container">

    <!-- Header -->
    <div class="header">

      <div class="avatar">
        👤
      </div>

      <h2>Mina Adel</h2>

      <p>Secondary Service</p>

    </div>

    <!-- Info -->

    <div class="card">
      <h3>Personal Information</h3>

      <p><strong>Phone:</strong> 01012345678</p>

      <p><strong>Birth Date:</strong> 2005-06-10</p>

      <p><strong>Confession Father:</strong> Fr. Bishoy</p>
    </div>

    <!-- Attendance -->

    <div class="card">
      <h3>Attendance</h3>

      <p>Attendance Rate: 85%</p>

      <p>Last Attendance: 2026-05-30</p>
    </div>

    <!-- Visit -->

    <div class="card">
      <h3>Last Visit</h3>

      <p>2026-05-25</p>

      <p>Everything is going well.</p>
    </div>

    <!-- Notes -->

    <div class="card">
      <h3>Servant Notes</h3>

      <textarea
        placeholder="Write notes..."
      ></textarea>
    </div>

  </div>
</template>

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

</style>