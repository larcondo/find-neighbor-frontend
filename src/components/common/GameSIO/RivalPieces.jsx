import './RivalPieces.css';

const RivalPieces = ({ quantity, pieceWidth = 30 }) => {
  if (!quantity) return null;

  // Max len = 10
  const len = quantity > 10 ? 10 : quantity;
  const arreglo = new Array(len).fill(1);

  const isEven = len % 2 === 0;

  const angles = [0, 0, 20, 20, 20, 20, 17, 15, 15, 15, 12, 12];

  const angle = angles[len];
  const half = isEven ? len/2 - 0.5 : Math.floor(len/2);

  return(
    <div className='rival-pieces'>
      { arreglo.map( (p, index) =>
        <div key={index}
          className='rival-piece'
          style={{
            width: `${pieceWidth}px`,
            transform: `rotate(${(index-half)*angle}deg)`,
            left: `${(half-index)*pieceWidth}px`,
            position: 'relative',
          }}
        ></div>
      )}
    </div>
  );
};

export default RivalPieces;