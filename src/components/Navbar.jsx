import { Link } from "react-router-dom";
import { CgComedyCentral } from "react-icons/cg";
const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Communion App</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/events" className="hover:underline">Events</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
