import './index.css'
import { useState, useEffect } from 'react'
import { shuffleArray } from '../../../utils/functions'
import { TOTAL_PIECES } from '../../../utils/constants'

import game from '../../services/game'

import Board from '../Board'
import PlayerPieces from '../PlayerPieces'
import WinnerMessage from '../WinnerMessage'

const auxArray = [...TOTAL_PIECES];

const Game = ({ players, partida }) => {
  // States
  const [boardState, setBoardState] = useState([])
  const [mazo, setMazo] = useState(auxArray)
  const [pieces1, setPieces1] = useState([])
  const [pieces2, setPieces2] = useState([])
  const [turn, setTurn] = useState('P1')
  const [gameStatus, setGameStatus] = useState({ gameOver: false, winner: null })

  useEffect(() => {
    initGame()
  }, [])

  const initGame = async () => {
    if (!partida) return
    const data = await game.initializeGame(partida)
    console.log(data)
    setPieces1(data.player1)
    setPieces2(data.player2)
  }

  const resetBoard = () => {
    setBoardState([])
    shuffleArray(auxArray)
    setMazo(auxArray)
    const nuevasPiezas1 = auxArray.slice(0,8)
    const nuevasPiezas2 = auxArray.slice(8,16)
    const newMazo = auxArray.filter( p =>
      !nuevasPiezas1.some(e => e.id === p.id) && !nuevasPiezas2.some(e => e.id === p.id)
    )
    setPieces1(nuevasPiezas1)
    setPieces2(nuevasPiezas2)
    setMazo(newMazo)
  }

  const addPieceP1 = async (p) => {
    if (turn !== 'P1') return alert('NO es tu turno')
    const data = await game.agregarPieza(p, partida, 'player1')
    // console.log(data)
    setPieces1(data.playerPieces)
    setBoardState(data.board)
    if (!data.gameInProgress) {
      setGameStatus({ gameOver: true, winner: players[0] })
    }
    setTurn('P2')
  }

  const addPieceP2 = async (p) => {
    if (turn !== 'P2') return alert('NO es tu turno')
    const data = await game.agregarPieza(p, partida, 'player2')
    // console.log(data)
    setPieces2(data.playerPieces)
    setBoardState(data.board)
    if (!data.gameInProgress) {
      setGameStatus({ gameOver: true, winner: players[1] })
    }
    setTurn('P1')
  }
  
  return(
    <div className='game-container'>
      <div className='player1'>
        <p className={ turn === 'P1' ? 'name playing' : 'name notplaying'}>{ players[0] }</p>
        <p>Piezas restantes: { pieces1.length }</p>
        <PlayerPieces pieces={pieces1} addPiece={addPieceP1} isPlayerTurn={turn === 'P1'} />
      </div>

      <div>
        <h1>Find Neighbor</h1>
        <p>Partida: { partida }</p>
        <Board
          rows={10} columns={10}
          boardState={boardState}
        />
        <p>Piezas restantes: { mazo.length } </p>
        <button type='button' onClick={resetBoard} className='reset-button'>RESET</button>
      </div>

      <div className='player2'>
        <p className={ turn === 'P2' ? 'name playing' : 'name notplaying'}>{ players[1] }</p>
        <p>Piezas restantes: { pieces2.length }</p>
        <PlayerPieces pieces={pieces2} addPiece={addPieceP2} isPlayerTurn={turn === 'P2'} />
      </div>

      <WinnerMessage gameStatus={gameStatus}  />
    </div>
  )
}

export default Game