"use client";

import { useState, useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { tripData } from "@/data/tripData";
import DayTimeline from "./DayTimeline";

export default function DayCarousel() {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setIndex((prev) => (prev < tripData.length - 1 ? prev + 1 : prev)),
    onSwipedRight: () => setIndex((prev) => (prev > 0 ? prev - 1 : prev)),
    trackMouse: true,
  });

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const header = document.querySelector("nav");
    const headerHeight = header ? (header as HTMLElement).offsetHeight : 0;

    const rect = carousel.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top - headerHeight - 8;
    window.scrollTo({ top: targetTop, behavior: "smooth" });

    const activeSlide = carousel.querySelector(
      `[data-slide-index="${index}"]`
    ) as HTMLElement | null;

    if (activeSlide) {
      activeSlide.scrollTop = 0;
      setTimeout(() => {
        activeSlide.scrollTop = 0;
      }, 120);
    }
  }, [index]);

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index < tripData.length - 1) setIndex(index + 1);
  };

  const { ref: swipeRef, ...swipeHandlers } = handlers;

  return (
    <div
      ref={(el) => {
        carouselRef.current = el;
        swipeRef(el);
      }}
      {...swipeHandlers}
      className="relative w-full overflow-hidden"
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {tripData.map((day, i) => (
          <div
            key={i}
            data-slide-index={i}
            className="w-full flex-shrink-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{
              maxHeight: "calc(100vh - 80px)",
            }}
          >
            <DayTimeline {...day} />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={handlePrev}
        disabled={index === 0}
        className={`hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 shadow bg-white ${
          index === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"
        }`}
      >
        ◀
      </button>
      <button
        onClick={handleNext}
        disabled={index === tripData.length - 1}
        className={`hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 shadow bg-white ${
          index === tripData.length - 1
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
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
