import './index.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return(
    <div className='home-container'>
      <h1>Home</h1>
      <button type='button' onClick={() => navigate('/newgame')}>
        Nueva partida
      </button>
      <button type='button' onClick={() => navigate('/join')}>
        Unirse a partida
      </button>
    </div>
  )
}

export default Home