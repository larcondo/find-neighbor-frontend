import { MdVideogameAsset, MdVideogameAssetOff } from 'react-icons/md';

const IconPlayer = ({ on }) => {
  if(on === undefined || on === null) return null;

  return on
    ? <span className='name playing'><MdVideogameAsset size={'2em'} /></span>
    : <span className='name notplaying'><MdVideogameAssetOff size={'2em'} /></span>;

};

export default IconPlayer;