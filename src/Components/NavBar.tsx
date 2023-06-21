import { Box, HStack } from "@chakra-ui/react";
import IconInfoList from "./IconInfoList";
import Logo from "./Logo";
import NavigationList from "./NavigationList";

const NavBar = () => {
  return (
    <Box width="100%" height={"130px"} bg="#fff" position="fixed">
      <IconInfoList></IconInfoList>
      <HStack justifyContent="space-between" paddingX={{ base: 2, lg: 10 }}>
        <Logo></Logo>
        <NavigationList></NavigationList>
      </HStack>
    </Box>
  );
};

export default NavBar;
