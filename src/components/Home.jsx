import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        Connecting People Across Faiths & Interests
      </h1>
      <p className="text-lg text-gray-600 mt-4 text-center max-w-2xl">
        Connecting people of all faiths through events and community support.
      </p>
      <Link to="/events">
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700">
          Explore Events
        </button>
      </Link>
    </div>
  );
};

export default Home;
