<template>
  <div>
    <Header :windowWidth='windowWidth' />
    <NavBar />
    <SideBar />
  </div>
</template>

<script>
  import { useWindowSize } from 'vue-window-size'
  import Header from '../components/Header.vue'
  import NavBar from '../components/NavBar.vue'
  import SideBar from '../components/SideBar.vue'
  export default {
    setup() {
      const { width, height } = useWindowSize();
      return {
windowWidth: width,
               windowHeight: height,
      }
    },
    name: 'Home',
    components: {
    Header,
    NavBar,
    SideBar
  }
 } 
</script>
