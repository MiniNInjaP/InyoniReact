import { Box, Grid, GridItem, HStack, Heading, Image } from "@chakra-ui/react";
import alstromImage from "../assets/Manufacturers/alstom.png";
import arkalImage from "../assets/Manufacturers/arkal.png";
import ksbImage from "../assets/Manufacturers/KSB.jpg";
import mottechImage from "../assets/Manufacturers/mottech.png";
import netafimImage from "../assets/Manufacturers/netafim-300x114.png";
import rockwellImage from "../assets/Manufacturers/rockwell.png";
import vyrsaImage from "../assets/Manufacturers/vyrsa.png";
import wegImage from "../assets/Manufacturers/weg.png";

interface Props {
  children: string;
}

const ManufacturerImageGallery = ({ children }: Props) => {
  return (
    <HStack flexDirection={"column"} paddingY={10}>
      <Heading
        marginY={{ base: 5 }}
        marginX={{ base: 6, md: "10%" }}
        fontWeight={{ base: 500, md: 400 }}
        borderRadius={"5px"}
        paddingX={2}
        paddingY={2}
        color={"white"}
        backgroundColor="primary.100"
        lineHeight={1}
        fontSize={{ base: "28px" }}
      >
        {children}
      </Heading>

      <Grid
        paddingBottom={3}
        templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
        gap={4}
      >
        {/* First Row */}
        <GridItem colSpan={1}>
          <Box w={{ base: "200px", md: "300px" }}>
            <Image src={alstromImage}></Image>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box w={{ base: "200px", md: "300px" }}>
            <Image src={mottechImage}></Image>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box w={{ base: "200px", md: "300px" }}>
            <Image src={arkalImage}></Image>
          </Box>
        </GridItem>
      </Grid>
      <Grid
        paddingBottom={3}
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={{ base: 5, lg: 20 }}
      >
        <GridItem colSpan={1}>
          <Box w={{ base: "200px", md: "300px", lg: "200px" }}>
            <Image src={wegImage}></Image>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box w={{ base: "200px", md: "300px", lg: "200px" }}>
            <Image src={ksbImage}></Image>
          </Box>
        </GridItem>
      </Grid>
      <Grid
        paddingBottom={0}
        marginBottom={0}
        templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
        gap={4}
      >
        {/* First Row */}
        <GridItem colSpan={1}>
          <Box w={{ base: "200px", md: "300px" }}>
            <Image src={netafimImage}></Image>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box w={{ base: "200px", md: "300px" }}>
            <Image src={rockwellImage}></Image>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box w={{ base: "200px", md: "300px" }}>
            <Image src={vyrsaImage}></Image>
          </Box>
        </GridItem>
      </Grid>
    </HStack>
  );
};

export default ManufacturerImageGallery;
