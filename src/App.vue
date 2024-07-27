<template>
  <div class="inventory">
    <InventoryLeft />
    <InventoryContent />
    <InventoryFooter />
  </div>
</template>

<script setup lang="ts">
  import InventoryLeft from "./components/InventoryLeft.vue";
  import InventoryContent from "@/components/InventoryContent.vue";
  import InventoryFooter from "@/components/InventoryFooter.vue";

  import {useInventoryStore} from "./stores/inventory";

  const inventoryStore = useInventoryStore()
  const items = inventoryStore.items
</script>

<style scoped lang="scss">
  @import "./assets/style/variables";

  .inventory {
    width: 785px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 24px;
  }
</style>
