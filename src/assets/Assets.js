import Gym_1 from "./Gym-1.jpg";
import Gym_2 from "./Gym-2.jpg";
import Gym_3 from "./Gym-3.jpg";
import Gym_4 from "./Gym-4.jpg";
import Spa_1 from "./spa-1.jpg";
import Spa_2 from "./spa-2.jpg";
import Spa_3 from "./spa-3.jpg";
import Spa_4 from "./spa-4.jpg";
import Spa_5 from "./spa-5.jpg";
import Golf_1 from "./golf-1.jpg";
import Golf_2 from "./golf-2.jpg";
import Golf_3 from "./golf-3.jpg";
import Golf_4 from "./golf-4.jpg";
import Golf_5 from "./golf-5.jpg";
import Doublex_Garden from "./Rooms/Doublex GardenView 1.jpg";
import Doublex_Pool1 from "./Rooms/Doublex PoolView 1.jpg";
import Doublex_Pool2 from "./Rooms/Doublex PoolView 2.jpg";
import Doublex_Sea from "./Rooms/Doublex SeaView.jpg";
import Grand_Double_Garden1 from "./Rooms/Grand Double GardenView 1.jpg";
import Grand_Double_Garden2 from "./Rooms/Grand Double GardenView 2.jpg";
import Grand_Double_Garden3 from "./Rooms/Grand Double GardenView 3.jpg";
import Super_Double_Garden1 from "./Rooms/Superior Double GardenView 1.jpg";
import Super_Double_Garden2 from "./Rooms/Superior Double GardenView 2.jpg";
import Super_Double_Garden3 from "./Rooms/Superior Double GardenView 3.jpg";
import Super_Sea from "./Rooms/Superior SeaView.png";
import Grand_Super_Sea from "./Rooms/Grand Superior SeaView.jpg";
import HoneyMoon1 from "./Rooms/HoneyMoon 1.jpg";
import HoneyMoon2 from "./Rooms/HoneyMoon 2.jpg";
import Senator1 from "./Rooms/Senator 1.jpg";
import Senator2 from "./Rooms/Senator 2.jpg";
export const Rooms = [
  {
    roomID: 1,
    roomName: "Doublex Garden View",
    roomPhoto: [Doublex_Garden],
    roomType: "Doublex",
    roomView: "Garden",
    roomCapacity: 2,
    roomServices: {
      wifi: true,
      tv: true,
      dining: {
        breakFast: true,
        dinner: true,
      },
      roomAccess: {},
    },
    roomPrice: 25,
  },
  {
    roomID: 2,
    roomName: "Doublex Pool View",
    roomPhoto: [Doublex_Pool1, Doublex_Pool2],
    roomType: "Doublex",
    roomView: "Pool",
    roomCapacity: 2,
    roomServices: {
      wifi: true,
      tv: true,
      dining: {
        breakFast: true,
        dinner: true,
      },
      roomAccess: {
        pool: true,
      },
    },
    roomPrice: 35,
  },
  {
    roomID: 3,
    roomName: "Doublex Sea View",
    roomPhoto: [Doublex_Sea],
    roomType: "Doublex",
    roomView: "Sea",
    roomCapacity: 2,
    roomServices: {
      wifi: true,
      tv: true,
      dining: {
        breakFast: true,
        dinner: true,
        lunch: true,
      },
      roomAccess: {
        pool: true,
        sea: true,
      },
    },
    roomPrice: 60,
  },
  {
    roomID: 4,
    roomName: "Grand Doublex Garden View",
    roomPhoto: [
      Grand_Double_Garden1,
      Grand_Double_Garden2,
      Grand_Double_Garden3,
    ],
    roomType: "Grand Doublex",
    roomView: "Garden",
    roomCapacity: 2,
    roomServices: {
      wifi: true,
      tv: true,

      dining: {
        breakFast: true,
        dinner: true,
        lunch: true,
      },
      roomAccess: {
        pool: true,
        sea: true,
      },
    },
    roomPrice: 70,
  },
  {
    roomID: 5,
    roomName: "Superior Double Garden View",
    roomPhoto: [
      Super_Double_Garden1,
      Super_Double_Garden2,
      Super_Double_Garden3,
    ],
    roomType: "Superior Doublex",
    roomView: "Garden",
    roomCapacity: 2,
    roomServices: {
      wifi: true,
      tv: true,
      dining: {
        breakFast: true,
        dinner: true,
        lunch: true,
      },
      roomAccess: {
        pool: true,
        sea: true,
        gym: true,
        golf: true,
      },
    },
    roomPrice: 90,
  },
  {
    roomID: 6,
    roomName: "Superior Sea View",
    roomPhoto: [Super_Sea],
    roomType: "Superior",
    roomView: "Sea",
    roomCapacity: 2,
    roomServices: {
      wifi: true,
      tv: true,
      dining: {
        breakFast: true,
        dinner: true,
        lunch: true,
      },
      roomAccess: {
        pool: true,
        sea: true,
        gym: true,
        golf: true,
      },
    },
    roomPrice: 120,
  },
  {
    roomID: 7,
    roomName: "Grand Superior Sea View",
    roomPhoto: [Grand_Super_Sea],
    roomType: "Grand Superior",
    roomView: "Sea",
    roomCapacity: 2,
    roomServices: {
      wifi: true,
      tv: true,
      dining: {
        breakFast: true,
        dinner: true,
        lunch: true,
      },
      roomAccess: {
        pool: true,
        sea: true,
        gym: true,
        golf: true,
      },
    },
    roomPrice: 150,
  },
  {
    roomID: 8,
    roomName: "Honey Moon",
    roomPhoto: [HoneyMoon1, HoneyMoon2],
    roomType: "Honey Moon",
    roomView: "Sea",
    roomCapacity: 2,
    roomServices: {
      wifi: true,
      tv: true,
      beverages: true,
      dining: {
        breakFast: true,
        dinner: true,
        lunch: true,
      },
      roomAccess: {
        pool: true,
        sea: true,
        gym: true,
        golf: true,
        spa: true,
      },
    },
    roomPrice: 280,
  },
  {
    roomID: 9,
    roomName: "Senator",
    roomPhoto: [Senator1, Senator2],
    roomType: "Senator",
    roomView: "Sea",
    roomCapacity: 2,
    roomServices: {
      wifi: true,
      tv: true,
      beverages: true,
      dining: {
        breakFast: true,
        dinner: true,
        lunch: true,
      },
      roomAccess: {
        goldenKey: true,
      },
    },
    roomPrice: 280,
  },
];
export const Gym_Photos = [
  {
    Photo: Gym_1,
    Content: "Enjoy your time without waiting",
  },
  {
    Photo: Gym_2,
    Content: "All the equipment needed to achieve your goals",
  },
  {
    Photo: Gym_3,
    Content: "Professional assistants to ensure and maximize your benefit",
  },
  {
    Photo: Gym_4,
    Content:
      "Empowering Fitness: The Women's Gym Experience at Raniesta Resort",
  },
];
export const Spa_Photos = [
  { Photo: Spa_1, Content: "Natural Oils Made with Love" },
  {
    Photo: Spa_2,
    Content: "Relaxation And Privacy",
  },
  {
    Photo: Spa_3,
    Content: "Professionals Spa Attendants",
  },
  {
    Photo: Spa_4,
    Content: "Get Your meditation",
  },
  {
    Photo: Spa_5,
    Content: "We care about every detail",
  },
];
export const Golf_Photos = [
  {
    Photo: Golf_1,
    Content: "Spend Your Time with Your Favourites",
  },
  {
    Photo: Golf_2,
    Content: "Healthy Greens For Better Life",
  },
  {
    Photo: Golf_3,
    Content: "Golf Cars for better Experience",
  },
  {
    Photo: Golf_4,
    Content: "Enjoy wherever you are",
  },
  {
    Photo: Golf_5,
    Content: "Spend Your Time with Your Favourites",
  },
];
