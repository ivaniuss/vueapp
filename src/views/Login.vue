<template>
  <div class = 'd-flex flex-column justify-content-center align-items-center px-3'>
    <img class ='img-fluid' src='../assets/logo.png' alt='logo' />
    <form class='d-flex flex-column gap-3'>
      <div class="form-group d-flex align-items-center">
        <label class= 'col-3' for="exampleInputEmail1">Email: </label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="form-group d-flex align-items-center">
        <label class= 'col-3' for="exampleInputPassword1">Password: </label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <small id="forgotPassword" class="form-text text-muted d-flex justify-content-end"><em>Forgot Password</em></small>
      <button type="submit" class="btn btn-primary w-100 mx-auto">Login</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    components: {
    }
  }
</script>
