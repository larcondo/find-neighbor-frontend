const NameOfPlayer = ({ name, pieceQty, turn }) => {
  if (!name || !pieceQty) return null;
  return(
    <div className={`name-of-player ${turn ? 'playing' : 'waiting'}`}>
      <span className='name notplaying'>{ name }</span>
      <span className='piece-left'>{ pieceQty } piezas</span>
    </div>
  );
};

export default NameOfPlayer;