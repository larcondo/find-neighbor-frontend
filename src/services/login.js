import axios from 'axios'
import { baseAPIUrl } from '../utils/constants'

const gameStart = async (playerName) => {
  const response = await axios.post(`${baseAPIUrl}/game/start`, { playerName })
  return response.data
}

const gameJoin = async (playerName, gameId) => {
  const response = await axios.post(`${baseAPIUrl}/game/join`, { playerName, gameId })
  return response.data
}

export default {
  gameStart,
  gameJoin
}