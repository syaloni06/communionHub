import { useState } from "react";
import EventCard from "../components/EventCard";

const Events = () => {
  const [events, setEvents] = useState([
    { title: "Charity Drive", date: "March 20, 2025", location: "NYC", description: "Helping the needy.", category: "Charity" },
    { title: "Faith Gathering", date: "April 10, 2025", location: "LA", description: "Interfaith event.", category: "Religious" },
  ]);
  
  const [newEvent, setNewEvent] = useState({ title: "", date: "", location: "", description: "", category: "" });
  const [filter, setFilter] = useState("");

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.category) return;
    setEvents([...events, newEvent]);
    setNewEvent({ title: "", date: "", location: "", description: "", category: "" });
  };

  const filteredEvents = filter ? events.filter(e => e.category === filter) : events;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Event Listings</h1>

      {/* Filter Section */}
      <select 
        className="p-2 border rounded mb-4"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>

      {/* Events List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>

      {/* Add Event Form */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Add New Event</h2>
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded mb-2"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="date"
          className="w-full p-2 border rounded mb-2"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full p-2 border rounded mb-2"
          value={newEvent.location}
          onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="w-full p-2 border rounded mb-2"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        />
        <select
          className="w-full p-2 border rounded mb-2"
          value={newEvent.category}
          onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
        >
          <option value="">Select Category</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
        <button onClick={handleAddEvent} className="w-full p-2 bg-blue-600 text-white rounded">Add Event</button>
      </div>
    </div>
  );
};

export default Events;
