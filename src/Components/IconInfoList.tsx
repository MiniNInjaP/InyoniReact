import { Button, HStack, Icon, Link, Show, Text } from "@chakra-ui/react";
import { FaFacebookF, FaPhone, FaEnvelope } from "react-icons/fa";

const IconInfoList = () => (
  <HStack
    paddingTop={1}
    wrap="wrap"
    spacing={1}
    fontSize={{ base: 14, md: 12 }}
    marginLeft={{ md: "10vw", lg: "20vw" }}
    justifyContent={{ base: "center", md: "center", lg: "flex-start" }}
  >
    <Icon as={FaPhone} color="primary.100" />
    <Text color="primary.100">Tel: +27 13 712 2175 |</Text>
    <Text color="primary.100"> Fax: +27 13 712 4198</Text>
    <Button
      margin={0}
      paddingLeft={2}
      style={{ height: "20px" }}
      variant="unstyled"
      fontSize={{ base: 14, md: 12 }}
      color="primary.100"
      textAlign={"center"}
      leftIcon={<Icon as={FaEnvelope} />}
    >
      info@inyoniafrica.co.za
    </Button>
    <Show above="sm">
      <Link target="_blank" href="https://facebook.com/InyoniAfrica/">
        <Button
          style={{ height: "20px" }}
          as="a"
          paddingLeft={2}
          fontSize={{ base: 14, md: 14 }}
          variant="unstyled"
          leftIcon={<Icon as={FaFacebookF} color="primary.100" />}
        ></Button>
      </Link>
    </Show>
  </HStack>
);

export default IconInfoList;
