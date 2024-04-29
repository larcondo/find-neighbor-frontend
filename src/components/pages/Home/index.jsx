import './index.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return(
    <div className='home-container'>
      <h1 className='title'>Home</h1>
      <div className='buttons'>
        <button type='button' onClick={() => navigate('/newgame')}>
          Nueva partida
        </button>
        <button type='button' onClick={() => navigate('/join')}>
          Unirse a partida
        </button>
      </div>
    </div>
  )
}

export default Home