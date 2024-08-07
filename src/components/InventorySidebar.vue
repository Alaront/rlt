<template>
  <div class="inventory-sidebar" :class="{show: currentItem}">
    <span class="inventory-sidebar__close" @click="closeSidebar"></span>

    <div class="inventory-sidebar__photo">
      <span :data-photo="currentItem?.img"></span>
    </div>

    <div class="inventory-sidebar__info">
      <UiSkeleton width="211px" radius="8px" height="30px" style="margin-bottom: 24px"/>
      <UiSkeleton width="100%" radius="4px" height="10px" style="margin-bottom: 16px"/>
      <UiSkeleton width="100%" radius="4px" height="10px" style="margin-bottom: 16px"/>
      <UiSkeleton width="100%" radius="4px" height="10px" style="margin-bottom: 16px"/>
      <UiSkeleton width="180px" radius="4px" height="10px" style="margin-bottom: 16px"/>
      <UiSkeleton width="80px" radius="4px" height="10px" />
    </div>

    <div class="inventory-sidebar__btn-del">
      <button @click="showMenu">Удалить предмет</button>
    </div>

    <div class="inventory-sidebar__menu" :class="{show: showMenuDell}">
      <input type="text" v-model="dellCount" placeholder="Введите количество" :class="{error: errorInput}"/>
      <div class="inventory-sidebar__menu-btn">
        <button @click="hideMenu">Отмена</button>
        <button @click="dellItems">Подтвердить</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import UiSkeleton from "./UI/UiSkeleton.vue";
  import {ref, computed} from "vue";
  import { useInventoryStore } from '@/stores/inventory';
  const inventoryStore = useInventoryStore();

  const showMenuDell = ref<boolean>(false)
  const dellCount = ref<number | null>(null)
  const errorInput = ref<boolean>(false)

  const showMenu = ():void => {
    showMenuDell.value = true;
  }

  const hideMenu = ():void => {
    showMenuDell.value = false
  }

  const dellItems = () => {
    if(Number(dellCount.value) && currentItem.value && currentItem.value.quantity >= Number(dellCount.value)) {
      inventoryStore.dellQuantity(currentItem.value.id, Number(dellCount.value))
      errorInput.value = false;
      dellCount.value = null;
    } else {
      console.log('props.currentItem', inventoryStore.currentItem)
      console.log('props.inventoryStore.currentItem', dellCount.value)
      errorInput.value = true;
    }
  }


  const currentItem = computed(() => {
    return inventoryStore.items.find(item => item.id === inventoryStore.currentItem)
  })

  const closeSidebar = ():void => {
    inventoryStore.setCurrentItem(null)
  }
</script>

<style scoped lang="scss">
  @import "../assets/style/variables";

  .inventory-sidebar {
    background: $bg-color;
    width: 250px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    border-left: 1px solid $border-color;
    padding: 55px 15px 0 15px;
    transition: 0.5s;
    transform: translateX(250px);

    &.show {
      transform: translateX(0);
    }

    .white & {
      background: $white-bg-color;
    }
  }

  .inventory-sidebar__close {
    position: absolute;
    top: 14px;
    right: 14px;
    background: url("../assets/icons/close.svg") no-repeat center;
    background-size: contain;
    width: 12px;
    height: 12px;
    cursor: pointer;
  }

  .inventory-sidebar__photo {
    width: 130px;
    height: 160px;
    margin: 0 auto;
    padding-bottom: 30px;

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

  .inventory-sidebar__info {
    display: flex;
    align-items: center;
    flex-direction: column;
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    padding: 16px 0 24px 0;
  }

  .inventory-sidebar__btn-del {
    padding-top: 18px;

    button {
      background: $main-red;
      border-radius: 8px;
      color: $main-white;
      font-family: $font-SF-Pro-Display;
      padding: 11px 0;
      display: block;
      text-align: center;
      width: 100%;
      cursor: pointer;
    }
  }

  .inventory-sidebar__menu {
    position: absolute;
    bottom: 0;
    left: 0;
    background: $bg-color;
    padding: 20px;
    width: 100%;
    border-top: 1px solid $border-color;
    transition: 0.5s;
    transform: translateY(100%);

    &.show {
      transform: none;
    }

    .white & {
      background: $white-bg-color;
    }

    input {
      padding: 11px 11px 11px 12px;
      font-family: $font-inter;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: $main-white;
      opacity: 0.4;
      border: 1px solid $border-color;
      border-radius: 4px;
      width: 100%;
      margin-bottom: 20px;

      &.error {
        border: 1px solid $main-red;
      }
    }
  }

  .inventory-sidebar__menu-btn {
    display: flex;
    gap: 10px;

    button{
      border-radius: 8px;
      padding: 8px 0;
      flex: 1;
      text-align: center;
      font-family: $font-SF-Pro-Display;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      cursor: pointer;

      &:first-child {
        background: $main-white;
        color: $bg-color;
        border-radius: 8px;

      }

      &:last-child {
        background: $main-red;
        color: $main-white;
        border-radius: 8px;
        min-width: 112px;
      }
    }
  }
</style>
