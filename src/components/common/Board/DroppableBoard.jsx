import { useDroppable } from '@dnd-kit/core';

import Square from '../Square';

const DroppableBoard = ({ id = 'droppable', boardArray, pSize = 25, bGap = 4 }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const values = [...Array(100).keys()];

  const boardStyle = {
    boxShadow: isOver ? '0 0 20px 15px rgba(50, 205, 50, 0.1)' : 'none',
    width: `${pSize*10 + 9*bGap}px`,
    gap: `${bGap}px`,
  };

  return(
    <div className='droppable-board' style={boardStyle} ref={setNodeRef}>
      { values.map(e =>
        <Square key={e} width={pSize} isActive={boardArray.includes(e)} />
      )}
    </div>
  );
};

export default DroppableBoard;