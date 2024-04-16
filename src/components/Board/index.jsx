import './index.css'

import Square from '../Square'

// const P1Pieces = [
//   [21,22,23],
//   [7,17,18],
//   [55,65,75],
//   [78,79,89],
// ]

const Board = ({ rows, columns, boardState }) => {

  if (!rows || !columns) return null

  const rowArray = [...Array(rows).keys()]

  return(
    <>
      <div className='board'>
        { rowArray.map( r => <BoardRow length={columns} key={r} nRow={r} boardArray={boardState} />)}
      </div>
    </>
  )
}

const BoardRow = ({ length, nRow, boardArray }) => {
  if (!length) return null

  const elements = [...Array(length).keys()]
  
  return(
    <section className='board-row'>
      { elements.map( e => 
          <Square
            key={e}
            value={(nRow*10 + e)*1}
            isActive={boardArray.includes(nRow*10 + e)}
          />
        )
      }
    </section>
  )
}

export default Board