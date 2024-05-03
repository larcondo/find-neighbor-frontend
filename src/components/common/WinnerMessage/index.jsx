import './index.css';

import Button from '../Button';

const WinnerMessage = ({ gameStatus, action }) => {
  if (!gameStatus) return null;

  if (!gameStatus.gameOver) return null;

  return(
    <div className='winner-message-container'>
      <div className='winner-message'>
        <p>¡FIN del JUEGO!! 🎉</p>
        <p>Felicitaciones { gameStatus.winner.toUpperCase() }</p>
        <p>¡Has ganado!🏆</p>
        <Button onClick={action}>
          Jugar de nuevo
        </Button>
      </div>
    </div>
  );
};

export default WinnerMessage;