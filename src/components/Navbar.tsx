import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Image
            src="./map_route_trip_icon.svg"
            alt="Trip Icon"
            width={32}
            height={32}
          />
          WanderPlan
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/trip" className="hover:text-blue-600">
            Trip Plan
          </Link>
        </div>
      </div>
    </nav>
  );
}
