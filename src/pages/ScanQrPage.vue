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

      <p class="scan-tip">
        Point the camera at the member QR code
      </p>

    </div>

  </div>

</template>

<script setup>

import { onMounted } from 'vue'
import { Html5Qrcode } from 'html5-qrcode'

onMounted(async () => {

  const html5QrCode = new Html5Qrcode("reader")

  try {

    await html5QrCode.start(

      { facingMode: "environment" },

      {
        fps: 10,
        qrbox: 250
      },

      (decodedText) => {

        alert(
          "QR Found: " +
          decodedText
        )

      },

      () => {}

    )

  }

  catch(error){

    console.error(error)

  }

})

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

  max-width:500px;

  margin:auto;

  border-radius:20px;

  overflow:hidden;
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

</style>