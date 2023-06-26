import { HStack, Heading } from "@chakra-ui/react";

interface Props {
  headerOne: string;
  headerTwo?: string;
  paddingLeft?: number;
  paddingYTwo?: number;
}

const Header = ({ headerOne, headerTwo, paddingYTwo, paddingLeft }: Props) => {
  return (
    <HStack marginY={5} marginX={{ base: "32px", lg: "100px" }}>
      <Heading
        marginRight={20}
        fontWeight={300}
        borderRadius={"5px"}
        paddingX={10}
        paddingY={2}
        color={"white"}
        backgroundColor="#17733A"
        width={"50%"}
      >
        {headerOne}
      </Heading>
      <Heading
        fontWeight={200}
        borderRadius={"5px"}
        paddingLeft={paddingLeft}
        paddingY={paddingYTwo}
        color={"white"}
        backgroundColor="#17733A"
        width={"50%"}
        fontSize={25}
      >
        {headerTwo}
      </Heading>
    </HStack>
  );
};

export default Header;
