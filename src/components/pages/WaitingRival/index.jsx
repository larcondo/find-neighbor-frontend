import './index.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy } from 'react-icons/md';

const WaitingRival = () => {
  const [copyStatus, setCopyStatus] = useState(false);
  const partida = useSelector(state => state.game.partida);

  const onCopyId = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  };

  return(
    <div className='waiting-rival-container'>
      <h1>Waiting rival</h1>
      <p>Esperando al Player2</p>
      <p>ID de partida:</p>
      <div className='id-container'>
        <h2>{ partida }</h2>
        <CopyToClipboard text={partida} onCopy={onCopyId}>
          <button type='button' className='copy-to-clipboard-button' title='Copiar id'>
            <MdContentCopy size={16} />
            { copyStatus && <p className='text'>Copiado!</p> }
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default WaitingRival;