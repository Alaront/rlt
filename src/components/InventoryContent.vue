<template>
  <div class="inventory-content">
    <div class="inventory-content__table">
      <table>
        <tr v-for="(row, rowIndex) in 5" :key="rowIndex">
          <td v-for="(column, columnIndex) in 5" :key="columnIndex" :data-item="(rowIndex + 1) * (columnIndex + 1)" @click="showSidebar">
            <InventoryContentItem :index="(row * column)"  />
          </td>
        </tr>
      </table>
    </div>
    <InventorySidebar :isShowSidebar="isShowSidebar" @close-sidebar="closeSidebar"/>
  </div>
</template>

<script setup lang="ts">

  import InventoryContentItem from "@/components/InventoryContentItem.vue";
  import InventorySidebar from "@/components/InventorySidebar.vue";
  import {ref} from "vue";

  const isShowSidebar = ref<boolean>(false)

  const closeSidebar = ():void => {
    isShowSidebar.value = false;
  }

  const showSidebar = () => {
    isShowSidebar.value = true;
  }
</script>

<style scoped lang="scss">
  @import "../assets/style/variables";

  .inventory-content {
    position: relative;
    border: 1px solid $border-color;
    border-radius: 12px;
    overflow: hidden;
  }

  .inventory-content__table {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    overflow: hidden;
  }

  td {
    width: 105px;
    height: 100px;
    border: 1px solid $border-color;
    text-align: center;

    &[data-item="1"] {
      border-top-left-radius: 12px;
    }
  }

</style>
