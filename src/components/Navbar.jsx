import { Link } from "react-router-dom";
import { SiBamboo } from "react-icons/si";
import { SiBitly } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { MdEventRepeat } from "react-icons/md";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import DarkModeToggle from "../utils/DarkModeToggle";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white dark:bg-black fixed top-0 w-full shadow-md z-50 py-3 px-6 flex justify-between items-center">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="text-2xl lg:text-3xl font-bold flex italic w-1/3">
            <SiBamboo className="text-amber-400 text-2xl lg:text-4xl self-center" />

            <p className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent hidden md:flex">
              ommunionHu
            </p>
            <SiBitly className="text-orange-500 text-2xl lg:text-4xl self-center" />
          </Link>
          <div className="space-x-4 flex font-bold text-lg dark:text-white">
            <Link to="/" className="hover:underline flex gap-2">
              <FaHome className="self-center text-xl" />
              <p className="hidden md:block">Home</p>
            </Link>
            <Link to="/events" className="hover:underline flex gap-2">
              <MdEventRepeat className="self-center text-xl" />
              <p className="hidden md:block">Events</p>
            </Link>
            <div className="hover:underline flex gap-2">
              <BiSolidMessageSquareDetail className="self-center text-xl" />
              <p className="hidden md:block">About</p>
            </div>
          </div>
        </div>
        <DarkModeToggle />
      </nav>
    </>
  );
};

export default Navbar;
