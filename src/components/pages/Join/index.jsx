import './index.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import JoinGameForm from '../../common/JoinGameForm';

const Join = ({ socket }) => {
  const { isConnected } = useSelector(state => state.connection);

  useEffect(() => {
    socket.connect();
  }, []);

  return(
    <div className='join-game-container'>
      <h1 className='title'>Join Game</h1>
      <JoinGameForm socket={socket} isConnected={isConnected} />
    </div>
  );
};

export default Join;