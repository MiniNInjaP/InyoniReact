import { HStack, Heading } from "@chakra-ui/react";

interface Props {
  children: string;
}

const Banner = ({ children }: Props) => {
  return (
    <HStack
      justifyContent={"flex-end"}
      alignItems={"flex-end"}
      height={"90px"}
      backgroundColor={"#17733A"}
    >
      <Heading
        fontWeight={400}
        paddingBottom={4}
        paddingRight={300}
        color={"white"}
        fontSize={30}
      >
        {children}
      </Heading>
    </HStack>
  );
};

export default Banner;
