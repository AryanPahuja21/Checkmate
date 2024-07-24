import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="h-screen bg-amber-600 bg-opacity-60 flex flex-col gap-5 justify-center items-center">
      <h1>Checkmate</h1>
      <Link to="/game">
        <button className="px-4 py-1 text-xl font-semibold bg-green-600 rounded-full">
          Start
        </button>
      </Link>
    </div>
  );
};

export default Landing;
