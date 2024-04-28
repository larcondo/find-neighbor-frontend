import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  player_name: null,
  player_role: null,
}

const meSlice = createSlice({
  name: 'me',
  initialState,
  reducers: {
    setMe(state, action) {
      return action.payload
    }
  }
})

export const { setMe } = meSlice.actions

export default meSlice.reducer