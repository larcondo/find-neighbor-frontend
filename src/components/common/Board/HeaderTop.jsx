import Square from '../Square';

const HeaderTop = ({ pSize = 25, bGap = 4 }) => {
  const values = [...Array(10).keys()];

  const headerStyle = {
    gap: `${bGap}px`,
    marginBottom: `${bGap}px`,
  };

  return(
    <div className='header-top' style={headerStyle}>
      {
        values.map(e =>
          <Square key={e} width={pSize} isHeader value={e} />
        )
      }
    </div>
  );
};

export default HeaderTop;