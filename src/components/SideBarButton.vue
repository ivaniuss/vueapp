<template>
  <span class='d-flex justify-content-start w-100 border-2 border-bottom border-dark text-light' type='button' @click='handleCollapse'>{{title}}</span>
  <div class='collapse-content' :style="{maxHeight: isCollapsed?'0':'12rem'}">
    <SideBarSubButton title='Search Group/Comp.' />  
    <SideBarSubButton title='Search Group/Comp.' />  
    <SideBarSubButton title='Search Group/Comp.' />  
    <SideBarSubButton title='Search Group/Comp.' />  
    <SideBarSubButton title='Search Group/Comp.' />  
  </div>
</template>
<script>
  import SideBarSubButton from './SideBarSubButton.vue'
  export default {
    components: {
      SideBarSubButton
    },
    props: {
      title: String,
    },
    data(){
      return {
        isCollapsed: false 
      }
    },
    methods: {
      handleCollapse() {
        this.isCollapsed = !this.isCollapsed
      }
    }
  }
</script>
