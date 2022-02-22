import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const ItemsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addItem: (state, action) => [...state, action.payload],
    deleteItem: (state, action) => state.filter(contact => contact.id !== action.payload),
  },
});

export const { addItem, deleteItem } = ItemsSlice.actions;
export default ItemsSlice.reducer;
