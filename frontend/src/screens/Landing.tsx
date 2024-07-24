import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="h-screen bg-black/90 flex flex-col justify-between items-center select-none">
      <section className="flex flex-col justify-center items-center flex-grow lg:mt-24">
        <h1 className="mb-14 text-4xl sm:text-6xl text-white font-bold font-rowdies ">
          Checkmate
        </h1>
        <Link to="/game">
          <button className="p-2 sm:px-4 sm:py-3 sm:text-xl text-white font-semibold font-mono tracking-wide bg-gradient-to-r from-green-600 to-emerald-800 rounded-lg ">
            Play Online
          </button>
        </Link>
      </section>
      <div className="w-full flex justify-end items-end lg:justify-between">
        <img
          src="/src/assets/HeroImage.png"
          alt="Checkmate"
          className="max-h-[350px] object-contain scale-x-[-1] hidden lg:block"
        />
        <img
          src="/src/assets/HeroImage.png"
          alt="Checkmate"
          className="max-h-[350px] object-contain"
        />
      </div>
    </div>
  );
};

export default Landing;
