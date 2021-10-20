import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  connected: false,
}

export const slice = createSlice({
  name: 'websocket',
  initialState,
  reducers: {
    setConnected: (state, action) => {
      state.connected = action.payload
    }
  }
})

export const { setConnected } = slice.actions
export default slice.reducer
