<template>
  <div class='header d-flex justify-content-between py-2 px-2'>
    <img class='img-fluid w-25 d-flex col-4' src='../assets/logo.png' alt='logo' />  
    <div v-if='windowWidth > 380' class='d-flex justify-content-center align-items-center'>
      Powerful Technologies {{windowWidth}} For A Better Life™
    </div>
    <div class='d-flex col-5 gap-2 justify-content-end align-items-center'>
      <label>Hi ivan mamani</label>
      <img src='https://www.w3schools.com/howto/img_avatar.png' alt='profile' class='rounded-circle img-fluid' width='55' height='55'/>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    windowWidth: Number,
  },
}
</script>
<style>
</style>
