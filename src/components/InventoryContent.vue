<template>
  <div class="inventory-content">
    <div class="inventory-content__table">
      <div v-for="item in 25" class="inventory-content__table-item" :key="item" @drop="onDrop($event, item - 1)" @dragenter.prevent @dragover.prevent>
        <InventoryContentItem :indexPosition="item - 1" />
      </div>
    </div>

    <InventorySidebar/>
  </div>
</template>

<script setup lang="ts">

  import InventoryContentItem from "@/components/InventoryContentItem.vue";
  import InventorySidebar from "@/components/InventorySidebar.vue";

  import { useInventoryStore } from '@/stores/inventory';
  const inventoryStore = useInventoryStore();

  const onDrop = (event:DragEvent, position:number) => {
    if(event.dataTransfer) {
      const itemId = event.dataTransfer.getData('itemID');
      const item = inventoryStore.items.find((item) => item.id === Number(itemId));
      if (item) {
        item.position = position;
      }
    }
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
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background: $border-color;
    }
  }

</style>
