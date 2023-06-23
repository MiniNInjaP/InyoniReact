import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import CardLeft from "../Components/CardLeft";
import CardRight from "../Components/CardRight";
import image from "../assets/XinavaneBarge.jpg";

import { TurnKeySection, serviceSection } from "../TextInput/TextContent";
import { TurnKey } from "../TextInput/Headings";
const About = () => {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <GridItem area="nav">
        <NavBar></NavBar>
        <Box height={{ base: "105px", lg: "130px" }}></Box>
      </GridItem>
      <GridItem height="200vh" area="main">
        <CardRight
          paragraph={TurnKeySection}
          heading={TurnKey}
          color="gray"
          image={image}
          buttonText="About Us"
          buttonLink="/about"
        ></CardRight>
        <CardLeft
          heading="Services"
          paragraph={serviceSection}
          color={"white"}
          image={image}
          buttonText="Services"
          buttonLink="/services"
        ></CardLeft>
      </GridItem>
      <GridItem area="footer" bg="yellow">
        Footer
      </GridItem>
    </Grid>
  );
};

export default About;
