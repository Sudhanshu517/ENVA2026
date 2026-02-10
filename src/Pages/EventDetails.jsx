import { useParams, useNavigate } from "react-router-dom";
import eventsData from "./Details.json";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = eventsData.find((e) => e.id === Number(id));

  if (!event) return <div className="text-white">Event not found</div>;

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <button onClick={() => navigate(-1)} className="mb-6 text-[#d4af37]">
        ← Back
      </button>

      <h1 className="text-5xl font-bold text-[#d4af37]">{event.eventName}</h1>

      <p className="mt-4 text-gray-400">{event.description}</p>

      <div className="mt-6 text-lg">{event.details}</div>

      <div className="mt-4">
        <span className="text-[#d4af37]">Location:</span> {event.location}
      </div>

      <div className="mt-2">
        Team Size: {event.min} – {event.max}
      </div>

      {event.registrationLink && (
        <a
          href={event.registrationLink}
          target="_blank"
          className="inline-block mt-6 bg-[#d4af37] text-black px-6 py-3 rounded"
        >
          Register Now
        </a>
      )}
    </div>
  );
};

export default EventDetails;
