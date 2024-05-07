import './index.css';

const Square = ({ value = 0, isActive = false, isHeader = false, width = 25 }) => {
  const squareClass = 'square' + (isActive ? ' active' : '');

  const style = {
    width: `${width}px`,
  };

  return(
    isHeader
      ? <button type='button' className='square header' style={style}>
        { value }
      </button>
      : <button type='button' className={squareClass} style={style}>
        {value}
      </button>
  );
};

export default Square;