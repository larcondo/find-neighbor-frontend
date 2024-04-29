import './index.css'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import NewGameForm from '../../common/NewGameForm'

const NewGame = ({ socket }) => {
  const isConnected = useSelector(state => state.connection.isConnected)

  useEffect(() => {
    socket.connect()
  }, [])

  return(
    <div className='new-game-container'>
      <h1 className='title'>New Game</h1>
      <NewGameForm isConnected={isConnected} socket={socket} />
    </div>
  )
}

export default NewGame