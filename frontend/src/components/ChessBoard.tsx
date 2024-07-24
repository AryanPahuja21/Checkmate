import { Color, PieceSymbol, Square } from "chess.js";

const ChessBoard = ({
  board,
}: {
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];
}) => {
  return (
    <div className="">
      {board.map((row, i) => (
        <div key={i} className="flex justify-center">
          {row.map((square, j) => (
            <div
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
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChessBoard;
