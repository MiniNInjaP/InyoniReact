import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import TextCard from "../Components/TextCard";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import {
  ourFocusText,
  solutionText,
  embracingText,
} from "../TextInput/TextContent";
import valleyPivot from "../assets/ValleyCenterPivotSwaziland.jpg";

const Services = () => {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <GridItem area="nav">
        <NavBar></NavBar>
        <Box height={{ base: "105px", lg: "110px" }}></Box>
      </GridItem>
      <GridItem area="main">
        <Banner>Services</Banner>
        <Header headerOne="Our Focus" paddingRight={0}></Header>
        <TextCard
          image={valleyPivot}
          headingColor="#474747"
          textColor="#6D6D6D"
          paragraphOne={ourFocusText}
        ></TextCard>
        <TextCard
          textColor="#6D6D6D"
          headingColor="#17733A"
          headingOne="The Best Solution for You"
          headingTwo="Embracing Technology"
          paragraphOne={solutionText}
          paragraphTwo={embracingText}
        ></TextCard>
      </GridItem>
      <GridItem area="footer" bg="#17733A">
        <Footer></Footer>
      </GridItem>
    </Grid>
  );
};

export default Services;
