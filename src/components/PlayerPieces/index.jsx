import './index.css'
import Piece from '../Piece'

const PlayerPieces = ({ pieces, addPiece, isPlayerTurn }) => {
  return(
    <div className='player-pieces'>
      { pieces.length < 1 &&
        <p className='win-message'>🏆GANASTE!!! 🎉</p>
      }
      { pieces.map(p =>
          <Piece
            type={p.type}
            positions={p.pos}
            key={p.id}
            onClick={() => addPiece(p)}
            shadowPiece={!isPlayerTurn}
          />
        )
      }
    </div>
  )
}

export default PlayerPieces