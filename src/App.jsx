import './App.css'
import { useState } from 'react'
import loginService from './services/login'

import Game from './components/Game'

function App() {
  const [pageState, setPageState] = useState('loginP1')
  const [nameP1, setNameP1] = useState('')
  const [nameP2, setNameP2] = useState('')
  const [partida, setPartida] = useState('')
  const [players, setPlayers] = useState({ p1: null, p2: null })

  const onChangeNameP1 = e => setNameP1(e.target.value)
  const onChangeNameP2 = e => setNameP2(e.target.value)
  const onSubmitP1 = async e => {
    e.preventDefault()
    const data = await loginService.gameStart(nameP1)
    console.log(data)
    setPlayers({ ...players, p1: data })
    setPartida(data.gameId)
    // setNameP1('')
    setPageState('loginP2')
  }
  
  const onSubmitP2 = async e => {
    e.preventDefault()
    const data = await loginService.gameJoin(nameP2, partida)
    console.log(data)
    setPlayers({ ...players, p2: data.resultado })
    // setNameP2('')
    setPageState('game')
  }

  return (
    <main style={{ display: 'flex' }}>
      { pageState === 'loginP1' &&
        <form className='formPlayer' onSubmit={onSubmitP1}>
          <label htmlFor='p1name'>Tu nombre (player1):</label>
          <input type='text' name='p1name' id='p1name' value={nameP1} onChange={onChangeNameP1} />
          <button type="submit">Aceptar</button>
        </form>
      }

      { pageState === 'loginP2' &&
        <form className='formPlayer' onSubmit={onSubmitP2}>
          <p>Partida: { partida }</p>
          <label htmlFor='p2name'>Tu nombre (player2):</label>
          <input type='text' name='p2name' id='p2name' value={nameP2} onChange={onChangeNameP2} />
          <button type="submit">Aceptar</button>
        </form>
      }

      { pageState === 'game' && <Game players={[ nameP1, nameP2 ]} partida={partida} /> }
      
    </main>
  )
}

export default App
