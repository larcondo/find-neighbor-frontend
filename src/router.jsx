import { createBrowserRouter } from 'react-router-dom'

import { socket } from './socket';

import App from './App';
import Home from './components/pages/Home'
import NewGame from './components/pages/NewGame'
import Join from './components/pages/Join'
import WaitingRival from './components/pages/WaitingRival'
import Game from './components/pages/Game';

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