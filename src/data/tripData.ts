import { TripDay } from "@/types/trip";

export const tripData: TripDay[] = [
  {
    day: 1,
    date: "2025-09-25",
    locations: [
      {
        id: "loc1",
        name: "Dinh Độc Lập",
        time: "08:30",
        image: "./images/dinh-doc-lap.jpg",
        description: "Historic palace and important site in Vietnam’s history.",
      },
      {
        id: "loc2",
        name: "Bảo tàng Thành phố Hồ Chí Minh",
        time: "10:30",
        image: "./images/museum-hcmc.jpg",
        description: "Museum showcasing the history and culture of Ho Chi Minh City.",
      },
      {
        id: "loc3",
        name: "Bảo tàng Mỹ thuật TP. HCM",
        time: "14:00",
        image: "./images/fine-arts-museum.jpg",
        description: "Art museum with traditional and contemporary Vietnamese works.",
      },
      {
        id: "loc4",
        name: "Nhà thờ Đức Bà",
        time: "16:30",
        image: "./images/notre-dame.jpg",
        description: "Iconic cathedral built during the French colonial period.",
      },
      {
        id: "loc5",
        name: "Phố đi bộ Nguyễn Huệ",
        time: "18:30",
        image: "./images/nguyen-hue.jpg",
        description: "Popular walking street with cafes, restaurants, and nightlife.",
      },
    ],
  },
  {
    day: 2,
    date: "2025-09-26",
    locations: [
      {
        id: "loc6",
        name: "Địa đạo Củ Chi",
        time: "09:00",
        image: "./images/cu-chi.jpg",
        description: "Underground tunnel network used during the Vietnam War.",
      },
      {
        id: "loc7",
        name: "Landmark 81 SkyView",
        time: "19:00",
        image: "./images/landmark81.jpg",
        description: "Tallest skyscraper in Vietnam with observation deck views.",
      },
    ],
  },
  {
    day: 3,
    date: "2025-09-27",
    locations: [
      {
        id: "loc8",
        name: "Công Viên Grand Park",
        time: "08:30",
        image: "./images/grand-park.jpg",
        description: "Large urban park in Thu Duc with lakes, trees, and walking areas.",
      },
      {
        id: "loc9",
        name: "Bến Nhà Rồng",
        time: "16:00",
        image: "./images/ben-nha-rong.jpg",
        description: "Historic port museum where President Ho Chi Minh embarked in 1911.",
      },
    ],
  },
  {
    day: 4,
    date: "2025-09-28",
    locations: [
      {
        id: "loc10",
        name: "Chợ Bến Thành",
        time: "08:30",
        image: "./images/ben-thanh.jpg",
        description: "Famous market in Saigon with food, souvenirs, and local goods.",
      },
    ],
  },
];
