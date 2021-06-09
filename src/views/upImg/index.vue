<template>
    <div class="container" id="posters">
      <div @click="wxChooseImages">上传图片</div>
      <input type="text" placeholder="请输入">
      <router-link :to="{path:'/html2canva'}">html2canva</router-link>
    </div>
  </template>
<script lang="ts" src="./control.ts"></script>
<style lang="scss" src="./style.scss" scoped>

</style>