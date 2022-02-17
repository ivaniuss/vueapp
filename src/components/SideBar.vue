<template>
  <div class='sidebar'
  :style="{width: $store.getters.sideMenuOpen?'90%':'0%'}"
  > 
    <span v-on:click='handleMenu' class='material-icons' type='button'>menu</span>
    <div v-if='$store.getters.sideMenuOpen'>
      <SideBarButton title='Group/Company' />
      <SideBarButton title='Doctor/Distributor/Coach' />
    </div>
  </div>
</template>
<script>
  import SideBarButton from './SideBarButton.vue'
  export default {
    components: {
      SideBarButton
    },
    methods: {
     handleMenu() {
      this.$store.commit('handleMenu')
      console.log(this.$store.state.isSideMenuOpen)
     }
    }
  }
</script>
