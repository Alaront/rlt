import { defineStore } from 'pinia'
import type {InventoryInfo} from "@/type/InventoryItem";
import { watch } from 'vue';

interface Store {
  currentItem: number | null
  items: InventoryInfo[]
}

function defaultData():InventoryInfo[] {
  const saved:InventoryInfo[] = JSON.parse(localStorage.getItem('inventory') || '[]');

  return saved.length ? saved : [
    {
      id: 0,
      img: 'item-green.png',
      position: 0,
      quantity: 4
    },
    {
      id: 1,
      img: 'item-yellow.png',
      position: 1,
      quantity: 2
    },
    {
      id: 2,
      img: 'item-blue.png',
      position: 2,
      quantity: 5
    },
  ]
}

export const useInventoryStore = defineStore('inventory', {
  state: (): Store => {
    return {
      currentItem: null,
      items: defaultData()
    }
  },
  actions: {
    dellQuantity(itemId: number, quantity: number) {
      const index = this.items.findIndex(item => item.id === itemId)
      this.items[index].quantity = this.items[index].quantity - quantity;

      if(this.items[index].quantity === 0) {
        this.items.splice(index, 1)
        this.currentItem = null;
      }
    },
    setCurrentItem(itemId:number | null) {
      this.currentItem = itemId;
    }
  }
})
