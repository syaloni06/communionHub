import { useState, useEffect } from "react";
import EventCard from "../components/EventCard.jsx";

const Events = () => {
  const [events, setEvents] = useState([
    {
      title: "Charity Drive",
      date: "2025-03-20",
      location: "NYC",
      description: "Helping the needy.",
      category: "Charity",
    },
    {
      title: "Faith Gathering",
      date: "2025-04-10",
      location: "LA",
      description: "Interfaith event.",
      category: "Religious",
    },
    {
      title: "Tech Expo",
      date: "2025-05-15",
      location: "San Francisco",
      description: "Showcasing the latest in tech.",
      category: "Technology",
    },
    {
      title: "Music Festival",
      date: "2025-06-05",
      location: "Chicago",
      description: "Live performances from top artists.",
      category: "Entertainment",
    },
    {
      title: "Startup Pitch Night",
      date: "2025-07-12",
      location: "Austin",
      description: "Entrepreneurs pitch to investors.",
      category: "Business",
    },
    {
      title: "Marathon for a Cause",
      date: "2025-08-22",
      location: "Boston",
      description: "Run to support cancer research.",
      category: "Sports",
    },
    {
      title: "Food Fair",
      date: "2025-09-10",
      location: "Seattle",
      description: "Explore cuisines from around the world.",
      category: "Food",
    },
    {
      title: "Book Launch",
      date: "2025-10-08",
      location: "Denver",
      description: "Meet the author and get signed copies.",
      category: "Literature",
    },
    {
      title: "Art Exhibition",
      date: "2025-11-14",
      location: "Miami",
      description: "Featuring contemporary and classic art.",
      category: "Art",
    },
    {
      title: "Holiday Market",
      date: "2025-12-05",
      location: "Austin",
      description: "Shop for gifts and holiday treats.",
      category: "Festival",
    },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    category: "",
  });

  const [filter, setFilter] = useState("");
  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(false);

  const validate = () => {
    let newErrors = {};
    const today = new Date().toISOString().split("T")[0];

    if (!newEvent.title.trim() || newEvent.title.length < 3) {
      newErrors.title = "Title must be at least 3 characters.";
    }
    if (!newEvent.date) {
      newErrors.date = "Date is required.";
    } else if (newEvent.date < today) {
      newErrors.date = "Date must be today or a future date.";
    }
    if (!newEvent.location.trim() || newEvent.location.length < 3) {
      newErrors.location = "Location must be at least 3 characters.";
    }
    if (!newEvent.description.trim() || newEvent.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters.";
    }
    if (!newEvent.category) {
      newErrors.category = "Please select a category.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddEvent = () => {
    if (!validate()) return; // Ensures the validation runs

    setEvents([...events, newEvent]);
    setNewEvent({
      title: "",
      date: "",
      location: "",
      description: "",
      category: "",
    });
    setErrors({});
  };

  const filteredEvents = filter
    ? events.filter((e) => e.category === filter)
    : events;

    const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    filteredEvents.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 200); // Delay each card by 200ms
    });
  }, [filteredEvents]);
  return (
    <div className="w-full flex flex-col  bg-white dark:bg-black">
      {/* Filter Section */}
      <select
        className="p-2 rounded mb-4 w-44 mt-24 mx-10 border-2 border-yellow-500"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      >
        <option value="">All Categories</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
        <option value="Festival">Festival</option>
        <option value="Art">Art</option>
        <option value="Literature">Literature</option>
        <option value="Food">Food</option>
        <option value="Sports">Sports</option>
        <option value="Business">Business</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Technology">Technology</option>
      </select>

      {/* Events List */}
      <div className="flex w-full flex-wrap justify-center lg:justify-start px-20 gap-8 lg:gap-10 mt-5 mb-10 md:my-10">
      {filteredEvents.map((event, index) => (
        <div
          key={index}
          className={`transition-all duration-500 ease-out transform ${
            visibleCards.includes(index)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <EventCard event={event} />
        </div>
      ))}
    </div>

      {/* Add Event Button */}
      <button
          onClick={() => setShowForm(!showForm)}
          className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 font-bold text-white rounded w-44 mx-20 mb-14"
        >
          {showForm ? "Close Form" : "Add New Event"}
        </button>

        {/* Add Event Form - Show/Hide with Animation */}
        {showForm && (
          <div className="mt-6 p-4 md:p-8 bg-gray-100 self-center rounded-lg mx-5 md:mx-10 md:w-2/3 transition-all duration-300 ease-in-out mb-20 border-2 border-yellow-500 dark:bg-black">
            <h2 className="text-2xl font-bold italic mb-4 dark:text-white">Add New Event</h2>

            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 border rounded mb-4 focus:ring-2 focus:ring-yellow-500 outline-none"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

            <input
              type="date"
              className="w-full p-2 border rounded mb-4 focus:ring-2 focus:ring-yellow-500 outline-none"
              value={newEvent.date}
              onChange={(e) =>
                setNewEvent({ ...newEvent, date: e.target.value })
              }
            />
            {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}

            <input
              type="text"
              placeholder="Location"
              className="w-full p-2 border rounded mb-4 focus:ring-2 focus:ring-yellow-500 outline-none"
              value={newEvent.location}
              onChange={(e) =>
                setNewEvent({ ...newEvent, location: e.target.value })
              }
            />
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location}</p>
            )}

            <input
              type="text"
              placeholder="Description"
              className="w-full p-2 border rounded mb-4 focus:ring-2 focus:ring-yellow-500 outline-none"
              value={newEvent.description}
              onChange={(e) =>
                setNewEvent({ ...newEvent, description: e.target.value })
              }
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}

            <select
              className="w-full p-2 border rounded mb-4 focus:ring-2 focus:ring-yellow-500 outline-none"
              value={newEvent.category}
              onChange={(e) =>
                setNewEvent({ ...newEvent, category: e.target.value })
              }
            >
              <option value="">Select Category</option>
              <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
              <option value="Festival">Festival</option>
              <option value="Art">Art</option>
              <option value="Literature">Literature</option>
              <option value="Food">Food</option>
              <option value="Sports">Sports</option>
              <option value="Business">Business</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Technology">Technology</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category}</p>
            )}

            <button
              onClick={handleAddEvent}
              className={`w-full p-2 text-white rounded ${
                Object.keys(errors).length > 0 ? "bg-gray-400" : "bg-gradient-to-r from-yellow-400 to-orange-500 font-bold text-white"
              }`}
              disabled={Object.keys(errors).length > 0}
            >
              Add Event
            </button>
          </div>
        )}
    </div>
  );
};

export default Events;
