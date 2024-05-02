import './index.css';

import TopHeader from './TopHeader';
import BoardRow from './BoardRow';

const Board = ({ rows, columns, boardState }) => {

  if (!rows || !columns) return null;

  const rowArray = [...Array(rows).keys()];

  return(
    <div className='board'>
      <TopHeader length={10} />
      { rowArray.map( r => <BoardRow length={columns} key={r} nRow={r} boardArray={boardState} />)}
    </div>
  );
};

export default Board;