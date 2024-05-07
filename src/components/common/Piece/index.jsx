import './index.css';
import { useDraggable } from '@dnd-kit/core';

const supportedTypes = ['R1', 'R2', 'L1', 'L2', 'L3', 'L4', 'SP'];

const Piece = ({ positions, type, shadowPiece, id, pieceComplete }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
    data: {
      ...pieceComplete,
    }
  });
  if(!supportedTypes.includes(type)) return <p>Tipo no encontrado</p>;

  const pieceClass = shadowPiece ? 'shadow' : 'normal';

  if (isDragging) return(
    <div className='piece'>
      <div className='piece-shape'></div>
    </div>
  );

  return(
    <div className={`piece ${pieceClass}`}
      ref={setNodeRef}
      role='div'
      {...listeners}
      {...attributes}
    >
      <div className={`piece-shape ${type}`}>
        <button className={`piece-square ${type}`}>{ positions[0] }</button>
        <button className={`piece-square ${type}`}>{ positions[1] }</button>
        <button className={`piece-square ${type}`}>{ positions[2] }</button>
        { positions[3] &&
          <button className={`piece-square ${type}`}>{ positions[3] }</button>
        }
      </div>
    </div>
  );
};

export default Piece;