import { useSelector } from 'react-redux'
import NewGameForm from '../../components/NewGameForm'
import { useEffect } from 'react'

const NewGame = ({ socket }) => {
  const isConnected = useSelector(state => state.connection.isConnected)

  useEffect(() => {
    socket.connect()
  }, [])

  return(
    <div>
      <NewGameForm isConnected={isConnected} socket={socket} />
    </div>
  )
}

export default NewGame