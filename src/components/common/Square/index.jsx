import './index.css';

const Square = ({ value = 0, isActive = false, isHeader = false }) => {
  const squareClass = 'square' + (isActive ? ' active' : '');

  return(
    isHeader
      ? <button type='button' className='square header'>
        { value }
      </button>
      : <button type='button' className={squareClass}>
        {value}
      </button>
  );
};

export default Square;