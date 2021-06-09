<template>
    <div class="sidebarWrap">
        <div class="sidebarLogo"></div>
        <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :collapse="!isCollapse"
        :unique-opened="false"
        :default-active="activeMenu"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="menuActiveTextColor"
        mode="vertical"
      >
        <SidebarItem
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
          :is-collapse="isCollapse"
        />
      </el-menu>
    </el-scrollbar>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { useStore } from '@/store'
export default ({
    setup(){

    }
})
</script>
<style lang="sass" scoped>

</style>