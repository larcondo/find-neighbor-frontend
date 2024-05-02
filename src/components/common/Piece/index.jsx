import './index.css';

const supportedTypes = ['R1', 'R2', 'L1', 'L2', 'L3', 'L4', 'SP'];

const Piece = ({ positions, type, onClick, shadowPiece }) => {
  if(!supportedTypes.includes(type)) return <p>Tipo no encontrado</p>;

  const pieceClass = shadowPiece ? 'shadow' : 'normal';

  return(
    <div className={`piece ${pieceClass}`} onClick={onClick}>

      <div className={`piece-shape ${type}`}>
        <button className={`piece-square ${type}`}>{ positions[0] }</button>
        <button className={`piece-square ${type}`}>{ positions[1] }</button>
        <button className={`piece-square ${type}`}>{ positions[2] }</button>
        { positions[3] &&
          <button className={`piece-square ${type}`}>{ positions[3] }</button>
        }
      </div>

      {/* <button type='button' onClick={onClick}>
        Agregar
      </button> */}
    </div>
  );
};

export default Piece;