import { Box, Text } from "@chakra-ui/react";
import HeroLg from "../assets/Pivot-Image-w_1160.jpg";
const HeroBanner = () => {
  return (
    <Box
      overflow={"hidden"}
      bgImage={HeroLg}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      w="auto"
      h="100vh"
    >
      <Text
        fontSize={{ base: 10, lg: 35 }}
        fontWeight={600}
        textShadow="5px 2px #2d8043"
        position="relative"
        left={50}
        top="50vh"
        color={"white"}
      >
        More than 40,000ha under irrigation - and growing
      </Text>
    </Box>
  );
};

export default HeroBanner;
