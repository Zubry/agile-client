import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
}

export const slice = createSlice({
  name: 'pointing-poker',
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload
    },
    update: (state, action) => {
      return action.payload
    }
  }
})

export const { setId, update } = slice.actions
export default slice.reducer
