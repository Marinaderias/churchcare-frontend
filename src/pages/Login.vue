
<template>
  <div class="login-container">

    <div class="login-card">

     <div class="logo">

  <img
    src="/logo.png"
    alt="ChurchCare Logo"
    class="logo-img"
  />

  <div>
    <h1>ChurchCare</h1>
    <p class="welcome-text">
      Welcome Back
    </p>
  </div>

</div>

      <p class="subtitle">
        Sign In To Continue
      </p>

      <input
        v-model="email"
        type="email"
        placeholder="Email"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
      />

      <button @click="login">
        Login
      </button>

      <router-link
        class="register-link"
        to="/register"
      >
        Create Account
      </router-link>

      <p class="message">
        {{ message }}
      </p>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const message = ref('')

function login() {
  console.log(email.value)
  console.log(password.value)

  message.value = 'Login Clicked'
}
</script>

<style scoped>

.login-container{
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background:#f5f5f5;
}

.login-card{
  width:90%;
  max-width:400px;
  padding:35px;
  border-radius:20px;
  background:#e9e9e9;
  box-shadow:0 8px 25px rgba(0,0,0,.1);
}

.logo{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:12px;
  margin-bottom:10px;
}

.logo img{
  width:55px;
  height:55px;
  object-fit:cover;
}


.subtitle{
  text-align:center;
  margin-bottom:20px;
  color:#555;
}

input{
  width:100%;
  padding:14px;
  margin-top:15px;
  border:1px solid #ccc;
  border-radius:10px;
  outline:none;
  box-sizing:border-box;
  transition:.3s;
  background:white;
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
  font-size:16px;
  font-weight:bold;
  cursor:pointer;
  transition:.3s;
}

button:hover{
  transform:translateY(-2px);
}

.register-link{
  display:block;
  text-align:center;
  margin-top:15px;
  text-decoration:none;
  color:black;
  font-weight:bold;
}

.message{
  text-align:center;
  margin-top:10px;
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
  object-fit:cover;
  border-radius:50%;
}

.logo h1{
  margin:0;
  font-size:clamp(24px,4vw,32px);
}

.welcome-text{
  margin:0;
  color:#666;
  font-size:14px;
}

</style>