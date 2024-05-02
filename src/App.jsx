import './App.css';
import { useEffect } from 'react';
import { socket } from './socket';
import { Outlet, useNavigate } from 'react-router-dom';

import ConnStatus from './components/common/ConnStatus';

import { useDispatch } from 'react-redux';
import { initGame, endGame, setGameStatus } from './reducers/gameReducer';
import { updateStatus } from './reducers/connectionReducer';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const onConnect = () => dispatch(updateStatus({ isConnected: true, id: socket.id }));
    const onDisconnect = () => dispatch(updateStatus({ isConnected: false, id: socket.id }));

    const onNuevaPartida = (value) => {
      dispatch(initGame(value));
      navigate('/wait');
    };

    const onUnirsePartida = (value) => {
      dispatch(setGameStatus(value));
      navigate('/game');
    };

    const onAddPiece = (value) => {
      dispatch(setGameStatus(value));
    };

    const onFinalizar = () => {
      dispatch(endGame());
      socket.disconnect();
      navigate('/');
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('nueva-partida', onNuevaPartida);
    socket.on('unirse-partida', onUnirsePartida);
    socket.on('add-piece', onAddPiece);
    socket.on('finalizar', onFinalizar);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('nueva-partida', onNuevaPartida);
      socket.off('unirse-partida', onUnirsePartida);
      socket.off('add-piece', onAddPiece);
      socket.off('finalizar', onFinalizar);
    };
  }, []);

  return (
    <main>
      <Outlet />
      <ConnStatus />
    </main>
  );
}

export default App;
