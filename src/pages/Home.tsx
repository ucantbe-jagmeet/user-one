import { FC } from "react";
import Navbar from "../component/Navbar";
import HomeModals from "../component/HomeModals";

const Home: FC = () => {
  return (
    <div className="h-full mb-24">
      <Navbar />
      <hr />
      <div className="h-full  flex items-center  flex-col ">
        <div className=" text-center mt-28 md:mt-24 lg:mt-14">
          <h1 className="text-4xl font-semibold tracking-wide">
            Hi, User!<span className="text-4xl">✋</span>
          </h1>
          <h1 className="text-2xl mt-5">
            Let's help you to land on dream career
          </h1>
        </div>
        <div className=" mt-32 md:mt-28 lg:mt-20 ">
          <h1
            className=" text-center text-3xl font-semibold tracking-wider  
          "
          >
            Trending On UserOne<span className="text-2xl">🔥</span>
          </h1>
          <div className=" h-fit w-fit ">
            <HomeModals />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
