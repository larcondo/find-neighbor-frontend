import './index.css';
import { useSelector } from 'react-redux';

const ConnStatus = () => {
  const connection = useSelector(state => state.connection);

  if (!connection) return null;

  const connectionClass = connection.isConnected ? 'connected' : null;

  return(
    <p className='conn-status'>
      <span className={connectionClass}>
        { connection.isConnected ? 'Conectado' : 'Desconectado' }
      </span>
      { ' ' }
      <span>{ connection.id }</span>
    </p>
  );
};

export default ConnStatus;