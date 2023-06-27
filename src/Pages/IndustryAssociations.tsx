import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import CopyRightBanner from "../Components/CopyRightBanner";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import CardTwoImage from "../Components/CardTwoImage";
import { IAAText } from "../TextInput/TextContent";
import valeyImage from "../assets/valley.png";
import sabiImage from "../assets/Sabi.jpg";
import ManufacturerImageGallery from "../Components/ManufacturerImageGallery";

const IndustryAssociations = () => {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <GridItem area="nav">
        <NavBar pageId={4}></NavBar>
        <Box height={{ base: "105px", lg: "110px" }}></Box>
      </GridItem>
      <GridItem area="main">
        <Banner>Industry</Banner>
        <Header
          headerOne="Industry Associations and agencies"
          paddingRight={0}
        ></Header>
        <CardTwoImage
          showButton={false}
          paddingY={0}
          paragraph={IAAText}
          headingColor="heading.100"
          textColor="secondary.100"
          imageOne={valeyImage}
          imageTwo={sabiImage}
          buttonText="More Information"
          buttonLink="/industrAssociates"
        ></CardTwoImage>
        <ManufacturerImageGallery>
          Inyoni Africa also supplies equipment from the following manufacturers
        </ManufacturerImageGallery>
      </GridItem>
      <GridItem area="footer" bg={"primary.100"}>
        <CopyRightBanner></CopyRightBanner>
      </GridItem>
    </Grid>
  );
};

export default IndustryAssociations;
