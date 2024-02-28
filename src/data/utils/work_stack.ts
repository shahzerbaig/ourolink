// RUUMOZ KITCHEN
import imageRummoz1 from "@assets/projects/rummoz_1.jpg";
import imageRummoz2 from "@assets/projects/rummoz_2.jpg";
import imageRummoz3 from "@assets/projects/rummoz_3.jpg";

// BET ALL WEEK
import betAllWeek1 from "@assets/projects/betallweek_1.jpg";
import betAllWeek2 from "@assets/projects/betallweek_2.jpg";
import betAllWeek3 from "@assets/projects/betallweek_3.jpg";

// FEED
import feed1 from "@assets/projects/feed_1.jpg";
import feed2 from "@assets/projects/feed_2.jpg";
import feed3 from "@assets/projects/feed_3.jpg";

// GOCHI
import gochi1 from "@assets/projects/gochi_1.jpg";
import gochi2 from "@assets/projects/gochi_2.jpg";
import gochi3 from "@assets/projects/gochi_3.jpg";

// GOCHI ADMIN PORTAL
import gochiAdmin1 from "@assets/projects/gochi_admin_1.jpeg";
import gochiAdmin2 from "@assets/projects/gochi_admin_2.jpeg";
import gochiAdmin3 from "@assets/projects/gochi_admin_3.jpeg";

// KNIGHT 9
import knightNine1 from "@assets/projects/knight_nine_1.jpg";
import knightNine2 from "@assets/projects/knight_nine_2.jpg";
import knightNine3 from "@assets/projects/knight_nine_3.jpg";

// HANZAIB COLLECTION
import hanzaib1 from "@assets/projects/hanzaib_1.jpg";
import hanzaib2 from "@assets/projects/hanzaib_2.jpg";
import hanzaib3 from "@assets/projects/hanzaib_3.jpg";

// MANDI MARKET
import mandi1 from "@assets/projects/mandi_1.jpg";
import mandi2 from "@assets/projects/mandi_2.jpg";
import mandi3 from "@assets/projects/mandi_3.jpg";

// RUMMOZ KITCHEN ADMIN PORTAL
import imageRummozAdmin1 from "@assets/projects/rummoz_admin_1.png";
import imageRummozAdmin2 from "@assets/projects/rummoz_admin_2.png";
import { DeviceTypeEnum } from "src/domain/enums/device_type_enum";
import React from "react";

export default [
  // RUUMOZ KITCHEN
  {
    projectName: "Rummo'z Kitchen",
    deviceType: DeviceTypeEnum.MOBILE,
    slug: "rummoz-kitchen",
    description:
      "Introducing an application that can automate a cloud kitchen process, from order management to delivery, Rummo’z Kitchen is a perfect software solution for Independent Cloud kitchen owners. It provides a subscription based ecosystem where the User subscribes for food delivery at door step for monthly basis.",
    techStack: [
      "flutter",
      "cloud firestore",
      "firebase authentication",
      "firebase storage",
      "firebase cloud messaging",
      "firebase push notifications",
    ],
    images: [
      {
        src: imageRummoz1,
        alt: "Rummo'z Kitchen 1",
      },
      {
        src: imageRummoz2,
        alt: "Rummo'z Kitchen 2",
      },
      {
        src: imageRummoz3,
        alt: "Rummo'z Kitchen 3",
      },
    ],
    ref: React.createRef(),
  },

  // RUMMOZ KITCHEN ADMIN PORTAL
  {
    projectName: "Rummo'z Kitchen's Admin Portal",
    deviceType: DeviceTypeEnum.DESKTOP,
    slug: "rummoz-kitchen-admin-portal",
    description:
      "This admin panel is used for managing Rummo’z kitchen application, right from updating menu to getting insights of the user. The owner will have the different options like 1. Add Discount Coupon 2. Set Offers 3. Manage Subscription",
    techStack: [],
    images: [
      {
        src: imageRummozAdmin1,
        alt: "Rummo'z Kitchen Admin Portal 1",
      },
      {
        src: imageRummozAdmin2,
        alt: "Rummo'z Kitchen Admin Portal 2",
      },
    ],
    ref: React.createRef(),
  },

  // BET ALL WEEK
  {
    projectName: "Bet All Week",
    deviceType: DeviceTypeEnum.MOBILE,
    slug: "bet-all-week",
    backgroundColor: "#4A148C",
    description:
      "Imagine a gaming application that will let you earn money on your gut feeling, amazing right? Introducing BetAllWeek an online gaming application where users can play against all odds. State of the art systems with low latency delay, that will take the experience of gaming to the next level.",
    techStack: [
      "flutter",
      "cloud firestore",
      "firebase authentication",
      "firebase storage",
    ],
    images: [
      {
        src: betAllWeek1,
        alt: "Bet All Week 1",
      },
      {
        src: betAllWeek2,
        alt: "Bet All Week 2",
      },
      {
        src: betAllWeek3,
        alt: "Bet All Week 3",
      },
    ],
    ref: React.createRef(),
  },

  // FEED
  {
    projectName: "Feed",
    deviceType: DeviceTypeEnum.MOBILE,
    slug: "feed",
    backgroundColor: "",
    description:
      "A social application for universities where students can keep track of each other's academic advancement, it creates a sense of competition in students while building a strong community over campus. Connect with your campus community like never before, exploring and networking with peers and faculty. Stay updated on essential college functions, from attendance to notices. 'Feed' isn't just an app; it's your gateway to a richer, more connected campus life. Experience college networking redefined!",
    techStack: [
      "flutter",
      "cloud firestore",
      "firebase authentication",
      "firebase storage",
      "firebase cloud messaging",
      "firebase push notifications",
    ],
    images: [
      {
        src: feed1,
        alt: "Feed 1",
      },
      {
        src: feed2,
        alt: "Feed 2",
      },
      {
        src: feed3,
        alt: "Feed 3",
      },
    ],
    ref: React.createRef(),
  },

  // GOCHI
  {
    projectName: "GoChi",
    deviceType: DeviceTypeEnum.MOBILE,
    slug: "gochi",
    backgroundColor: "#D17673",
    description:
      "Introducing GoChi – our cutting-edge app now on Google Play! Enjoy easy, safe, and quality meat delivery to your doorstep. Get the freshest halal-certified, chemical-free meats for delightful cooking. Download GoChi for a convenient and premium culinary experience. Your masterpiece meals await!",
    techStack: [
      "flutter",
      "cloud firestore",
      "firebase authentication",
      "firebase storage",
      "firebase cloud messaging",
      "firebase push notifications",
    ],
    images: [
      {
        src: gochi1,
        alt: "GoChi 1",
      },
      {
        src: gochi2,
        alt: "GoChi 2",
      },
      {
        src: gochi3,
        alt: "GoChi 3",
      },
    ],
    ref: React.createRef(),
  },

  // GOCHI ADMIN PORTAL
  {
    projectName: "GoChi's Admin Portal",
    deviceType: DeviceTypeEnum.MOBILE,
    slug: "gochi-admin-portal",
    backgroundColor: "#E5AAA9",
    description:
      "GoChi's simple admin panel, made with Flutter and powered by Firebase, makes gourmet cooking easy! Navigate easily, get updates quickly, and ensure security with fast login. Manage meat orders effortlessly, choosing from tasty mutton, tender chicken, or fresh eggs. GoChi's user-friendly dashboard promises great cooking with convenience and top-quality meats at your fingertips!",
    techStack: [
      "flutter",
      "cloud firestore",
      "firebase authentication",
      "firebase storage",
      "firebase cloud messaging",
      "firebase push notifications",
    ],
    images: [
      {
        src: gochiAdmin1,
        alt: "GoChi Admin Portal 1",
      },
      {
        src: gochiAdmin2,
        alt: "GoChi Admin Portal 2",
      },
      {
        src: gochiAdmin3,
        alt: "GoChi Admin Portal 3",
      },
    ],
    ref: React.createRef(),
  },

  // KNIGHT 9
  {
    projectName: "Knight 9",
    deviceType: DeviceTypeEnum.MOBILE,
    slug: "knight-9",
    backgroundColor: "#465777",
    description:
      "Explore the fun world of ‘Knight Nine’! Play in 9-player contests for a small fee, win cash prizes, and show off your skills. It’s easy and safe with a simple interface and secure payments. Download ‘Knight Nine’ now to turn your gaming into rewards and join the ultimate arena where winning pays off!",
    techStack: ["react native", "react", "node js"],
    images: [
      {
        src: knightNine1,
        alt: "Knight 9 1",
      },
      {
        src: knightNine2,
        alt: "Knight 9 2",
      },
      {
        src: knightNine3,
        alt: "Knight 9 3",
      },

      ,
    ],
    ref: React.createRef(),
  },

  // HANZAIB COLLECTION
  {
    projectName: "Hanzaib Collection",
    deviceType: DeviceTypeEnum.MOBILE,
    slug: "hanzaib-collection",
    backgroundColor: "",
    description:
      "Experience culinary convenience with our Food Kitchen App. Seamlessly browse, order, and savor delicious meals with a user-friendly interface that enhances your dining journey. Elevate your food experience – anytime, anywhere",
    techStack: ["flutter", "cloud firestore"],
    images: [
      {
        src: hanzaib1,
        alt: "Hanzaib 1",
      },
      {
        src: hanzaib2,
        alt: "Hanzaib 2",
      },
      {
        src: hanzaib3,
        alt: "Hanzaib 3",
      },
    ],
    ref: React.createRef(),
  },

  // MANDI MARKET
  {
    projectName: "Mandi Market",
    deviceType: DeviceTypeEnum.MOBILE,
    slug: "mandi-market",
    backgroundColor: "#8DCCCE",
    description:
      "Experience culinary convenience with our Food Kitchen App. Seamlessly browse, order, and savor delicious meals with a user-friendly interface that enhances your dining journey. Elevate your food experience – anytime, anywhere",
    techStack: [
      "flutter",
      "cloud firestore",
      "firebase authentication",
      "firebase storage",
      "firebase cloud messaging",
      "firebase push notifications",
    ],
    images: [
      {
        src: mandi1,
        alt: "Mandi Market 1",
      },
      {
        src: mandi2,
        alt: "Mandi Market 2",
      },
      {
        src: mandi3,
        alt: "Mandi Market 3",
      },
    ],
    ref: React.createRef(),
  },
] as WorkStackProps[];

export interface WorkStackProps {
  projectName: string;
  slug: string;
  description: string;
  techStack: string[];
  images: WorkStackImageProps[];
  backgroundColor?: string;
  deviceType: DeviceTypeEnum;
  ref?: React.RefObject<HTMLDivElement>;
}

export interface WorkStackImageProps {
  src: string;
  alt: string;
}
