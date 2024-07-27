<template>
  <div class="change-theme" @click="changeTheme"></div>
</template>

<script setup lang="ts">
  const changeTheme = () => {
    document.body.classList.toggle('white')
  }
</script>

<style scoped lang="scss">
  .change-theme {
    width: 30px;
    height: 30px;
    background: url("../../assets/icons/moon.svg") no-repeat center;
    background-size: contain;
    position: absolute;
    top: 0;
    left: -50px;
    cursor: pointer;

    .white & {
      background: url("../../assets/icons/sun.svg") no-repeat center;
      background-size: contain;
    }
  }
</style>
