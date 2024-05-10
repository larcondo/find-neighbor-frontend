import Square from '../Square';

const HeaderTop = () => {
  const values = [...Array(10).keys()];

  return(
    <div className='header-top'>
      {
        values.map(e =>
          <Square key={e} isHeader value={e} />
        )
      }
    </div>
  );
};

export default HeaderTop;