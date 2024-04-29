import { useSelector } from 'react-redux'

import GameSIO from '../../common/GameSIO'

const Game = ({ socket }) => {
  const game = useSelector(state => state.game)
  const me = useSelector(state => state.me)

  const addPiece = (p) => {
    if (me.player_role !== game.turn) return
    const roles = ['player1', 'player2']
    if (roles.includes(me.player_role)) {
      socket.emit('add-piece', p, me.player_role, game)
    }
  }

  const finalizar = () => {
    socket.emit('finalizar', game.partida)
  }

  return(
    <GameSIO 
      game={game}
      me={me}
      addPiece={addPiece}
      finalizar={finalizar}
    />
  )
}

export default Game