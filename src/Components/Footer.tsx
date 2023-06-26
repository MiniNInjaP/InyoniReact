import {
  Box,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { footerText } from "../TextInput/TextContent";

import Button from "./Button";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Card
        borderRadius={0}
        paddingX={{ base: 0, lg: 200 }}
        color={"white"}
        flexDir={{ base: "column", lg: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        backgroundColor={"#17733A"}
      >
        <CardBody>
          <Heading paddingBottom={5}>Bussiness Information</Heading>
          <Heading fontWeight={400} fontSize={15}>
            Inyoni Africa Irrigation Specialists (Pty) Ltd
          </Heading>
          <Text lineHeight={8}>Registration number 2004/033490/07</Text>
          <Heading fontWeight={400} fontSize={15}>
            Contact details & Web address
          </Heading>
          <Text lineHeight={8} whiteSpace={"pre-wrap"}>
            {footerText}
          </Text>
        </CardBody>
        <Box width={500}>
          <FormControl color="black" marginY={7}>
            <FormLabel fontSize={20} color={"white"}>
              Get in Touch
            </FormLabel>
            <HStack>
              <Input
                borderRadius={0}
                bgColor={"#FFF"}
                type="text"
                placeholder="Name"
              ></Input>
              <Input
                borderRadius={0}
                bgColor={"#FFF"}
                type="email"
                placeholder="Email Address"
              ></Input>
            </HStack>
            <Textarea
              bgColor={"#FFF"}
              height={150}
              borderRadius={0}
              marginY={2}
              placeholder="Message"
            />
            <HStack justifyContent={"flex-end"}>
              <Button variant="secondary">Submit</Button>
            </HStack>
          </FormControl>
        </Box>
      </Card>
      <HStack
        paddingRight={200}
        paddingLeft={210}
        justifyContent={"space-between"}
        borderRadius={0}
        bgColor={"rgba(0,0,0,0.8)"}
      >
        <Text paddingRight={5} color={"white"}>
          Copyrights Inyoni Africa (PTY)Ltd.
        </Text>
        <Link target="_blank" to={"https://www.facebook.com/InyoniAfrica/"}>
          <IconButton
            aria-label="Facebook-Link"
            icon={<FaFacebookF />}
          ></IconButton>
        </Link>
      </HStack>
    </>
  );
};
export default Footer;
