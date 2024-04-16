import './index.css'

const Square = ({ value, isActive }) => {
  const squareClass = 'square' + (isActive ? ' active' : '')

  return(
    <button type='button' className={squareClass}>
      {value}
    </button>
  )
}

export default Square