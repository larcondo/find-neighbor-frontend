import Square from '../Square';

const HeaderLeft = () => {
  const values = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];

  return(
    <div className='header-left'>
      {
        values.map(e =>
          <Square key={e} isHeader value={e} />
        )
      }
    </div>
  );
};

export default HeaderLeft;