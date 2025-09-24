"use client";

import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { tripData } from "@/data/tripData";
import DayTimeline from "./DayTimeline";

export default function DayCarousel() {
  const [index, setIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev < tripData.length - 1 ? prev + 1 : prev)),
    onSwipedRight: () => setIndex((prev) => (prev > 0 ? prev - 1 : prev)),
    trackMouse: true,
  });

  return (
    <div {...handlers} className="relative w-full">
      <DayTimeline {...tripData[index]} />

      {/* PC arrows */}
      <button
        onClick={() => setIndex((prev) => (prev > 0 ? prev - 1 : prev))}
        className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2"
      >
        ◀
      </button>
      <button
        onClick={() => setIndex((prev) => (prev < tripData.length - 1 ? prev + 1 : prev))}
        className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2"
      >
        ▶
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {tripData.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
