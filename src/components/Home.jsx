import { Link } from "react-router-dom";
import "../index.css";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-white dark:bg-black justify-center text-center min-h-screen">
        <div className="animate-fadeIn ">
          <h1 className="mt-24 lg:mt-24 text-3xl md:text-5xl lg:text-6xl font-bold animate-slideUp delay-[200ms] ">
            <div className="text-gray-900 dark:text-white">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Communion{" "}
              </span>
              Where Faith and Community Unite!
            </div>
          </h1>
          <div className="mt-3 mx-1 md:mx-24 text-sm md:text-lg italic animate-slideUp delay-[400ms]">
            <p className="text-gray-600 dark:text-white">
              Bringing people together across beliefs and backgrounds, Communion
              is your gateway to meaningful connections, inspiring events, and a
              supportive community. Whether you're here to explore, engage, or
              uplift others, you’ll find a place where everyone belongs.
            </p>
          </div>
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 font-bold bg-clip-text text-transparent animate-slideUp delay-[600ms]">
            Join us in building bridges, celebrating diversity, and
            strengthening our shared humanity.
          </span>
        </div>
        <Link to="/events">
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform hover:shadow-lg mt-6 animate-slideUp delay-[800ms]">
            Explore Events
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
