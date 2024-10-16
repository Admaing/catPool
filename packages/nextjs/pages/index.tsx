import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-7">
        <div className="px-5">
          <h1 className="text-center mb-5">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">FROGVERSE</span>
          </h1>
          <div className="flex flex-row">
          <img alt="Game" className="ml-16" width={180} height={180} src="/assets/efrog1.png" />
          <img alt="Game" className="ml-16" width={400} height={400} src="/assets/game.png" />
          <img alt="Game" className="ml-16" width={180} height={180} src="/assets/efrog2.jpg" />
          </div>
          

          <p className="text-center text-lg">
            You own a Cat pond where you can raise and nourish Cute Tadpoles into Beautiful Frogs.
          </p>

          <div className="flex justify-center">
            <Link href="/board" passHref className="py-2 px-16 mb-1 mt-3 ml-30 bg-green-500 rounded baseline hover:bg-green-300 disabled:opacity-50">
              Play
            </Link>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Home;