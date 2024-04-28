import { useSelector } from 'react-redux'

const WaitingRival = () => {
  const partida = useSelector(state => state.game.partida)

  return(
    <div style={{ placeContent: 'center' }}>
      <p>Esperando al Player2</p>
      <p>ID de partida: <br />{ partida }</p>
    </div>
  )
}

export default WaitingRival