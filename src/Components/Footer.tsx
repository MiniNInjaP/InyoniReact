import {
  Box,
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
    <HStack border={0} flexDirection={"column"}>
      <Card
        borderRadius={0}
        paddingX={{ base: 0, lg: 0 }}
        color={"white"}
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={{ base: "center", md: "flex-start" }}
        backgroundColor={"#17733A"}
      >
        <CardBody
          paddingTop={{ base: 5, md: 8 }}
          lineHeight={{ base: 2, md: 5, lg: 6 }}
          paddingRight={{ base: 0, md: 10 }}
          border={0}
        >
          <Heading paddingBottom={2} fontSize={{ base: 12, md: 17, lg: 22 }}>
            Bussiness Information
          </Heading>
          <Heading fontWeight={400} fontSize={{ base: 9, md: 15, lg: 18 }}>
            Inyoni Africa Irrigation Specialists (Pty) Ltd
          </Heading>
          <Text fontSize={{ base: 7, md: 12, lg: 15 }}>
            Registration number 2004/033490/07
          </Text>
          <Heading
            paddingY={{ md: 1 }}
            fontWeight={400}
            fontSize={{ base: 9, md: 15, lg: 18 }}
          >
            Contact details & Web address
          </Heading>
          <Text fontSize={{ base: 7, md: 12, lg: 15 }} whiteSpace={"pre-wrap"}>
            {footerText}
          </Text>
        </CardBody>
        <Box width={{ base: 200, lg: 400 }}>
          <FormControl color="black" marginY={7}>
            <FormLabel fontSize={{ base: 12, md: 15, lg: 18 }} color={"white"}>
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
    </HStack>
  );
};
export default Footer;
