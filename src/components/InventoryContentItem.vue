<template>
  <div class="inventory-content-item" v-if="inventoryItem" @click="newCurrentItem" draggable="true" @dragstart="startDrag($event, indexPosition)">
    <div class="inventory-content-item__photo">
      <span :data-photo="inventoryItem.img"></span>
    </div>
    <span class="inventory-content-item__count">
      {{inventoryItem.quantity}}
    </span>
  </div>
</template>

<script setup lang="ts">
  import {computed, ref} from 'vue';
  import { useInventoryStore } from '@/stores/inventory';
  const inventoryStore = useInventoryStore();

  interface Props {
    indexPosition: number
  }

  const props = defineProps<Props>()

  const inventoryItem = computed(() => {
      return inventoryStore.items.find(item => item.position === props.indexPosition);
  });

  const newCurrentItem = () => {
    if(inventoryItem.value && Number(inventoryItem.value?.id) >= 0) inventoryStore.setCurrentItem(inventoryItem.value.id)
  }

  const startDrag = (event:DragEvent, item:number) => {
    if(inventoryItem.value?.id && event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('itemID', String(inventoryItem.value.id))
    }
  }

</script>

<style scoped lang="scss">
  @import "../assets/style/variables";

  .inventory-content-item {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &.active {
      background: #2F2F2F;
    }
  }
  .inventory-content-item__photo {
    width: 54px;
    height: 54px;

    span[data-photo='item-blue.png'] {
      width: 100%;
      height: 100%;
      background: url("../assets/images/item-blue.png") no-repeat center;
      background-size: contain;
      display: block;
    }

    span[data-photo='item-green.png'] {
      width: 100%;
      height: 100%;
      background: url("../assets/images/item-green.png") no-repeat center;
      background-size: contain;
      display: block;
    }

    span[data-photo='item-yellow.png'] {
      width: 100%;
      height: 100%;
      background: url("../assets/images/item-yellow.png") no-repeat center;
      background-size: contain;
      display: block;
    }
  }

  .inventory-content-item__count {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 2px 5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: $border-color;
    border-top: 1px solid $border-color;
    border-left: 1px solid $border-color;
    border-top-left-radius: 6px;
    text-align: center;
    background: $bg-color;

    .white & {
      background: $white-bg-color;
    }
  }
</style>
