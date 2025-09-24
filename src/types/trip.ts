export interface Location {
  id: string;
  name: string;
  time: string;
  image: string;
  description: string;
}

export interface TripDay {
  day: number;
  date: string;
  locations: Location[];
}
