import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import CopyRightBanner from "../Components/CopyRightBanner";
import Footer from "../Components/Footer";

const IndustryAssociations = () => {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <GridItem area="nav">
        <NavBar pageId={4}></NavBar>
        <Box height={{ base: "105px", lg: "110px" }}></Box>
      </GridItem>
      <GridItem height="200vh" area="main" bg="green">
        Main
      </GridItem>
      <GridItem area="footer" bg={"primary.100"}>
        Footer
      </GridItem>
    </Grid>
  );
};

export default IndustryAssociations;
