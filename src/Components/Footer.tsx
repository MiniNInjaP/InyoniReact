import {
  Card,
  CardBody,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { footerText } from "../TextInput/TextContent";
import Button from "./Button";

const Footer = () => {
  return (
    <HStack
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={"space-evenly"}
      alignItems={"center"}
    >
      <Card
        borderRadius={0}
        paddingLeft={1}
        boxShadow={0}
        color={"white"}
        flexDir={{ base: "column", md: "row" }}
        backgroundColor={"primary.100"}
      >
        <CardBody
          paddingTop={{ base: 5, md: 0 }}
          paddingBottom={0}
          lineHeight={{ base: 2, md: 5, lg: 6 }}
        >
          <Heading
            paddingBottom={{ base: 1, md: 10 }}
            fontSize={{ base: 12, md: 17, lg: 20 }}
          >
            Bussiness Information
          </Heading>
          <Heading fontWeight={400} fontSize={{ base: 9, md: 15, lg: 15 }}>
            Inyoni Africa Irrigation Specialists (Pty) Ltd
          </Heading>
          <Text fontSize={{ base: 7, md: 12, lg: 12 }}>
            Registration number 2004/033490/07
          </Text>
          <Heading fontWeight={400} fontSize={{ base: 9, md: 15, lg: 15 }}>
            Contact details & Web address
          </Heading>
          <Text fontSize={{ base: 7, md: 12, lg: 12 }} whiteSpace={"pre-wrap"}>
            {footerText}
          </Text>
        </CardBody>
      </Card>
      <FormControl
        width={{ base: 200, lg: 400 }}
        color="black"
        paddingTop={{ base: 0, md: 7 }}
        paddingBottom={5}
      >
        <FormLabel fontSize={{ base: 12, md: 15, lg: 20 }} color={"white"}>
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
    </HStack>
  );
};
export default Footer;
