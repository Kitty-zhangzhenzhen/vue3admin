<template>
  <div class="container">

     <div> <router-link :to="{path:'/upImg'}">upImg</router-link></div>
  
     
     <div> <router-link :to="{path:'/html2Canva'}">html2Canvas</router-link></div>
    
     <!-- <ad-picker @onconfirm="onconfirm" /> -->
  </div>
</template>
<script lang="ts" src="./control.ts"></script>
<style lang="scss" src="./style.scss" scoped></style>