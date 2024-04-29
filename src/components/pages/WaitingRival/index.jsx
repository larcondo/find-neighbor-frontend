import './index.css'
import { useSelector } from 'react-redux'

const WaitingRival = () => {
  const partida = useSelector(state => state.game.partida)

  return(
    <div className='waiting-rival-container'>
      <h1>Waiting rival</h1>
      <p>Esperando al Player2</p>
      <p>ID de partida:</p>
      <h2>{ partida }</h2>
    </div>
  )
}

export default WaitingRival