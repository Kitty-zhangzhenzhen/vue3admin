<template>
    <div class="container">
     <rotaryTable :rotate-data="rotateTable.rotate" ref="Rotary" @pointer-btn="pointerBtn" v-if="prizeType==1" />
     <ninePalaceDraw v-if="prizeType==2" ref="ninePalace" @setlottery="setlottery" />
     <slotMachine v-if="prizeType==3" :imglist="imgList" />
    </div>
  </template>
<script lang="ts" src="./control.ts"></script>
<style lang="scss" src="./style.scss" scoped>

</style>