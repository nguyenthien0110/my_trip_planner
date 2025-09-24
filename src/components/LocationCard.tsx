import { Location } from "@/types/trip";
import Image from "next/image";

export default function LocationCard({
  name,
  time,
  image,
  description,
}: Location) {
  return (
    <div className="w-full max-w-lg bg-gray-50 shadow-md rounded-xl overflow-hidden">
      <Image
        src={image}
        alt={name}
        width={500}
        height={300}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">
          {time} - {name}
        </h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}
