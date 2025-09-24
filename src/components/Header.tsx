import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <div className="flex items-center space-x-3">
        <Image
          src="/map_route_trip_icon.svg"
          alt="Trip Planner Icon"
          width={32}
          height={32}
        />
        <h1 className="text-xl font-bold text-gray-800">My Trip Planner</h1>
      </div>
    </header>
  );
}
