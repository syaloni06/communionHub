import { FaCalendarAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const EventCard = ({ event }) => {
  return (
    <>
      <div className="bg-white dark:bg-black dark:text-white shadow-md rounded-lg p-4 border-2 border-amber-500 hover:scale-105 w-72 lg:w-96">
        <h2 className="text-2xl font-bold italic">{event.title}</h2>
        <div className="md:flex gap-8">
          <p className="text-gray-600 dark:text-white flex font-bold mt-2 text-base lg:text-xl gap-2">
            <FaCalendarAlt className="self-center text-blue-600 text-lg lg:text-2xl" />
            {event.date}
          </p>
          <p className="text-gray-700 dark:text-white flex font-bold mt-2 text-base lg:text-xl gap-2">
            <FaMapLocationDot className="text-red-600 self-center text-lg lg:text-2xl" />{" "}
            {event.location}
          </p>
        </div>
        <p className="text-gray-700 dark:text-white mt-2 text-sm lg:text-base italic">{event.description}</p>
        <span className="text-sm bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold px-2 py-1 rounded mt-2 inline-block">
          {event.category}
        </span>
      </div>
    </>
  );
};

export default EventCard;
