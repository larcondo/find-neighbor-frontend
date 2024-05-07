import './index.css';

const supportedTypes = ['R1', 'R2', 'L1', 'L2', 'L3', 'L4', 'SP'];

const DraggablePiece = ({ positions, type }) => {

  if(!supportedTypes.includes(type)) return <p>Tipo no encontrado</p>;

  return(
    <div className='piece normal'>
      <div className={`piece-shape ${type} draggable`}>
        <button className={`piece-square ${type}`}>{ positions[0] }</button>
        <button className={`piece-square ${type}`}>{ positions[1] }</button>
        <button className={`piece-square ${type}`}>{ positions[2] }</button>
        { positions[3] &&
          <button className={`piece-square ${type}`}>{ positions[3] }</button>
        }
      </div>
    </div>
  );
};

export default DraggablePiece;