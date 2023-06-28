import { HStack, IconButton, Text } from "@chakra-ui/react";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const CopyRightBanner = () => {
  return (
    <HStack
      paddingX={{ base: 10, lg: "8%", xl: "20%", "2xl": "33%" }}
      paddingY={2}
      boxSizing={"border-box"}
      justifyContent={"space-between"}
      borderRadius={0}
      bgColor={"rgba(0,0,0,0.8)"}
      fontSize={{ base: 8, md: 12, lg: 20 }}
    >
      <Text whiteSpace={"nowrap"} paddingRight={15} color={"white"}>
        Copyrights Inyoni Africa (PTY)Ltd.
      </Text>
      <Link target="_blank" to={"https://www.facebook.com/InyoniAfrica/"}>
        <IconButton
          boxSize={5}
          fontSize={10}
          aria-label="Facebook-Link"
          icon={<FaFacebookF />}
        ></IconButton>
      </Link>
    </HStack>
  );
};

export default CopyRightBanner;
