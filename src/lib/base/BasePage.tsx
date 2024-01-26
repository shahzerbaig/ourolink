import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../layouts/NavBar/NavBar";
import { Footer } from "../layouts/Footer/Footer";
import BasePageViewModel from "./BasePageViewModel";
import ScrollToTopButton from "@components/ScrollToTopButton";

interface Props {
  children?: React.ReactNode;
}

// use <Show above="lg"> to render a component conditionally
// Every page in the app should be wrapped in this component
const BasePage = ({ children }: Props) => {
  const viewModel = new BasePageViewModel();

  return (
    <Grid templateAreas={`"nav" "content" "footer"`}>
      {/* Scroll to top button */}
      <ScrollToTopButton />

      <GridItem area="nav">
        <NavBar />
        <Box height="80px"></Box>
      </GridItem>

      <GridItem
        paddingX={{
          base: "25px",
          md: "70px",
        }}
        marginTop={{
          base: "100px",
          md: "80px",
        }}
        marginBottom={{
          base: "100px",
          md: "150px",
        }}
        area="content"
      >
        {children}
      </GridItem>

      {/* Remove this margin bottom */}
      <GridItem area="footer">
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default BasePage;
