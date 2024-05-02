import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  partida: null,
  player1: null,
  player2: null,
  board: [],
  turn: 'player1',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initGame(state, action) {
      return {
        ...state,
        partida: action.payload.gameId,
      };
    },
    setGameStatus(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    endGame() {
      return initialState;
    }
  }
});

export const { initGame, setGameStatus, endGame } = gameSlice.actions;

export default gameSlice.reducer;