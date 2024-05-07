import './index.css';

import { DndContext, DragOverlay } from '@dnd-kit/core';

import Board from '../Board';
import PlayerPieces from '../PlayerPieces';
import RivalPieces from './RivalPieces';
import WinnerMessage from '../WinnerMessage';
import Button from '../Button';
import NameOfPlayer from './NameOfPlayer';
import IconPlayer from './IconPlayer';
import { useState } from 'react';
import DraggablePiece from '../Piece/DraggablePiece';

const GameSIO = ({ game, me, addPiece, finalizar }) => {
  const [activePiece, setActivePiece] = useState(null);

  if (!game) return null;
  if (!game.player1 || !game.player2) return null;

  const player = game.player1.player_name === me.player_name ? game.player1 : game.player2;
  const rival = game.player1.player_name === me.player_name ? game.player2 : game.player1;
  const turn = game.turn === player.player_role;
  const board = game.board;

  const gameSt = {
    gameOver: player.pieces.length < 1 || rival.pieces.length < 1,
    winner: player.pieces.length < 1 ? player.player_name : rival.pieces.length < 1 ? rival.player_name : null
  };

  const handleDragStart = (event) => {
    if (event.active.data.current) {
      setActivePiece(event.active.data.current);
    }
  };

  const handleDragEnd = (event) => {
    const { over, active } = event;
    if (over && over.id === 'droppable') {
      addPiece(active.data.current);
    }
  };

  return(
    <div className='game-container'>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <h2 className='title'>Find Neighbor</h2>
        <Board boardState={board} />

        <div className='player-container'>
          <div className='player-data'>
            <IconPlayer on={turn} />
            <NameOfPlayer
              name={player.player_name}
              pieceQty={player.pieces.length}
              turn={turn}
            />
          </div>
          <PlayerPieces pieces={player.pieces} isPlayerTurn={turn} />
        </div>

        <div className='rival-container'>
          <div className='rival-data'>
            <IconPlayer on={!turn} />
            <NameOfPlayer
              name={rival.player_name}
              pieceQty={rival.pieces.length}
              turn={!turn}
            />
          </div>
          <RivalPieces quantity={rival.pieces.length} />
        </div>

        <div className='game-stats-container'>
          <Button onClick={finalizar}>Finalizar</Button>
          <span>Partida: { game.partida }</span>
        </div>

        <DragOverlay dropAnimation={{ duration: 20, easing: 'ease' }}>
          {
            activePiece
              ? <DraggablePiece
                positions={activePiece.valores}
                type={activePiece.tipo}
              />
              : null
          }
        </DragOverlay>

        <WinnerMessage gameStatus={gameSt} action={finalizar} />
      </DndContext>
    </div>
  );
};

export default GameSIO;