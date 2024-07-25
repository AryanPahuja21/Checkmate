import { Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";
import { MOVE } from "../screens/Game";

const ChessBoard = ({
  chess,
  board,
  setBoard,
  socket,
}: {
  chess: any;
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];
  setBoard: (
    board: ({
      square: Square;
      type: PieceSymbol;
      color: Color;
    } | null)[][]
  ) => void;
  socket: WebSocket;
}) => {
  const [from, setFrom] = useState<Square | null>(null);

  return (
    <div className="">
      {board.map((row, i) => (
        <div key={i} className="flex justify-center">
          {row.map((square, j) => {
            const squareRepresentation = (String.fromCharCode(97 + j) +
              (8 - i)) as Square;

            return (
              <div
                onClick={() => {
                  if (!from) {
                    setFrom(squareRepresentation);
                  } else {
                    socket.send(
                      JSON.stringify({
                        type: MOVE,
                        payload: { from, to: squareRepresentation },
                      })
                    );
                    setFrom(null);
                    chess.move({
                      from,
                      to: squareRepresentation,
                    });
                    setBoard(chess.board());
                  }
                }}
                key={j}
                className={`w-16 h-16 flex justify-center items-center ${
                  (i + j) % 2 === 0 ? "bg-yellow-900" : "bg-yellow-200"
                }`}
              >
                {square && (
                  <span
                    className={`text-2xl text-${
                      square.color === "w" ? "white" : "black"
                    }`}
                  >
                    {square.type}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ChessBoard;
