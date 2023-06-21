import {
  Button,
  useDisclosure,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  MenuDivider,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const NavigationList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navItems = [
    "Home",
    "About",
    "Services",
    "Industry Associates",
    "Projects",
  ];
  return (
    <>
      <Show below="lg">
        <Menu>
          <MenuButton
            as={Button}
            variant={"unstyled"}
            leftIcon={<FaBars />}
          ></MenuButton>
          <MenuList
            borderRadius={0}
            width={"80vw"}
            position={"absolute"}
            top={{ sm: 0.9, md: 4 }}
            right={{ base: "-16px", md: "30px" }}
            paddingTop={0}
            marginTop={0}
          >
            <MenuDivider margin={0} bg="dodgerblue" height={1}></MenuDivider>
            {navItems.map((item) => (
              <MenuItem key={item}>{item}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Show>
      <Show above="lg">
        <List paddingTop={2} display="flex" flex="d-flex">
          {navItems.map((item) => (
            <ListItem paddingBottom={10} paddingTop={8} paddingX={3} key={item}>
              {item}
            </ListItem>
          ))}
          <Menu isOpen={isOpen}>
            <MenuButton
              paddingX={3}
              marginBottom={2}
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
              borderRadius={0}
              fontWeight="normal"
            >
              Partners
            </MenuButton>
            <MenuList
              position={"absolute"}
              top={"-10px"}
              right={"-100px"}
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
              paddingTop={10}
              borderRadius={0}
            >
              <MenuDivider margin={0} height={1} bg="dodgerblue"></MenuDivider>
              <MenuItem>Valley Irrigation</MenuItem>
              <MenuItem>Netafim</MenuItem>
            </MenuList>
          </Menu>
          <ListItem paddingTop={8} paddingX={3}>
            Contact Us
          </ListItem>
        </List>
      </Show>
    </>
  );
};

export default NavigationList;
