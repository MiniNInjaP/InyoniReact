import { Grid, GridItem, Box, HStack } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import ProjectCardRight from "../Components/ProjectCardRight";
import CopyRightBanner from "../Components/CopyRightBanner";
import ProjectBanner from "../Components/ProjectBanner";

import xinavaneIimage from "../assets/XinavaneBarge.jpg";
import sipofaneImage from "../assets/SipofaneniSwaziland.jpg";

import { RoyalSwazi, UbomboSuagr, TPC, Xinavane } from "../TextInput/Headings";
import {
  royalSwaziText,
  ubomboSugarText,
  tpcText,
  xinavaneText,
} from "../TextInput/TextContent";
import ProjectCardLeft from "../Components/ProjectCardLeft";
import HighlightsCard from "../Components/HighlightsCard";
import RecentProjectsCard from "../Components/RecentProjectsCard";

const Projects = () => {
  const input = [
    {
      heading: "Gurue, Mozambique",
      text: "430 ha - Micro, Overhead Sprinklers and Center Pivots",
    },
    {
      heading: "Ghana ",
      text: "13 ha - Pivots, Drip, Overhead Sprinklers and Flood",
    },
    {
      heading: "Xinavane Sugar, Mozambique",
      text: "4380 ha – Semisolid Set Development",
    },
    {
      heading: "Royal Swaziland Sugar",
      text: " – 12,000 ha Sub Surface Drip Developments",
    },
    {
      heading: "Nchalo Sugar, Malawi ",
      text: "Center Pivot Developments",
    },
    {
      heading: "MozPEL, Mozambique",
      text: "Center Pivot Development",
    },
    {
      heading: "Xinavane Sugar, Mozambique ",
      text: "Floppy Conversion Projects",
    },
    {
      heading: "Markala Sugar, Mali",
      text: "Center Pivot Development",
    },
    {
      heading: "LUSIP, Swaziland ",
      text: " Small Farmer Irrigation Development",
    },
    {
      heading: "Dwanga Sugar, Malawi ",
      text: "Center Pivot Development",
    },
  ];
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <GridItem area="nav">
        <NavBar pageId={5}></NavBar>
        <Box height={{ base: "105px", lg: "130px" }}></Box>
        <ProjectBanner> Project Highlights</ProjectBanner>
      </GridItem>
      <GridItem area="main">
        <ProjectCardRight
          image={sipofaneImage}
          textColor={"secondary.100"}
          headingColor={"heading.100"}
          headingOne={RoyalSwazi}
          paragraphOne={royalSwaziText}
          headingTwo={UbomboSuagr}
          paragraphTwo={ubomboSugarText}
        ></ProjectCardRight>
        <ProjectCardLeft
          image={xinavaneIimage}
          textColor={"secondary.100"}
          headingColor={"heading.100"}
          headingOne={TPC}
          paragraphOne={tpcText}
          headingTwo={Xinavane}
          paragraphTwo={xinavaneText}
        ></ProjectCardLeft>
        <HStack
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          alignItems={{ base: "center", lg: "flex-start" }}
          paddingX={{ base: 1, lg: 10 }}
          marginBottom={10}
        >
          <HighlightsCard
            input={input}
            header="Other Major Projects"
            intro="Some of out other Projects"
            textColor={"secondary.100"}
            headingColor={"heading.100"}
          ></HighlightsCard>
          <RecentProjectsCard></RecentProjectsCard>
        </HStack>
      </GridItem>
      <GridItem area="footer" bg="primary.100">
        <CopyRightBanner></CopyRightBanner>
      </GridItem>
    </Grid>
  );
};

export default Projects;
