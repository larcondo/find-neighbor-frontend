import './index.css'

const Square = ({ value, isActive, visible = true, isHeader = false }) => {
  const squareClass = 'square' + (isActive ? ' active' : '')
  const headerClass = isHeader ? ' header' : ''

  const style = {
    visibility: `${visible ? 'visible' : 'hidden' }`,
  }

  return(
    <button type='button' className={squareClass + headerClass} style={style}>
      {value}
    </button>
  )
}

export default Square