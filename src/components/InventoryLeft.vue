<template>
  <div class="inventory-left">
    <div class="inventory-left__photo">
      <img :src="photo" alt="photo">
    </div>
    <div class="inventory-left__description">
      <UiSkeleton :width="'190px'" :height="'26px'" :radius="'12px'" style="margin-bottom: 24px;"/>
      <UiSkeleton :width="'155px'" :height="'10px'" :radius="'4px'" style="margin-bottom: 16px;"/>
      <UiSkeleton :width="'190px'" :height="'10px'" :radius="'4px'" style="margin-bottom: 16px;"/>
      <UiSkeleton :width="'170px'" :height="'10px'" :radius="'4px'" style="margin-bottom: 16px;"/>
      <UiSkeleton :width="'160px'" :height="'10px'" :radius="'4px'" style="margin-bottom: 16px;"/>
      <UiSkeleton :width="'140px'" :height="'10px'" :radius="'4px'" style="margin-bottom: 24px;"/>
      <UiSkeleton :width="'80px'" :height="'10px'"  :radius="'4px'" />
    </div>
  </div>
</template>

<script setup lang="ts">

import photo from '../assets/images/persons.png'
import UiSkeleton from "@/components/UI/UiSkeleton.vue";

</script>

<style scoped lang="scss">
  @import "../assets/style/variables";

  .inventory-left {
    padding: 18px 14px;
    border: 1px solid $border-color;
    max-width: 236px;
    border-radius: 12px;
  }

  .inventory-left__photo {
    width: 100%;
    height: 240px;
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 8px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: blur(5px);
    }
  }

  .inventory-left__description {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


</style>
