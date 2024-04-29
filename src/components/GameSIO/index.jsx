import './index.css'

import Board from '../Board'
import PlayerPieces from '../PlayerPieces'
import RivalPieces from './RivalPieces'
import WinnerMessage from '../WinnerMessage'

const GameSIO = ({ game, me, addPiece, finalizar }) => {
  if (!game) return null
  if (!game.player1 || !game.player2) return null 

  const player = game.player1.player_name === me.player_name ? game.player1 : game.player2
  const rival = game.player1.player_name === me.player_name ? game.player2 : game.player1
  const turn = game.turn === player.player_role
  const board = game.board

  const gameSt = {
    gameOver: player.pieces.length < 1 || rival.pieces.length < 1,
    winner: player.pieces.length < 1 ? player.player_name : rival.pieces.length < 1 ? rival.player_name : null
  }

  return(
    <div className='game-container'>
      <h2 className='title'>Find Neighbor</h2>
      <Board
        rows={10} columns={10}
        boardState={board}
      />

      <div className='rival-container'>
        <div className='rival-data'>
          <span className={ !turn ? 'name playing' : 'name notplaying'}>{ rival.player_name }</span>
          <span className='pieces-left'><b>{ rival.pieces.length }</b> piezas</span>
        </div>
        <RivalPieces quantity={rival.pieces.length} />
      </div>

      <div className='player'>
        <PlayerPieces pieces={player.pieces} addPiece={addPiece} isPlayerTurn={turn} />
        <div className='player-data'>
          <span className={ turn ? 'name playing' : 'name notplaying'}>You: { player.player_name }</span>
          <span className='pieces-left'><b>{ player.pieces.length }</b> piezas</span>
        </div>
      </div>

      <div>
        <span style={{ fontSize: '10px', marginRight: '2em' }}>Partida: { game.partida }</span>
        <button onClick={finalizar}>Finalizar</button>
      </div>
      

      <WinnerMessage gameStatus={gameSt}  />
    </div>
  )
}

export default GameSIO