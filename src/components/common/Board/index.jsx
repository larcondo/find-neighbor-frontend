import './index.css';

import HeaderTop from './HeaderTop';
import HeaderLeft from './HeaderLeft';
import DroppableBoard from './DroppableBoard';

const Board = ({ boardState }) => {

  if (!boardState) return null;

  return(
    <div className='board'>
      <HeaderTop />
      <HeaderLeft />
      <DroppableBoard boardArray={boardState} />
    </div>
  );
};

export default Board;