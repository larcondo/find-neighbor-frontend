import Square from '../Square';

const BoardRow = ({ length, nRow, boardArray }) => {
  if (!length) return null;

  const elements = [...Array(length).keys()];

  return(
    <section className='board-row'>
      { true && <Square value={nRow*10} isActive={false} isHeader={true} />}
      { elements.map( e =>
        <Square
          key={e}
          value={(nRow*10 + e)*1}
          isActive={boardArray.includes(nRow*10 + e)}
        />
      )
      }
    </section>
  );
};

export default BoardRow;