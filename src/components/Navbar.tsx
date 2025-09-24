import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold">
          MyTripPlanner
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
