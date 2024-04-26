const NewGameForm = ({ isConnected, value, onChange, onSubmit }) => {
  return(
    <form className='formPlayer' onSubmit={onSubmit}>
      <p>{ isConnected ? 'Conectado' : 'NO Conectado' }</p>

      <label htmlFor='p1name'>Tu nombre (player1):</label>
      <input type='text' name='p1name' id='p1name' value={value} onChange={onChange} />
      
      <button type='submit'>Aceptar</button>

    </form>
  )
}

export default NewGameForm