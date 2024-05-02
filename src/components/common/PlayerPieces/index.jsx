import './index.css';
import Piece from '../Piece';

const PlayerPieces = ({ pieces, addPiece, isPlayerTurn }) => {
  return(
    <div className='player-pieces'>
      { pieces.map(p =>
        <Piece
          type={p.tipo}
          positions={p.valores}
          key={p.id}
          onClick={() => addPiece(p)}
          shadowPiece={!isPlayerTurn}
        />
      )
      }
    </div>
  );
};

export default PlayerPieces;