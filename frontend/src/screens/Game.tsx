import { useEffect } from "react";
import Button from "../components/Button";
import ChessBoard from "../components/ChessBoard";
import { useSocket } from "../hooks/useSocket";

export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";

const Game = () => {
  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log(message);
      switch (message.type) {
        case INIT_GAME:
          console.log("Game initialized");
          break;
        case MOVE:
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
    <div className="flex justify-center">
      <main className="flex justify-around w-full">
        <section className="w-full text-center bg-yellow-100">
          <ChessBoard />
        </section>
        <aside className="w-full text-center bg-blue-100">
          <Button
            onClick={() => {
              socket.send(JSON.stringify({ type: INIT_GAME }));
            }}
          >
            Play
          </Button>
        </aside>
      </main>
    </div>
  );
};

export default Game;
