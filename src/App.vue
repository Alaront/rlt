<template>
  <div class="inventory">
    <InventoryLeft />
    <InventoryContent />
    <InventoryFooter />
    <UiTheme />
  </div>
</template>

<script setup lang="ts">
  import InventoryLeft from "./components/InventoryLeft.vue";
  import InventoryContent from "@/components/InventoryContent.vue";
  import InventoryFooter from "@/components/InventoryFooter.vue";

  import {useInventoryStore} from "./stores/inventory";
  import {watch} from "vue";
  import UiTheme from "@/components/UI/UiTheme.vue";


  watch(
      useInventoryStore,
      (newStore) => {
        localStorage.setItem('inventory', JSON.stringify(newStore.items));
      },
      { deep: true }
  );
</script>

<style scoped lang="scss">
  @import "./assets/style/variables";

  .inventory {
    width: 785px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 24px;
    position: relative;
  }
</style>
