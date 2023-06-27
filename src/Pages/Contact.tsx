import { GridItem, Box, Grid } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import Banner from "../Components/Banner";
import ContactUs from "../Components/ContactUs";
import CopyRightBanner from "../Components/CopyRightBanner";

const Contact = () => {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <GridItem area="nav">
        <NavBar pageId={7}></NavBar>
        <Box height={{ base: "105px", lg: "130px" }}></Box>
      </GridItem>
      <GridItem area="main">
        <Banner>Contact Us</Banner>
        <ContactUs></ContactUs>
      </GridItem>
      <GridItem area="footer" bg={"primary.100"}>
        <CopyRightBanner></CopyRightBanner>
      </GridItem>
    </Grid>
  );
};

export default Contact;
