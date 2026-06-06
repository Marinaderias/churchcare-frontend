<template>
  <nav class="bottom-nav">

    <router-link to="/home" class="nav-item">
      <span>🏠</span>
      <small>Home</small>
    </router-link>

    <router-link to="/members" class="nav-item">
      <span>👥</span>
      <small>Members</small>
    </router-link>

    <router-link to="/notifications" class="nav-item">
      <span>🔔</span>
      <small>Alerts</small>
    </router-link>

    <router-link to="/profile" class="nav-item">
      <span>👤</span>
      <small>Profile</small>
    </router-link>

  </nav>
</template>

<style scoped>

.bottom-nav{
  position:fixed;
  bottom:0;
  left:0;
  width:100%;
  background:white;
  display:flex;
  justify-content:space-around;
  align-items:center;
  padding:12px 0;
  box-shadow:0 -2px 15px rgba(0,0,0,.1);
}

.nav-item{
  text-decoration:none;
  color:#777;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:3px;
}

.nav-item span{
  font-size:22px;
}

.router-link-active{
  color:black;
  font-weight:bold;
}

</style>