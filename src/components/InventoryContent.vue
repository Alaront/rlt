<template>
  <div class="inventory-content">
    <div class="inventory-content__table">
      <div v-for="item in 25" class="inventory-content__table-item" :key="item">
        <InventoryContentItem :indexPosition="item - 1" @show-sidebar="showSidebar" />
      </div>
    </div>

    <InventorySidebar :isShowSidebar="isShowSidebar" :currentItem="currentItem" @close-sidebar="closeSidebar"/>
  </div>
</template>

<script setup lang="ts">

  import InventoryContentItem from "@/components/InventoryContentItem.vue";
  import InventorySidebar from "@/components/InventorySidebar.vue";
  import {ref} from "vue";

  const isShowSidebar = ref<boolean>(false)
  const currentItem = ref<number | null>(null)

  const closeSidebar = ():void => {
    isShowSidebar.value = false;
  }

  const showSidebar = (idItem:number) => {
    currentItem.value = idItem;
    isShowSidebar.value = true;
  }
</script>

<style scoped lang="scss">
  @import "../assets/style/variables";

  .inventory-content {
    position: relative;
    border: 1px solid $border-color;
    border-radius: 8px;
    overflow: hidden;
    flex: 1;
  }

  .inventory-content__table {
    height: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  .inventory-content__table-item {
    border-left: 1px solid $border-color;
    border-top: 1px solid $border-color;
    text-align: center;
    min-height: 100px;
  }

</style>
