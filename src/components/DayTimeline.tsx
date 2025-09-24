import { TripDay } from "@/types/trip";
import TimelineItem from "./TimelineItem";

export default function DayTimeline({ day, date, locations }: TripDay) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center mb-8">
        Day {day} - {date}
      </h2>

      {/* PC: horizontal timeline */}
      <div className="hidden md:flex items-start justify-center gap-12">
        {locations.map((loc, idx) => (
          <div key={loc.id} className="flex items-start">
            <TimelineItem {...loc} orientation="horizontal" />
            {idx < locations.length - 1 && (
              <div className="flex items-center mx-4">
                <div className="h-1 w-20 bg-gray-400"></div>
                <span className="mx-2 text-gray-600">→</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden flex flex-col items-center gap-12">
        {locations.map((loc, idx) => (
          <div key={loc.id} className="flex flex-col items-center w-full">
            <TimelineItem {...loc} orientation="vertical" />
            {idx < locations.length - 1 && (
              <div className="flex flex-col items-center mt-2">
                <div className="w-1 h-12 bg-gray-400"></div>
                <span className="text-gray-600">↓</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
