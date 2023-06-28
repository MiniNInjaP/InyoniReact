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

interface Props {
  pageId: number;
}

const NavigationList = ({ pageId }: Props) => {
  const mainMenu = useDisclosure();
  const subMenu = useDisclosure();
  const navItems = [
    { id: 1, link: "/", label: "Home" },
    { id: 2, link: "/about", label: "About" },
    { id: 3, link: "/services", label: "Services" },
    { id: 4, link: "/industryassociations", label: "Industry Associations" },
    { id: 5, link: "/projects", label: "Projects" },
  ];

  return (
    <>
      <Show below="lg">
        <Menu>
          <MenuButton
            fontSize={20}
            marginRight={5}
            color={"black"}
            as={Button}
            variant={"unstyled"}
            leftIcon={<FaBars class="" color={"#17733A"} />}
          ></MenuButton>
          <MenuList
            color={"secondary.100"}
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
                paddingLeft={20}
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
            <MenuItem as={Link} to={"/contact"}>
              Contact Us
            </MenuItem>
          </MenuList>
        </Menu>
      </Show>
      <Show above="lg">
        <List
          color={"secondary.100"}
          fontSize={{ lg: 13, xl: 16, "2xl": 25 }}
          paddingTop={2}
          display="flex"
          flex="d-flex"
        >
          {navItems.map((item) =>
            item.id === pageId ? (
              <ListItem
                paddingBottom={10}
                paddingTop={8}
                paddingX={3}
                color={"primary.100"}
                fontWeight={600}
                key={item.label}
              >
                <Link to={item.link}>{item.label}</Link>
              </ListItem>
            ) : (
              <ListItem
                _hover={{ transform: "scale(1.2)", color: "primary.100" }}
                transition={"all 0.3s"}
                paddingBottom={10}
                paddingTop={8}
                paddingX={3}
                key={item.label}
              >
                <Link to={item.link}>{item.label}</Link>
              </ListItem>
            )
          )}
          <Menu isOpen={mainMenu.isOpen}>
            <Link to={"/partners"}>
              <MenuButton
                color={pageId === 2 ? "primary.100" : "secondary.100"}
                fontWeight={pageId === 2 ? "600" : "normal"}
                _hover={{
                  border: 0,
                  outline: 0,
                  transform: "scale(1.2)",
                  color: "primary.100",
                }}
                transition={"all 0.3s"}
                as={Button}
                variant="unstyled"
                marginTop={{ lg: "22px", xl: "25px", "2xl": "32px" }}
                onMouseEnter={mainMenu.onOpen}
                borderRadius={0}
                marginX={2}
                fontSize={{ lg: 13, xl: 16, "2xl": 25 }}
                rightIcon={
                  <Icon position={"relative"} top={1}>
                    <ChevronDownIcon />
                  </Icon>
                }
              >
                Partners
              </MenuButton>
            </Link>
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
                    target="_blank"
                    to={"https://www.valleyirrigation.com/"}
                  >
                    Valley Irrigation
                  </MenuButton>
                </MenuItem>
                <MenuList
                  onMouseEnter={subMenu.onOpen}
                  onMouseLeave={subMenu.onClose}
                  position={"relative"}
                  right={"150px"}
                  top={"-53px"}
                  borderRadius={0}
                >
                  <MenuItem
                    as={Link}
                    target="_blank"
                    to={"https://www.valleyirrigation.com/icon10"}
                  >
                    ICON 10
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    target="_blank"
                    to={"https://www.valleyirrigation.com/icon5"}
                  >
                    ICON 5
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    target="_blank"
                    to={"https://www.valleyirrigation.com/agsense"}
                  >
                    Agsense Icon Link
                  </MenuItem>
                </MenuList>
                <MenuDivider></MenuDivider>
              </Menu>
              <MenuItem
                target="_blank"
                as={Link}
                to={"https://www.netafim.co.za/"}
              >
                Netafim
              </MenuItem>
            </MenuList>
          </Menu>
          <ListItem
            fontSize={{ lg: 13, xl: 16, "2xl": 25 }}
            color={pageId === 7 ? "primary.100" : "secondary.100"}
            fontWeight={pageId === 7 ? "600" : "normal"}
            _hover={{ transform: "scale(1.2)", color: "primary.100" }}
            transition={"all 0.3s"}
            as={Link}
            to={"/contact"}
            paddingTop={8}
            paddingX={3}
          >
            Contact Us
          </ListItem>
        </List>
      </Show>
    </>
  );
};

export default NavigationList;
