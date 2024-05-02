import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './reducers/gameReducer';
import meReducer from './reducers/meReducer';
import connectionReducer from './reducers/connectionReducer';

const store = configureStore({
  reducer: {
    game: gameReducer,
    me: meReducer,
    connection: connectionReducer,
  }
});

export default store;