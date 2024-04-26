import './index.css'

import Board from '../Board'
import PlayerPieces from '../PlayerPieces'
import WinnerMessage from '../WinnerMessage'

const GameSIO = ({ game, playerName, addPiece, finalizar }) => {
  if (![game.player1.player_name, game.player2.player_name].includes(playerName)) return null

  const player = game.player1.player_name === playerName ? game.player1 : game.player2
  const rival = game.player1.player_name === playerName ? game.player2 : game.player1
  const turn = game.turn === player.player_role
  const board = game.board

  const gameSt = {
    gameOver: player.pieces.length < 1 || rival.pieces.length < 1,
    winner: player.pieces.length < 1 ? player.player_name : rival.pieces.length < 1 ? rival.player_name : null
  }

  return(
    <div className='game-container'>
      <div>
        <h2>Find Neighbor</h2>
        <Board
          rows={10} columns={10}
          boardState={board}
        />
      </div>

      <div className='player2'>
        <p className={ !turn ? 'name playing' : 'name notplaying'}>{ rival.player_name }</p>
        <RivalPieces quantity={rival.pieces.length} />
        <p>A tu rival le quedan { rival.pieces.length } piezas</p>
      </div>

      <div className='player1'>
        <p className={ turn ? 'name playing' : 'name notplaying'}>{ player.player_name }</p>
        <p>Piezas restantes: { player.pieces.length }</p>
        <PlayerPieces pieces={player.pieces} addPiece={addPiece} isPlayerTurn={turn} />
      </div>

      <p style={{ fontSize: '10px', marginTop: '30px' }}>Partida: { game.partida }</p>
      
      <button onClick={finalizar}>Finalizar</button>

      <WinnerMessage gameStatus={gameSt}  />
    </div>
  )
}

const RivalPieces = ({ quantity }) => {
  if (!quantity) return null

  const arreglo = new Array(quantity).fill(1);

  return(
    <div className='rival-pieces' style={{ transform: `translateX(${4*(arreglo.length-1)}px)`}}>
      { arreglo.map( (p, index) =>
        <div key={index} className='rival-piece' style={{
          transform: `
            translateX(${-5*index}px)
            rotate(${(index - (arreglo.length-1)/2)*5}deg)
          `
        }}></div>
      )}
    </div>
  )
}

export default GameSIO