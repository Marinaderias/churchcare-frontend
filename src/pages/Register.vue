<template>
  <div class="register-container">

    <div class="register-card">

      <div class="logo">
        <img src="/logo.png" alt="Logo" class="logo-img" />
        <div>
          <h1>ChurchCare</h1>
          <p class="welcome-text">Create New Account</p>
        </div>
      </div>

      <input v-model="form.name" type="text" placeholder="Full Name" />

      <input v-model="form.phone" type="text" placeholder="Phone" />

      <input v-model="form.email" type="email" placeholder="Email" />

      <input v-model="form.password" type="password" placeholder="Password" />

      <input
        v-model="form.confession_father"
        type="text"
        placeholder="Confession Father"
      />

      <input
        v-model="form.address"
        type="text"
        placeholder="Address"
      />

      <input
        v-model="form.birth_date"
        type="date"
      />

      <input
        v-model="form.job"
        type="text"
        placeholder="Job"
      />

      <button @click="register">
        Register
      </button>

      <router-link
        class="login-link"
        to="/"
      >
        Already have an account?
      </router-link>

    </div>

  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  phone: '',
  email: '',
  password: '',
  role: 'servant',
  address: '',
  birth_date: '',
  job: '',
  confession_father: ''
})

function register() {
  console.log(form)
}
</script>

<style scoped>

.register-container{
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background:#f5f5f5;
  padding:20px;
}

.register-card{
  width:90%;
  max-width:500px;
  background:#e9e9e9;
  padding:35px;
  border-radius:20px;
  box-shadow:0 8px 25px rgba(0,0,0,.1);
}

.logo{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:15px;
  margin-bottom:25px;
}

.logo-img{
  width:70px;
  height:70px;
  border-radius:50%;
}

.welcome-text{
  margin:0;
  color:#666;
}

input{
  width:100%;
  padding:14px;
  margin-top:12px;
  border:1px solid #ccc;
  border-radius:10px;
  box-sizing:border-box;
  outline:none;
}

input:focus{
  border-color:black;
  box-shadow:0 0 0 3px rgba(0,0,0,.1);
}

button{
  width:100%;
  padding:14px;
  margin-top:20px;
  border:none;
  border-radius:10px;
  background:black;
  color:white;
  cursor:pointer;
  font-size:16px;
  font-weight:bold;
}

.login-link{
  display:block;
  text-align:center;
  margin-top:15px;
  text-decoration:none;
  color:black;
  font-weight:bold;
}

</style>