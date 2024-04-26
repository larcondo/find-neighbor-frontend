import './App.css'
import { useEffect, useState } from 'react'
import { socket } from './socket'
import NewGameForm from './components/NewGameForm'
import JoinGameForm from './components/JoinGameForm'
import GameSIO from './components/GameSIO'

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected)

  const [pageState, setPageState] = useState('home')
  const [playerName, setPlayerName] = useState('')
  const [me, setMe] = useState(null)
  const [idPartida, setIdPartida] = useState('')
  const [partida, setPartida] = useState('')
  const [gameStatus, setGameStatus] = useState(null)

  useEffect(() => {
    const onConnect = () => setIsConnected(true)
    const onDisconnect = () => setIsConnected(false)

    const onNuevaPartida = (value) => {
      console.log(value)
      setPartida(value.gameId)
      setPageState('waitP2')
    }

    const onUnirsePartida = (value) => {
      setGameStatus(value)
      
      setPageState('partida-iniciada')
    }

    const onAddPiece = (value) => {
      setGameStatus(value)
    }

    const onFinalizar = (value) => {
      console.log(value)
      setPageState('home')
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('nueva-partida', onNuevaPartida)
    socket.on('unirse-partida', onUnirsePartida)
    socket.on('add-piece', onAddPiece)
    socket.on('finalizar', onFinalizar)
    
    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('nueva-partida', onNuevaPartida)
      socket.off('unirse-partida', onUnirsePartida)
      socket.off('add-piece', onAddPiece)
      socket.off('finalizar', onFinalizar)
    }
  }, [])

  useEffect(() => {
    if (pageState === 'partida-iniciada' && gameStatus) {
      const meData = gameStatus.player1.player_name === playerName
        ? gameStatus.player1
        : gameStatus.player2.player_name === playerName
          ? gameStatus.player2 : null
    
      setMe(meData)
    }
    
  }, [pageState])

  const onPlayerNameChange = e => setPlayerName(e.target.value)
  // const onChangeNameP2 = e => setNameP2(e.target.value)
  const onGameIdChange = e => setIdPartida(e.target.value)

  const onSubmitNewGame = async e => {
    e.preventDefault()
    socket.emit('nueva-partida', playerName)
  }
  
  const onSubmitJoinGame = async e => {
    e.preventDefault()
    socket.emit('unirse-partida', playerName, idPartida)
  }

  const nuevaPartida = () => {
    socket.connect()
    setPageState('newGame')
  }
  
  const unirse = () => {
    socket.connect()
    setPageState('joinGame')
  }

  const addPiece = (p) => {
    if (me.player_role !== gameStatus.turn) return
    const roles = ['player1', 'player2']
    if (roles.includes(me.player_role)) {
      socket.emit('add-piece', p, me.player_role, gameStatus)
    }
  }

  const finalizar = () => {
    socket.emit('finalizar', gameStatus.partida)
  }

  return (
    <main>
      { pageState === 'home' &&
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1em' }}>
          <button style={{ padding: '1em 2em' }} onClick={unirse}>Unirse a partida</button>
          <button style={{ padding: '1em 2em' }} onClick={nuevaPartida}>Nueva partida</button>
        </div>
      }
      
      { pageState === 'newGame' &&
        <NewGameForm isConnected={isConnected}
          value={playerName}
          onChange={onPlayerNameChange}
          onSubmit={onSubmitNewGame}
        />
      }

      { pageState === 'joinGame' &&
        <JoinGameForm 
          isConnected={isConnected}
          value={playerName}
          onChange={onPlayerNameChange}
          gameId={idPartida}
          onChangeGameId={onGameIdChange}
          onSubmit={onSubmitJoinGame}
        />
      }

      { pageState === 'waitP2' &&
        <div style={{ placeContent: 'center' }}>
          <p>Esperando al Player2</p>
          <p>ID de partida: <br />{ partida }</p>
        </div>
      }

      {/* { pageState === 'game' && <Game players={[ nameP1, nameP2 ]} partida={partida} /> } */}
      { pageState === 'partida-iniciada' &&
        <GameSIO game={gameStatus} playerName={playerName} addPiece={addPiece} finalizar={finalizar} />
        // <GameSIO game={ejemplo} playerName={'Pedro'} addPiece={addPiece} />
      }
      
    </main>
  )
}

export default App
