import { tripData } from "@/data/tripData";
import DaySection from "@/components/DaySection";

export default function TripPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-8 text-center">
        My Saigon Trip Plan
      </h1>
      <div className="flex flex-col gap-12">
        {tripData.map((day) => (
          <DaySection key={day.day} {...day} />
        ))}
      </div>
    </section>
  );
}
