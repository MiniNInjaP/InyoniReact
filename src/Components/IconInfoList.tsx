import { Button, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { FaFacebookF, FaPhone, FaEnvelope } from "react-icons/fa";

const IconInfoList = () => (
  <HStack fontSize="xs" marginLeft="20vw">
    <Icon as={FaPhone} color="green" />
    <Text color="green">Tel: +27 13 712 2175</Text>
    <Text>| </Text>
    <Text>Fax: +27 13 712 4198</Text>
    <Button
      paddingLeft={2}
      variant="unstyled"
      fontSize="xs"
      color="green"
      leftIcon={<Icon as={FaEnvelope} />}
    >
      inyoniAfrica.co.za
    </Button>

    <Link target="_blank" href="https://facebook.com/InyoniAfrica/">
      <Button
        fontSize="sm"
        variant="unstyled"
        leftIcon={<Icon as={FaFacebookF} color="green" />}
      ></Button>
    </Link>
  </HStack>
);

export default IconInfoList;
