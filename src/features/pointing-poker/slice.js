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
    }
  }
})

export const { setId } = slice.actions
export default slice.reducer
