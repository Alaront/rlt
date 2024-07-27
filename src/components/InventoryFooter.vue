<template>
  <div class="inventory-footer">
    <UiSkeleton width="699px" radius="12px" height="36px" />
    <span class="inventory-footer__close"></span>
  </div>
</template>

<script setup lang="ts">

import UiSkeleton from "@/components/UI/UiSkeleton.vue";
</script>

<style scoped lang="scss">
  @import "../assets/style/variables";

  .inventory-footer {
    display: flex;
    padding: 18px;
    border: 1px solid $border-color;
    border-radius: 12px;
    width: 100%;
    position: relative;
  }

  .inventory-footer__close {
    position: absolute;
    top: 8px;
    right: 8px;
    background: url("../assets/icons/close.svg") no-repeat center;
    background-size: contain;
    width: 12px;
    height: 12px;
    cursor: pointer;
  }

</style>
