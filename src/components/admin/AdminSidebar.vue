<template>

  <aside
    class="sidebar"
>

    <div class="logo">

      <h2>ChurchCare</h2>

      <span>Admin Panel</span>

    </div>

    <nav>

      <RouterLink to="/admin" class="item">
        <i class="fas fa-chart-line"></i>
        <span>Dashboard</span>
      </RouterLink>

      <RouterLink to="/admin/members" class="item">
        <i class="fas fa-users"></i>
        <span>Members</span>
      </RouterLink>

     <RouterLink
    to="/admin/servants"
    class="menu-item"
>

    <i class="fas fa-user"></i>

    <span>Servants</span>

</RouterLink>

      <RouterLink to="/admin/attendance" class="item">
        <i class="fas fa-calendar-check"></i>
        <span>Attendance</span>
      </RouterLink>

      <RouterLink to="/admin/visits" class="item">
        <i class="fas fa-house"></i>
        <span>Visits</span>
      </RouterLink>

      <RouterLink to="/admin/preparations" class="item">
        <i class="fas fa-book-open"></i>
        <span>Preparations</span>
      </RouterLink>

      <RouterLink to="/admin/announcements" class="item">
        <i class="fas fa-bullhorn"></i>
        <span>Announcements</span>
      </RouterLink>

      <RouterLink to="/admin/reports" class="item">
        <i class="fas fa-chart-pie"></i>
        <span>Reports</span>
      </RouterLink>

      <RouterLink to="/admin/settings" class="item">
        <i class="fas fa-gear"></i>
        <span>Settings</span>
      </RouterLink>

    </nav>

    <button class="logout">

      <i class="fas fa-right-from-bracket"></i>

      Logout

    </button>

  </aside>

</template>

<script setup>
</script>

<style scoped>

.sidebar{

    width:270px;

    height:100vh;

    background:#111;

    color:#fff;

    position:fixed;

    left:0;

    top:0;

    display:flex;

    flex-direction:column;

    justify-content:space-between;

    padding:25px 18px;

    box-sizing:border-box;

    transition:.3s;

    z-index:1000;

    overflow-y:auto;

}

.logo{

    text-align:center;

    margin-bottom:35px;

}

.logo h2{

    margin:0;

    font-size:28px;

    font-weight:700;

}

.logo span{

    color:#aaa;

    font-size:14px;

}

nav{

    display:flex;

    flex-direction:column;

    gap:8px;

}

.item{

    display:flex;

    align-items:center;

    gap:15px;

    padding:14px 16px;

    border-radius:14px;

    text-decoration:none;

    color:white;

    transition:.25s;

    font-size:15px;

}

.item:hover{

    background:#222;

}

.router-link-active{

    background:white;

    color:black;

    font-weight:600;

}

.item i{

    width:22px;

    text-align:center;

    font-size:18px;

}

.logout{

    margin-top:25px;

    border:none;

    background:#ef4444;

    color:white;

    padding:14px;

    border-radius:14px;

    cursor:pointer;

    font-size:15px;

    transition:.3s;

    width:100%;

}

.logout:hover{

    background:#dc2626;

}

/* Scroll */

.sidebar::-webkit-scrollbar{

    width:5px;

}

.sidebar::-webkit-scrollbar-thumb{

    background:#444;

    border-radius:20px;

}

/* ---------------------- */
/* Tablet */
/* ---------------------- */

@media(max-width:992px){

.sidebar{

    width:90px;

    padding:20px 10px;

}

.logo span{

    display:none;

}

.logo h2{

    font-size:18px;

}

.item{

    justify-content:center;

    padding:15px;

}

.item span{

    display:none;

}

.logout{

    padding:15px;

    font-size:0;

}

.logout i{

    font-size:18px;

}

}

/* ---------------------- */
/* Mobile */
/* ---------------------- */

@media(max-width:768px){

.sidebar{

    width:260px;

    left:-260px;

    box-shadow:0 0 25px rgba(0,0,0,.25);

}

.sidebar.open{

    left:0;

}

}

/* ---------------------- */
/* Large Screens */
/* ---------------------- */

@media(min-width:1600px){

.sidebar{

    width:300px;

}

.logo h2{

    font-size:32px;

}

.item{

    font-size:17px;

}

}

.menu-item{

    display:flex;

    align-items:center;

    gap:15px;

    padding:15px 20px;

    border-radius:15px;

    text-decoration:none;

    color:white;

    transition:.3s;

}

.menu-item:hover{

    background:#222;

}

.router-link-active{

    background:white;

    color:black;

    font-weight:bold;

}

</style>