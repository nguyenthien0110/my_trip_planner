import { TripDay } from "@/types/trip";

export const tripData: TripDay[] = [
  {
    day: 1,
    date: "2025-09-25",
    locations: [
      {
        id: "loc1",
        name: "Bến Thành Market",
        time: "09:00",
        image: "/images/ben-thanh.jpg",
        description: "Famous market in Saigon with local foods and souvenirs.",
      },
      {
        id: "loc2",
        name: "Saigon Notre-Dame Basilica",
        time: "11:00",
        image: "/images/notre-dame.jpg",
        description: "Iconic cathedral built during French colonial period.",
      },
    ],
  },
  {
    day: 2,
    date: "2025-09-26",
    locations: [
      {
        id: "loc3",
        name: "War Remnants Museum",
        time: "10:00",
        image: "/images/museum.jpg",
        description: "Museum with exhibits about Vietnam War.",
      },
      {
        id: "loc4",
        name: "Bitexco Tower",
        time: "19:00",
        image: "/images/bitexco.jpg",
        description: "Skyscraper with city view from Skydeck.",
      },
    ],
  },
];
