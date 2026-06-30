<template>

  <div class="scan-container">

    <h1 class="scan-title">
      📷 QR Scanner
    </h1>

    <p class="scan-subtitle">
      Scan Member QR Code To Register Attendance
    </p>

    <div class="scanner-card">

      <div id="reader"></div>

 <div class="upload-wrapper">

  <label class="upload-btn">

    📁 Upload QR Image

    <input
      type="file"
      accept="image/*"
      @change="scanImage"
      hidden
    />

  </label>

   </div>

      <p class="scan-tip">
        Point the camera at the member QR code
      </p>

    </div>

  </div>

</template>

<script setup>

import { onMounted } from 'vue'
import { Html5Qrcode } from 'html5-qrcode'
import api from '../services/api'

let html5QrCode
onMounted(async () => {

  html5QrCode = new Html5Qrcode("reader")

  try {

    await html5QrCode.start(

      { facingMode: "environment" },

      {
        fps: 10,
        qrbox: 250
      },

      async (decodedText) => {
      console.log(decodedText)
             alert(decodedText)

  try {

    await api.post('/attendances', {

      member_code: decodedText

    })

    alert(
      '✅ Attendance Registered'
    )

  }

  catch(error){

    console.error(error)

    alert(
      '❌ Attendance Failed'
    )

  }

},

      () => {}

    )

  }

  catch(error){

    console.error(error)

  }

})

async function scanImage(event){

  const file = event.target.files[0]

  if(!file) return

  try{

    const decodedText =
      await html5QrCode.scanFile(
        file,
        true
      )

    await api.post('/attendances',{

      member_code:
        decodedText

    })

    alert(
      '✅ Attendance Registered'
    )

  }

  catch(error){

    console.error(error)

    alert(
      '❌ Invalid QR'
    )

  }

}


</script>

<style scoped>

.scan-container{

  min-height:100vh;

  background:#f5f5f5;

  padding:25px;

  text-align:center;
}

.scan-title{

  font-size:32px;

  margin-bottom:10px;

  color:#222;
}

.scan-subtitle{

  color:#666;

  margin-bottom:25px;
}

.scanner-card{

  background:white;

  max-width:600px;

  margin:auto;

  padding:25px;

  border-radius:25px;

  box-shadow:0 8px 25px rgba(0,0,0,.08);
}

#reader{

  width:100%;

  max-width:500px;

  margin:auto;

  border-radius:20px;

  overflow:hidden;

  box-sizing:border-box;
}


:deep(button:hover){

  opacity:.9;
}

:deep(#reader img){

  margin:auto;
}

:deep(#reader__scan_region){

  border-radius:20px !important;

  overflow:hidden;
}


.scan-tip{

  margin-top:20px;

  color:#777;

  font-size:14px;
}

.upload-wrapper{

  max-width:500px;

  width:100%;

  margin:20px auto 0;
}

.upload-btn{

  display:flex;

  justify-content:center;

  align-items:center;

  width:100%;

  min-height:55px;

  background:black;

  color:white;

  border-radius:15px;

  cursor:pointer;

  font-weight:600;

  box-sizing:border-box;

  transition:.3s;
}

.upload-btn:hover{

  opacity:.9;
}

@media (max-width:768px){

  .scanner-card{

    padding:15px;
  }

  .scan-title{

    font-size:26px;
  }

  .upload-btn{

    min-height:50px;

    font-size:14px;
  }
}

</style>