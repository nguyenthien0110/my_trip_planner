import { TripDay } from "@/types/trip";
import LocationCard from "./LocationCard";
import ArrowConnector from "./ArrowConnector";

export default function DaySection({ day, date, locations }: TripDay) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        Day {day} - {date}
      </h2>
      <div className="flex flex-col gap-6">
        {locations.map((loc, idx) => (
          <div key={loc.id} className="flex flex-col items-center">
            <LocationCard {...loc} />
            {idx < locations.length - 1 && <ArrowConnector />}
          </div>
        ))}
      </div>
    </div>
  );
}
