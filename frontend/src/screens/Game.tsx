import Button from "../components/Button";
import ChessBoard from "../components/ChessBoard";

const Game = () => {
  return (
    <div className="flex justify-center">
      <main className="flex justify-around w-full">
        <section className="w-full text-center bg-yellow-100">
          <ChessBoard />
        </section>
        <aside className="w-full text-center bg-blue-100">
          <Button onClick={() => {}}>Play</Button>
        </aside>
      </main>
    </div>
  );
};

export default Game;
