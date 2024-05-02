import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMe } from '../../../reducers/meReducer';

import TextInput from '../TextInput';

const namePattern = new RegExp('^[0-9a-zA-Zá-ú]{4,}$');
const idPattern = new RegExp('^[0-9a-fA-F]{16}$');

const JoinGameForm = ({ isConnected, socket }) => {
  const dispatch = useDispatch();
  const [playerName, setPlayerName] = useState('');
  const [partida, setPartida] = useState('');
  const [errorMessage, setErrorMessage] = useState({ name: 'Requerido.', idPartida: 'Requerido.' });

  const onSubmit = e => {
    e.preventDefault();
    dispatch(setMe({
      player_name: playerName,
      player_role: 'player2'
    }));
    socket.emit('unirse-partida', playerName, partida);
  };

  const onNameChange = e => {
    setPlayerName(e.target.value);
    if (e.target.value.length < 1)
      return setErrorMessage(prev => ({ ...prev, name: 'Requerido.' }));
    if (e.target.value.length < 4)
      return setErrorMessage(prev => ({ ...prev, name: 'Nombre demasiado corto.' }));

    const isValid = namePattern.test(e.target.value);

    setErrorMessage(prev => (
      { ...prev, name: isValid ? null : 'El nombre debe contener 0-9, a-z o A-Z.' }
    ));
  };

  const onIdChange = e => {
    const value = e.target.value;
    setPartida(value);

    if (value.length < 1)
      return setErrorMessage(prev => ({ ...prev, idPartida: 'Requerido.' }));

    if (value.length !== 16)
      return setErrorMessage(prev => ({ ...prev, idPartida: 'El id debe ser de 16 dígitos.' }));

    const isValid = idPattern.test(value);

    setErrorMessage(prev => (
      { ...prev, idPartida: isValid ? '' : 'id de partida incorrecto.' }
    ));
  };

  return(
    <form className='formPlayer' onSubmit={onSubmit}>

      <TextInput
        name='p2name'
        label='Player2:'
        placeholder='Tu nombre...'
        value={playerName}
        onChange={onNameChange}
        errMessage={errorMessage.name}
        validMessage='Válido'
      />

      <TextInput
        name='idPartida'
        label='id Partida:'
        placeholder='Ingresa aquí el id de la partida...'
        value={partida}
        onChange={onIdChange}
        errMessage={errorMessage.idPartida}
        validMessage='id válido'
      />

      <button type='submit' disabled={errorMessage.name || errorMessage.idPartida}>
        Aceptar
      </button>

      <p>{ isConnected ? 'Conectado' : 'NO Conectado' }</p>
    </form>
  );
};

export default JoinGameForm;