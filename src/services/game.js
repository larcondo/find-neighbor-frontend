import axios from 'axios';
import { baseAPIUrl } from '../utils/constants';

const initializeGame = async (partida) => {
  const response = await axios.get(`${baseAPIUrl}/game/initial-pieces/${partida}`);
  return response.data;
};

const agregarPieza = async (piece, partida, playerRole) => {
  const myBody = {
    partida,
    playerRole,
    piece_id: piece.piece_id
  };
  const response = await axios.post(`${baseAPIUrl}/game/add-piece`, myBody);
  return response.data;
};

export default {
  initializeGame,
  agregarPieza,
};