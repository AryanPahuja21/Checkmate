import { useEffect, useState } from "react";
import Button from "../components/Button";
import ChessBoard from "../components/ChessBoard";
import { useSocket } from "../hooks/useSocket";
import { Chess } from "chess.js";

export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";

const Game = () => {
  const socket = useSocket();
  const [chess, setChess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log(message);
      switch (message.type) {
        case INIT_GAME:
          setChess(new Chess());
          console.log("Game initialized");
          break;
        case MOVE:
          const move = message.payload;
          chess.move(move);
          setBoard(chess.board());
          console.log("Move made");
          break;
        case GAME_OVER:
          console.log("Game over");
          break;
      }
    };

    return () => {
      socket.onmessage = null;
    };
  }, [socket]);

  if (!socket) return <div>Connecting...</div>;

  return (
    <div className="h-screen flex justify-center bg-black/90">
      <main className="sm:flex sm:flex-col md:flex-row justify-around items-center w-full  max-w-fit">
        <section className="w-full text-center">
          <ChessBoard
            socket={socket}
            board={board}
            setBoard={setBoard}
            chess={chess}
          />
        </section>
        <aside className="mt-14 sm:mt-0 lg:w-96 lg:h-96 flex justify-center items-center">
          <Button
            onClick={() => {
              socket.send(JSON.stringify({ type: INIT_GAME }));
            }}
          >
            Start Game
          </Button>
        </aside>
      </main>
    </div>
  );
};

export default Game;
