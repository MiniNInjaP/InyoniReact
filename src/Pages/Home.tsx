import { GridItem, Box, Grid } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import HeroBanner from "../Components/HeroBanner";
import CardLeft from "../Components/CardLeft";
import CardRight from "../Components/CardRight";
import { TurnKey, IAA } from "../TextInput/Headings";
import {
  TurnKeySection,
  serviceSection,
  IAAText,
} from "../TextInput/TextContent";
import iaSAIcon from "../assets/IA-SA-Icon-Small.jpg";
import xinavaneImage from "../assets/XinavaneBarge.jpg";
import valeyImage from "../assets/valley.png";
import sabiImage from "../assets/Sabi.jpg";
import CardTwoImage from "../Components/CardTwoImage";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <Grid boxSizing="border-box" templateAreas={`"nav" "main" "footer"`}>
      <GridItem area="nav">
        <NavBar></NavBar>
        <Box height={{ base: "105px", lg: "130px" }}></Box>
      </GridItem>
      <GridItem area="main">
        <HeroBanner></HeroBanner>
        <CardRight
          paragraph={TurnKeySection}
          heading={TurnKey}
          headingColor="#474747"
          textColor="#6D6D6D"
          image={iaSAIcon}
          buttonText="About Us"
          buttonLink="/about"
        ></CardRight>
        <CardLeft
          heading="Services"
          paragraph={serviceSection}
          color={"white"}
          image={xinavaneImage}
          buttonText="Services"
          buttonLink="/services"
        ></CardLeft>
        <CardTwoImage
          paragraph={IAAText}
          heading={IAA}
          headingColor="#474747"
          textColor="#6D6D6D"
          imageOne={valeyImage}
          imageTwo={sabiImage}
          buttonText="More Information"
          buttonLink="/industrAssociates"
        ></CardTwoImage>
      </GridItem>
      <GridItem area="footer" bg={"#17733A"}>
        <Footer></Footer>
      </GridItem>
    </Grid>
  );
};

export default Home;
