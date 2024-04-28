import { createSlice } from '@reduxjs/toolkit';
import { socket } from '../socket';

const initialState = {
  isConnected: socket.connected,
  id: socket.id,
}

const connectionSlice = createSlice({
  name: 'connection',
  initialState,
  reducers: {
    updateStatus(state, action) {
      return action.payload
    }
  }
})

export const { updateStatus } = connectionSlice.actions

export default connectionSlice.reducer