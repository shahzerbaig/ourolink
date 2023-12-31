import AppSectionHeading from "../../../ui/components/AppSectionHeading";
import { Box, SimpleGrid } from "@chakra-ui/react";
import SingleProjectSkeleton, {
  SingleProject,
} from "../components/SingleProjectSkeleton";
import gochi_carousel from "../../../../assets/gochi_carousel.jpg";
import feed_carousel from "../../../../assets/feed_carousel.jpg";
import betallweek_carousel from "../../../../assets/betallweek_carousel.jpg";
import rummoz_kitchen_carousel from "../../../../assets/rummoz_kitchen_carousel.jpg";
import AppMaterialButton from "../../../ui/components/AppMaterialButton";

const OurWorkSection = () => {
  const projects: SingleProject[] = [
    {
      projectName: "Rummo'z Kitchen",
      category: "Food Tech",
      imageURL: rummoz_kitchen_carousel,
    },

    {
      projectName: "BetAllWeek",
      category: "Online Gaming",
      imageURL: betallweek_carousel,
    },

    {
      projectName: "GoChi",
      category: "E-commerce",
      imageURL: gochi_carousel,
    },

    {
      projectName: "Feed",
      category: "Institute Management",
      imageURL: feed_carousel,
    },
  ];

  return (
    <>
      <AppSectionHeading>Our Work</AppSectionHeading>

      <Box height="100px" />

      <Box paddingX="10px">
        <SimpleGrid
          columns={{ base: 1, md: 2, xl: 3 }}
          spacingX={8}
          spacingY="70px"
        >
          {projects.map((item, i) => (
            <SingleProjectSkeleton key={i} project={item} />
          ))}
        </SimpleGrid>

        {/* TODO */}
        {/* <Box height="50px" /> */}

        {/* <AppMaterialButton onClick={() => {}}>View More</AppMaterialButton> */}
      </Box>
    </>
  );
};

export default OurWorkSection;
