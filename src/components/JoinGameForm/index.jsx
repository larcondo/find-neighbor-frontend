import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setMe } from '../../reducers/meReducer'

const JoinGameForm = ({ isConnected, socket }) => {
  const dispatch = useDispatch()
  const [playerName, setPlayerName] = useState('')
  const [partida, setPartida] = useState('')
  
  const onSubmit = e => {
    e.preventDefault()
    dispatch(setMe({
      player_name: playerName,
      player_role: 'player2'
    }))
    socket.emit('unirse-partida', playerName, partida)
  }

  return(
    <form className='formPlayer' onSubmit={onSubmit}>
      <p>{ isConnected ? 'Conectado' : 'NO Conectado' }</p>
      <label htmlFor='p2name'>Tu nombre (player2):</label>
      <input type='text'
        name='p2name' id='p2name'
        value={playerName} onChange={e => setPlayerName(e.target.value)} />
      
      <label htmlFor='idPartida'>ID Partida:</label>
      <input type='text'
        name='idPartida' id='idPartida'
        value={partida} onChange={e => setPartida(e.target.value)} />
      
      <button type='submit'>Aceptar</button>
    </form>
  )
}

export default JoinGameForm