import { TripDay } from "@/types/trip";
import Image from "next/image";

export default function DayTimeline({ day, date, locations }: TripDay) {
  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-12">
        Day {day} - {date}
      </h2>

      {/* Vertical timeline for all devices */}
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-[10px] bg-gray-300 rounded-full -translate-x-1/2" />

        {locations.map((loc, idx) => (
          <div key={loc.id} className="relative flex w-full mb-16">
            {/* Point + Time */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
              <div className="w-6 h-6 bg-blue-600 rounded-full" />
              <span className="mt-2 text-sm font-semibold text-blue-600">
                {loc.time}
              </span>
            </div>

            {/* Info box, closer to the line */}
            <div
              className={`w-40 ${
                idx % 2 === 0
                  ? "mr-auto pr-6 text-right"
                  : "ml-auto pl-6 text-left"
              }`}
            >
              <Image
                src={loc.image}
                alt={loc.name}
                width={100}
                height={100}
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 mx-auto"
              />
              <h3 className="mt-2 text-base font-bold">{loc.name}</h3>
              <p className="text-xs text-gray-600">{loc.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
