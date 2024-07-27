import { defineStore } from 'pinia'
import type {InventoryInfo} from "@/type/InventoryItem";

interface Store {
  items: InventoryInfo[]
}

export const useInventoryStore = defineStore('inventory', {
  state: (): Store => {
    return {
      items: [
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
  },
  actions: {
    dellQuantity(itemId: number, quantity: number) {
      const index = this.items.findIndex(item => item.id === itemId)
      this.items[index].quantity = this.items[index].quantity - quantity;
    }
  }
})
