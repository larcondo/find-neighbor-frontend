import Square from '../Square';

const TopHeader = ({ length }) => {
  if(!length) return null;
  const elements = [...Array(length).keys()];

  return(
    <section className='board-row'>
      <Square value={0} isActive={false} visible={false} />
      { elements.map( e =>
        <Square key={e} value={e} isActive={false} isHeader />
      )}
    </section>
  );
};

export default TopHeader;