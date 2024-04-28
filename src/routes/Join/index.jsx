import { useSelector } from 'react-redux'
import JoinGameForm from '../../components/JoinGameForm'
import { useEffect } from 'react'

const Join = ({ socket }) => {
  const { isConnected } = useSelector(state => state.connection)

  useEffect(() => {
    socket.connect()
  }, [])

  return(
    <div>
      <JoinGameForm socket={socket} isConnected={isConnected} />
    </div>
  )
}

export default Join