import './index.css';
import Piece from '../Piece';

const PlayerPieces = ({ pieces, isPlayerTurn }) => {
  return(
    <div className='player-pieces'>
      { pieces.map(p =>
        <Piece
          type={p.tipo}
          positions={p.valores}
          key={p.id}
          id={p.id}
          pieceComplete={p}
          shadowPiece={!isPlayerTurn}
        />
      )
      }
    </div>
  );
};

export default PlayerPieces;