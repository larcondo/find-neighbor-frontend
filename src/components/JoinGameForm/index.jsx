const JoinGameForm = ({ isConnected, value, onChange, gameId, onChangeGameId, onSubmit }) => {
  return(
    <form className='formPlayer' onSubmit={onSubmit}>
      <p>{ isConnected ? 'Conectado' : 'NO Conectado' }</p>
      <label htmlFor='p2name'>Tu nombre (player2):</label>
      <input type='text' name='p2name' id='p2name' value={value} onChange={onChange} />
      
      <label htmlFor='idPartida'>ID Partida:</label>
      <input type='text' name='idPartida' id='idPartida' value={gameId} onChange={onChangeGameId} />
      
      <button type='submit'>Aceptar</button>
    </form>
  )
}

export default JoinGameForm