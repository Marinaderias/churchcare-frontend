<template>

<div class="dashboard">

    <div class="welcome">

        <h1>👋 Welcome Back, Marina</h1>

        <p>
            Manage your church from one place.
        </p>

    </div>

    <div class="cards">

        <div class="card">

            <i class="fas fa-users"></i>

            <h2>0</h2>

            <span>Members</span>

        </div>

        <div class="card">

            <i class="fas fa-user-tie"></i>

            <h2>0</h2>

            <span>Servants</span>

        </div>

        <div class="card">

            <i class="fas fa-calendar-check"></i>

            <h2>0</h2>

            <span>Today Attendance</span>

        </div>

        <div class="card">

            <i class="fas fa-book-open"></i>

            <h2>0</h2>

            <span>Preparations</span>

        </div>

    </div>

    <div class="bottom">

        <div class="panel">

            <h2>Recent Members</h2>

            <p>No members yet.</p>

        </div>

        <div class="panel">

            <h2>Quick Actions</h2>

            <button>Add Member</button>
            <button>Add Servant</button>
            <button>Announcement</button>

        </div>

    </div>

</div>

</template>

<script setup>

</script>

<style scoped>

.dashboard{

    width:100%;

}

.welcome{

    margin-bottom:30px;

}

.welcome h1{

    margin:0;

    font-size:35px;

}

.welcome p{

    color:#666;

}

.cards{

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(240px,1fr));

    gap:20px;

    margin-bottom:30px;

}

.card{

    background:white;

    border-radius:20px;

    padding:25px;

    box-shadow:0 8px 25px rgba(0,0,0,.06);

    transition:.3s;

}

.card:hover{

    transform:translateY(-6px);

}

.card i{

    font-size:35px;

    margin-bottom:15px;

}

.card h2{

    margin:0;

    font-size:36px;

}

.card span{

    color:#666;

}

.bottom{

    display:grid;

    grid-template-columns:2fr 1fr;

    gap:20px;

}

.panel{

    background:white;

    padding:25px;

    border-radius:20px;

    box-shadow:0 8px 25px rgba(0,0,0,.06);

}

.panel button{

    width:100%;

    margin-bottom:12px;

    border:none;

    background:black;

    color:white;

    padding:13px;

    border-radius:12px;

    cursor:pointer;

    transition:.3s;

}

.panel button:hover{

    background:#222;

}

@media(max-width:900px){

.bottom{

    grid-template-columns:1fr;

}

}

</style>