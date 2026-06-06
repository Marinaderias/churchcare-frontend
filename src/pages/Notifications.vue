<template>
  <div class="notifications-container">

    <h1>Notifications 🔔</h1>

    <div class="notification-card unread">
      <h3>New Announcement</h3>
      <p>Friday Meeting at 7 PM</p>
      <span>2 min ago</span>
    </div>

    <div class="notification-card">
      <h3>Attendance Alert</h3>
      <p>Mina Adel missed the last meeting.</p>
      <span>1 hour ago</span>
    </div>

    <div class="notification-card">
      <h3>Upcoming Visit</h3>
      <p>You have a visit scheduled tomorrow.</p>
      <span>Yesterday</span>
    </div>

  </div>
</template>

<style scoped>

.notifications-container{
  min-height:100vh;
  background:#f5f5f5;
  padding:20px;
  padding-bottom:100px;
}

.notification-card{
  background:white;
  padding:18px;
  border-radius:18px;
  margin-bottom:15px;
  box-shadow:0 4px 10px rgba(0,0,0,.08);
}

.notification-card h3{
  margin:0 0 8px;
}

.notification-card p{
  margin:0;
  color:#555;
}

.notification-card span{
  display:block;
  margin-top:10px;
  font-size:12px;
  color:#999;
}

.unread{
  border-left:4px solid black;
}

</style>