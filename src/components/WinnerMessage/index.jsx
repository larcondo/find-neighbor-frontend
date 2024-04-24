import './index.css'

const WinnerMessage = ({ gameStatus }) => {
  if (!gameStatus) return null

  if (!gameStatus.gameOver) return null

  return(
    <div className='winner-message'>
      <div>
        <p>¡FIN del JUEGO!! 🎉</p>
        <p>Felicitaciones { gameStatus.winner.toUpperCase() }</p>
        <p>¡Has ganado!🏆</p>
      </div>
    </div>
  )
}

export default WinnerMessage