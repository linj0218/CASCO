<template>
  <div>
    <!-- 头部 -->
    <headerr></headerr>
    <!-- 菜单 -->
    <menus></menus>
    <!-- 主体路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
  import headerr from '@/components/header'
  import menus from '@/components/menu'
  export default{
    components: {
      headerr, menus
    }
  }
</script>

<style lang="scss" scoped>
</style>