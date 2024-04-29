import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setMe } from '../../../reducers/meReducer'

const NewGameForm = ({ isConnected, socket }) => {
  const dispatch = useDispatch()
  const [playerName, setPlayerName] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    dispatch(setMe({
      player_name: playerName,
      player_role: 'player1',
    }))
    socket.emit('nueva-partida', playerName)
  }

  return(
    <form className='formPlayer' onSubmit={onSubmit}>
      <p>{ isConnected ? 'Conectado' : 'NO Conectado' }</p>

      <label htmlFor='p1name'>Tu nombre (player1):</label>
      <input type='text'
        name='p1name'
        id='p1name'
        value={playerName}
        onChange={e => setPlayerName(e.target.value)} />
      
      <button type='submit'>Aceptar</button>

    </form>
  )
}

export default NewGameForm