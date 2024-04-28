import { createBrowserRouter } from 'react-router-dom'

import { socket } from './socket';

import App from './App';
import Home from './routes/Home'
import NewGame from './routes/NewGame'
import Join from './routes/Join'
import WaitingRival from './routes/WaitingRival'
import Game from './routes/Game';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'newgame',
        element: <NewGame socket={socket} />,
      },
      {
        path: 'join',
        element: <Join socket={socket} />,
      },
      {
        path: 'wait',
        element: <WaitingRival />,
      },
      {
        path: 'game',
        element: <Game socket={socket} />,
      },
    ]
  },
]);

export default router