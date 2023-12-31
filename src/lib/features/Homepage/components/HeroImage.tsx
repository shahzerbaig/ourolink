import { Image } from "@chakra-ui/react";
import heroImage from "../../../../assets/hero_image.svg";

const HeroImage = () => {
  return (
    <Image
      maxWidth={{
        base: "300px",
        md: "400px",
      }}
      backgroundColor=""
      src={heroImage}
      alt="Hero image"
    />
  );
};

export default HeroImage;
