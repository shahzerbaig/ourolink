import { Box } from "@chakra-ui/react";
import AppPageHeading from "../../../ui/components/AppPageHeading";
import AppMaterialButton from "../../../ui/components/AppMaterialButton";
import HeroImage from "../components/HeroImage";
import Subtitle from "../components/Subtitle";
import HomepageViewModel from "../HomepageViewModel";

interface Props {
  viewModel: HomepageViewModel;
}

const HeroSection = ({ viewModel }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection={{
        base: "column",
        md: "row",
      }}
    >
      <Box
        justifyContent="center"
        flex="1"
        display="flex"
        flexDirection="column"
      >
        <AppPageHeading>Paint your ideas in pixels</AppPageHeading>
        <Box height="30px" />
        <Subtitle />
        <Box height="25px" />

        {/* TODO */}
        {/* <AppMaterialButton
          onClick={() => {
            viewModel.onClickedViewPortfolio();
          }}
        >
          View our portfolio
        </AppMaterialButton> */}
      </Box>

      <Box height="75px" />

      <Box flex="1" display="flex" justifyContent="center" backgroundColor="">
        <HeroImage />
      </Box>
    </Box>
  );
};

export default HeroSection;
