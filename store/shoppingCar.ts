import { create } from 'zustand';

type ShoppingCarType = {
  items: any[],
  addItem: (e: any) => void,
  removeItem: (i: number) => void
}

const uniqueProducts = (oldArrayProducts: any[], newItem: any): any[] => {
  let newArray = []
  const existProduct = oldArrayProducts.findIndex((product) => product.id_product === newItem.id_product)

  if (existProduct < 0) {
    newItem.quantity = 1
    newArray = [...oldArrayProducts, newItem]
  } else {
    const updatedCart = [...oldArrayProducts]
    updatedCart[existProduct].quantity++
    newArray = updatedCart
  }

  return newArray
}

export const useShoppingCarStore = create<ShoppingCarType>((set: any) => ({
  items: [],
  addItem: (item: any) => set((state: any) => ({ items: uniqueProducts(state.items, item) })),
  removeItem: (index: any) => set((state: any) => ({ items: state.items.filter((_: any, i: number) => i != index) }))
}))