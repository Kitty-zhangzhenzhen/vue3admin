<template>
  <div class="container">
    <router-view v-slot="{ Component }">
      <keep-alive :include="cachedViews">
        <component :is="Component">
          <p>缓存页面</p>
        </component>
      </keep-alive>
    </router-view>
    <Tabbars />
    <!-- <ad-picker @onconfirm="onconfirm" /> -->
  </div>
</template>
<script lang="ts" src="./control.ts"></script>
<style lang="scss" src="./style.scss" scoped></style>