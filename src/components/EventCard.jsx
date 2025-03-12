import { FaCalendarAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
const EventCard = ({ event }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold">{event.title}</h2>
        <p className="text-gray-600">{event.date} - {event.location}</p>
        <p className="text-gray-700 mt-2">{event.description}</p>
        <span className="text-sm bg-gray-200 px-2 py-1 rounded mt-2 inline-block">
          {event.category}
        </span>
      </div>
    );
  };
  
  export default EventCard;
  