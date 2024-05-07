import Square from '../Square';

const HeaderLeft = ({ pSize = 25, bGap = 4 }) => {
  const values = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];

  const headerStyle = {
    gap: `${bGap}px`,
    marginRight: `${bGap}px`,
  };

  return(
    <div className='header-left' style={headerStyle}>
      {
        values.map(e =>
          <Square key={e} width={pSize} isHeader value={e} />
        )
      }
    </div>
  );
};

export default HeaderLeft;