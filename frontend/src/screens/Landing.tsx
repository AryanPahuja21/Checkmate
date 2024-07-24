import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-black/90 flex flex-col justify-between items-center select-none">
      <section className="flex flex-col justify-center items-center flex-grow lg:mt-24">
        <h1 className="mb-14 text-4xl sm:text-6xl text-white font-bold font-rowdies ">
          Checkmate
        </h1>
        <Button onClick={() => navigate("/game")}>Play Online</Button>
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
