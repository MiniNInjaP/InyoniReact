import {
  Button,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const NavigationList = () => {
  const navItems = [
    "Home",
    "About",
    "Services",
    "Industry Associates",
    "Projects",
    "Partnes",
    "Contact Us",
  ];
  return (
    <>
      <Show below="lg">
        <Menu>
          <MenuButton
            as={Button}
            variant="unstyled"
            leftIcon={<FaBars />}
          ></MenuButton>
          <MenuList>
            {navItems.map((item) => (
              <MenuItem key={item}>{item}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Show>
      <Show above="lg">
        <List display="flex" flex="d-flex">
          {navItems.map((item) => (
            <ListItem padding={3} key={item}>
              {item}
            </ListItem>
          ))}
        </List>
      </Show>
    </>
  );
};

export default NavigationList;
