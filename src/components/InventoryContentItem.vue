<template>
  <div class="inventory-content-item" v-if="inventoryItem" @click="emit('showSidebar', inventoryItem.id)">
    <div class="inventory-content-item__photo">
      <img :src="`src/assets/images/${inventoryItem.img}`" alt="item">
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

  const emit = defineEmits<{
    (e: 'showSidebar', itemId: number): void
  }>()

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

    img {
      width: 100%;
      height: 100%;
      background-size: contain;
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
  }
</style>
