import { useDroppable } from '@dnd-kit/core';

import Square from '../Square';

const DroppableBoard = ({ id = 'droppable', boardArray }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const values = [...Array(100).keys()];

  const boardStyle = {
    boxShadow: isOver ? '0 0 20px 15px rgba(50, 205, 50, 0.1)' : 'none',
  };

  return(
    <div className='droppable-board' style={boardStyle} ref={setNodeRef}>
      { values.map(e =>
        <Square key={e} isActive={boardArray.includes(e)} />
      )}
    </div>
  );
};

export default DroppableBoard;