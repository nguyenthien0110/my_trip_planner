import { Location } from "@/types/trip";
import Image from "next/image";

export default function TimelineItem({
  name,
  time,
  image,
  description,
  orientation,
}: Location & { orientation: "horizontal" | "vertical" }) {
  return (
    <div
      className={`flex ${
        orientation === "horizontal"
          ? "flex-col items-center"
          : "flex-row items-center gap-4"
      }`}
    >
      <div className="flex flex-col items-center">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
        />
        <span className="mt-2 text-sm font-medium text-blue-600">{time}</span>
      </div>

      <div
        className={`${
          orientation === "horizontal"
            ? "mt-4 text-center max-w-[180px]"
            : "flex-1 text-left"
        }`}
      >
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
