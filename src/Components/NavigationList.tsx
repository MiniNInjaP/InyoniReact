import {
  useDisclosure,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  MenuDivider,
  Button,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavigationList = () => {
  const mainMenu = useDisclosure();
  const subMenu = useDisclosure();

  const navItems = [
    { link: "/", label: "Home" },
    { link: "/about", label: "About" },
    { link: "/services", label: "Services" },
    { link: "/industryassociates", label: "Industry Associates" },
    { link: "/projects", label: "Projects" },
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
            top={{ sm: 1, md: 3 }}
            right={{ base: "-16px", md: "25px" }}
            paddingTop={0}
            marginTop={0}
          >
            <MenuDivider margin={0} bg="dodgerblue" height={1}></MenuDivider>
            {navItems.map((item) => (
              <MenuItem>
                <Link to={item.link}>{item.label}</Link>
              </MenuItem>
            ))}
            <Menu isOpen={true}>
              <MenuItem>Partners</MenuItem>
              <MenuItem
                as={Link}
                to={"https://www.valleyirrigation.com/"}
                paddingLeft={10}
              >
                Valley Irrigation
              </MenuItem>
              <MenuItem
                as={Link}
                to={"https://www.valleyirrigation.com/icon10"}
                paddingLeft={20}
              >
                ICON 10
              </MenuItem>
              <MenuItem
                as={Link}
                to={"https://www.valleyirrigation.com/icon5"}
                paddingLeft={20}
              >
                ICON 5
              </MenuItem>
              <MenuItem
                as={Link}
                to={"https://www.valleyirrigation.com/agsense"}
              >
                Agsense Icon Link
              </MenuItem>
              <MenuItem
                as={Link}
                to={"https://www.netafim.co.za/"}
                paddingLeft={10}
              >
                Netafim
              </MenuItem>
            </Menu>
          </MenuList>
        </Menu>
      </Show>
      <Show above="lg">
        <List
          fontSize={{ lg: 13, xl: 20 }}
          paddingTop={2}
          display="flex"
          flex="d-flex"
        >
          {navItems.map((item) => (
            <ListItem
              paddingBottom={10}
              paddingTop={8}
              paddingX={3}
              key={item.label}
            >
              <Link to={item.link}>{item.label}</Link>
            </ListItem>
          ))}
          <Menu isOpen={mainMenu.isOpen}>
            <MenuButton
              as={Button}
              variant="unstyled"
              marginTop={{ lg: "22px", xl: "27px" }}
              onMouseEnter={mainMenu.onOpen}
              borderRadius={0}
              fontSize={{ lg: 13, xl: 20 }}
              rightIcon={
                <Icon position={"relative"} top={1}>
                  <ChevronDownIcon />
                </Icon>
              }
              fontWeight="normal"
            >
              Partners
            </MenuButton>
            <MenuList
              position={"relative"}
              top={"22px"}
              onMouseEnter={mainMenu.onOpen}
              onMouseLeave={mainMenu.onClose}
              borderRadius={0}
            >
              <Menu isOpen={subMenu.isOpen}>
                <MenuItem>
                  <MenuButton
                    onMouseEnter={subMenu.onOpen}
                    onMouseLeave={subMenu.onClose}
                    as={Link}
                    to={"https://www.valleyirrigation.com/"}
                  >
                    Valley Irrigation
                  </MenuButton>
                </MenuItem>
                <MenuList
                  onMouseEnter={subMenu.onOpen}
                  onMouseLeave={subMenu.onClose}
                  position={"relative"}
                  right={"230px"}
                  top={"-53px"}
                  borderRadius={0}
                >
                  <MenuItem
                    as={Link}
                    to={"https://www.valleyirrigation.com/icon10"}
                  >
                    ICON 10
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    to={"https://www.valleyirrigation.com/icon5"}
                  >
                    ICON 5
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    to={"https://www.valleyirrigation.com/agsense"}
                  >
                    Agsense Icon Link
                  </MenuItem>
                </MenuList>
                <MenuDivider></MenuDivider>
              </Menu>
              <MenuItem as={Link} to={"https://www.netafim.co.za/"}>
                Netafim
              </MenuItem>
            </MenuList>
          </Menu>
          <ListItem as={Link} to={"/contact"} paddingTop={8} paddingX={3}>
            Contact Us
          </ListItem>
        </List>
      </Show>
    </>
  );
};

export default NavigationList;
