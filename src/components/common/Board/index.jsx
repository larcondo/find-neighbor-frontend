import './index.css';

import HeaderTop from './HeaderTop';
import HeaderLeft from './HeaderLeft';
import DroppableBoard from './DroppableBoard';

const pSize = 25;
const bGap = 4;

const Board = ({ boardState }) => {

  if (!boardState) return null;

  const boardStyle = {
    width: `${11 * pSize + 10 * bGap}px`,
  };

  return(
    <div className='board' style={boardStyle}>
      <HeaderTop pSize={pSize} bGap={bGap} />
      <HeaderLeft pSize={pSize} bGap={bGap} />
      <DroppableBoard
        boardArray={boardState}
        pSize={pSize}
        bGap={bGap}
      />
    </div>
  );
};

export default Board;