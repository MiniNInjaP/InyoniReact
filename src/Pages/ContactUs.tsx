import { GridItem, Box, Grid } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import HeroBanner from "../Components/HeroBanner";

const Contact = () => {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <GridItem area="nav">
        <NavBar></NavBar>
        <Box height={{ base: "105px", lg: "130px" }}></Box>
      </GridItem>
      <GridItem  area="main" >
        <HeroBanner></HeroBanner>
      </GridItem>
      <GridItem area="footer">
        <Footer></Footer>
      </GridItem>
    </Grid>
  );
};

export default Contact;
