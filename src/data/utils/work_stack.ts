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

export default [
  // RUUMOZ KITCHEN
  {
    projectName: "Rummo'z Kitchen",
    deviceType: DeviceTypeEnum.MOBILE,
    slug: "rummoz-kitchen",
    description:
      "Introducing our groundbreaking cloud kitchen app, designed to transform the way you experience food delivery. This innovative platform offers the ultimate in dining convenience, featuring both on-demand orders and subscription-based services. With no physical dine-in space, we focus exclusively on fulfilling your online orders, bringing a rich variety of meals right to your doorstep. Whether you’re craving an instant culinary delight or prefer the ease of scheduled meal deliveries, our app caters to your every need. Our subscription service is perfect for those who value consistency and convenience, providing regular, hassle-free meal deliveries. Each dish is prepared in our specialized cloud kitchens, ensuring that every order is fresh, delicious, and promptly delivered. Our user-friendly app is designed with your lifestyle in mind, offering personalized choices and a seamless ordering experience. Embrace the future of dining with us, where quality, variety, and convenience meet at the touch of a button.",
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
  },

  // RUMMOZ KITCHEN ADMIN PORTAL
  {
    projectName: "Rummo'z Kitchen's Admin Portal",
    deviceType: DeviceTypeEnum.DESKTOP,
    slug: "rummoz-kitchen-admin-portal",
    description:
      "Experience the future of dining with our revolutionary cloud kitchen app, your gateway to a world of culinary delights. Our app's dashboard, a masterpiece of Food Tech innovation, is a blend of aesthetics and functionality. Powered by Firebase and Flutter, it offers real-time push notifications, secure cloud storage, and seamless user authentication. Immerse yourself in an intuitive interface where ordering sumptuous meals is just a tap away. Whether it's exploring our diverse menu for an instant feast or scheduling your weekly meal subscriptions, our app ensures a personalized and hassle-free experience. Join us in redefining convenience and taste, where every order promises freshness, variety, and unmatched quality, delivered straight to your doorstep.",
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
  },

  // BET ALL WEEK
  {
    projectName: "Bet All Week",
    deviceType: DeviceTypeEnum.MOBILE,
    slug: "bet-all-week",
    backgroundColor: "#4A148C",
    description:
      "Our newly developed mobile gaming application is an exciting platform for NFL fans who enjoy betting on matches. This easy-to-use app allows users to bet real money on NFL games, adding an extra layer of thrill and engagement to the football season. The app features a straightforward interface, making it simple for users to navigate through various NFL matches and place their bets. Users can choose from a wide range of betting options, such as predicting the winning team, the scoreline, or specific player performances. This variety ensures that both seasoned bettors and newcomers can find options that suit their preferences and level of expertise. Security and reliability are at the core of our app. We use advanced encryption to protect user data and transactions, ensuring a safe betting environment. Our app also provides live updates on NFL games, so users can track their bets in real-time and stay informed about game progress and results. Moreover, our platform supports responsible gaming. We have implemented features to help users manage their spending and betting habits, promoting a healthy and enjoyable gaming experience. Whether you’re a die-hard NFL fan or a casual viewer looking to add excitement to the games, our betting app offers a unique and secure way to engage with your favorite sport.",
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
  },

  // FEED
  {
    projectName: "Feed",
    deviceType: DeviceTypeEnum.MOBILE,
    slug: "feed",
    backgroundColor: "",
    description:
      "Connect and engage with 'Feed,' your vibrant college social platform! Share educational posts, personal stories, and build a professional presence with a unique profile. Connect with your campus community like never before, exploring and networking with peers and faculty. Stay updated on essential college functions, from attendance to notices. 'Feed' isn't just an app; it's your gateway to a richer, more connected campus life. Experience college networking redefined!",
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
  },

  // GOCHI
  {
    projectName: "GoChi",
    deviceType: DeviceTypeEnum.MOBILE,
    slug: "gochi",
    backgroundColor: "#D17673",
    description:
      "We proudly present GoChi - the cutting-edge app crafted by our team! Now available on the Google Play Store, GoChi redefines online meat ordering. In lockdown times, we bring the convenience of safe, doorstep delivery for the finest, halal-certified, and 100% chemical-free meats. GoChi is not just about ease; it's about quality. We ensure that users receive only the freshest and finest meats, perfect for culinary adventures. With GoChi, we aim to enhance the joy of cooking with premium ingredients, ensuring every meal is a masterpiece. Download GoChi now and experience the convenience and quality we've crafted for you!",
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
  },

  // GOCHI ADMIN PORTAL
  {
    projectName: "GoChi's Admin Portal",
    deviceType: DeviceTypeEnum.MOBILE,
    slug: "gochi-admin-portal",
    backgroundColor: "#E5AAA9",
    description:
      "Embark on effortless gourmet cooking with GoChi's tech-savvy dashboard! Crafted with Flutter and powered by Firebase, it offers seamless navigation, real-time updates, secure storage, and swift authentication. Simplify your meat selection to doorstep delivery journey, whether it's succulent mutton, tender chicken, or fresh eggs. GoChi's dashboard ensures culinary excellence, providing freshness and quality at your fingertips. Elevate your cooking with convenience and premium meats on GoChi's dashboard",
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
  },

  // KNIGHT 9
  {
    projectName: "Knight 9",
    deviceType: DeviceTypeEnum.MOBILE,
    slug: "knight-9",
    backgroundColor: "#465777",
    description:
      "Enter the exciting realm of 'Knight Nine,' where gaming meets high stakes! Join exclusive 9-player contests with a simple admission fee, battling it out for rewarding cash prizes. It's not just a game; 'Knight Nine' is your chance to showcase skills, challenge competitors, and earn big. With its user-friendly interface and secure payment system, entering contests is seamless and safe. Ready to turn your gaming skills into rewards? Download 'Knight Nine' now and join the ultimate gaming arena where victory pays off!",
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
  },
] as WorkStackProps[];

interface WorkStackProps {
  projectName: string;
  slug: string;
  description: string;
  techStack: string[];
  images: WorkStackImageProps[];
  backgroundColor?: string;
  deviceType: DeviceTypeEnum;
}

export interface WorkStackImageProps {
  src: string;
  alt: string;
}
