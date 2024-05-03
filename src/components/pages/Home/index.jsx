import './index.css';
import { useNavigate } from 'react-router-dom';

import Button from '../../common/Button';

const Home = () => {
  const navigate = useNavigate();

  return(
    <div className='home-container'>
      <h1 className='title'>Home</h1>
      <div className='buttons'>
        <Button onClick={() => navigate('/newgame')}>
          Nueva partida
        </Button>
        <Button onClick={() => navigate('/join')}>
          Unirse a partida
        </Button>
      </div>
    </div>
  );
};

export default Home;