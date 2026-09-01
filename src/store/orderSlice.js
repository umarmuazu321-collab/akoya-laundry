import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  lastAddedItem: null,
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload
      const existingItem = state.items.find((cartItem) => cartItem.id === item.id)

      if (existingItem) {
        existingItem.quantity += item.quantity || 1
        existingItem.price = item.price
        return
      }

      state.items.push({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity || 1,
      })

      state.lastAddedItem = item.name
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.items.find((cartItem) => cartItem.id === id)

      if (!item) return

      if (quantity <= 0) {
        state.items = state.items.filter((cartItem) => cartItem.id !== id)
        return
      }

      item.quantity = quantity
    },

    clearCart: (state) => {
      state.items = []
      state.lastAddedItem = null
    },
  },
})

export const { addItem, removeItem, updateQuantity, clearCart } = orderSlice.actions

export default orderSlice.reducer
