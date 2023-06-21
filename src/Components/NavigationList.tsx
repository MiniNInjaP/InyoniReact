import { List, ListItem } from "@chakra-ui/react";

const NavigationList = () => {
  return (
    <List display="flex" flex="d-flex">
      <ListItem padding={1}>Home</ListItem>
      <ListItem padding={1}>About</ListItem>
      <ListItem padding={1}>Services</ListItem>
      <ListItem padding={1}>Industry Associations</ListItem>
      <ListItem padding={1}>Projects</ListItem>
      <ListItem padding={1}>Partners</ListItem>
      <ListItem padding={1}>Contact Us</ListItem>
    </List>
  );
};

export default NavigationList;
