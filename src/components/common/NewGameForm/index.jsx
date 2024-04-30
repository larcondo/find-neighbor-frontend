import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setMe } from '../../../reducers/meReducer'

import TextInput from '../TextInput'

const namePattern = new RegExp('^[0-9a-zA-Zá-ú]{4,}$');

const NewGameForm = ({ isConnected, socket }) => {
  const dispatch = useDispatch()
  const [playerName, setPlayerName] = useState('')
  const [errorMessage, setErrorMessage] = useState('Requerido.')

  const onSubmit = e => {
    e.preventDefault()
    dispatch(setMe({
      player_name: playerName,
      player_role: 'player1',
    }))
    socket.emit('nueva-partida', playerName)
  }

  const onNameChange = e => {
    setPlayerName(e.target.value)
    if (e.target.value.length < 1) return setErrorMessage('Requerido.')
    if (e.target.value.length < 4) return setErrorMessage('Nombre demasiado corto.')

    const isValid = namePattern.test(e.target.value)

    setErrorMessage(
      isValid ? null : 'El nombre debe contener 0-9, a-z o A-Z.'
    )
  }

  return(
    <form className='formPlayer' onSubmit={onSubmit}>

      <TextInput
        name='p1name'
        label='Player1:'
        placeholder='Tu nombre...'
        value={playerName}
        onChange={onNameChange}
        errMessage={errorMessage}
        validMessage='Válido'
      />

      <button type='submit' disabled={errorMessage}>
        Aceptar
      </button>

      <p>{ isConnected ? 'Conectado' : 'NO Conectado' }</p>
    </form>
  )
}

export default NewGameForm