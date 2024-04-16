import './App.css'
import { useEffect, useState } from 'react'
import { shuffleArray } from './utils/functions'
import { TOTAL_PIECES } from './utils/constants'

import Board from './components/Board'
import PlayerPieces from './components/PlayerPieces'

const auxArray = [...TOTAL_PIECES];
// shuffleArray(auxArray);

function App() {
  const [boardState, setBoardState] = useState([])
  const [mazo, setMazo] = useState(auxArray)
  const [pieces, setPieces] = useState([])
  const [pieces2, setPieces2] = useState([])
  const [turn, setTurn] = useState('P1')

  useEffect(() => {
    shuffleArray(auxArray)
    const nuevasPiezas = auxArray.slice(0,8)
    setPieces(nuevasPiezas)
    const nuevasPiezas2 = auxArray.slice(8,16)
    setPieces2(nuevasPiezas2)
    setMazo(mazo.filter( p =>
      !nuevasPiezas.some(e => e.id === p.id) && !nuevasPiezas2.some(e => e.id === p.id)
    ))
  }, [])

  const resetBoard = () => {
    setBoardState([])
    shuffleArray(auxArray)
    setMazo(auxArray)
    const nuevasPiezas1 = auxArray.slice(0,8)
    const nuevasPiezas2 = auxArray.slice(8,16)
    const newMazo = auxArray.filter( p =>
      !nuevasPiezas1.some(e => e.id === p.id) && !nuevasPiezas2.some(e => e.id === p.id)
    )
    setPieces(nuevasPiezas1)
    setPieces2(nuevasPiezas2)
    setMazo(newMazo)
  }

  const canAdd = (p) => {
    if (boardState.length < 1) return true
    const posibles = []
    p.pos.forEach(p => {
      if(p !== 0 && p !== 90) posibles.push(p-1)
      if(p !== 9 && p !== 99) posibles.push(p+1)
      if(p !== 90 && p !== 99) posibles.push(p+10)
      if(p !== 0 && p !== 9) posibles.push(p-10)
    })

    // console.log(posibles.sort((a, b) => a-b))
    return posibles.some( e => boardState.includes(e))
  }

  const addPieceP1 = (p) => {
    if (turn !== 'P1') return alert('NO es tu turno')
    if (canAdd(p)) {
      setBoardState([...boardState, ...p.pos])
      setPieces(pieces.filter(e => e.id !== p.id))
    } else {
      const mazoAfter = mazo 
      const newPiece = mazoAfter.shift()
      setPieces(pieces.concat(newPiece))
      setMazo(mazoAfter)
    }
    setTurn('P2')
  }

  const addPieceP2 = (p) => {
    if (turn !== 'P2') return alert('NO es tu turno')
    if (canAdd(p)) {
      setBoardState([...boardState, ...p.pos])
      setPieces2(pieces2.filter(e => e.id !== p.id))
    } else {
      const mazoAfter = mazo 
      const newPiece = mazoAfter.shift()
      setPieces2(pieces2.concat(newPiece))
      setMazo(mazoAfter)
    }
    setTurn('P1')
  }

  return (
    <div style={{ display: 'flex' }}>

    <div className='player1'>
      <p style={{ backgroundColor: turn === 'P1' ? 'green' : 'initial' }}>Player1</p>
      <p>{ pieces.length }</p>
      <PlayerPieces pieces={pieces} addPiece={addPieceP1} isPlayerTurn={turn === 'P1'} />
    </div>

    <div>
      <h1>Find Neighbor</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>Piezas restantes: { mazo.length } </p>
      <Board
        rows={10} columns={10}
        boardState={boardState}
      />
      <button type='button' onClick={resetBoard}>RESET</button>
    </div>

    <div className='player2'>
      <p style={{ backgroundColor: turn === 'P2' ? 'green' : 'initial' }}>Player2</p>
      <p>{ pieces2.length }</p>
      <PlayerPieces pieces={pieces2} addPiece={addPieceP2} isPlayerTurn={turn === 'P2'} />
    </div>
    </div>
  )
}

export default App
