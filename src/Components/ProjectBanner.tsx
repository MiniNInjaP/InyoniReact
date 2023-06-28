import { HStack, Heading } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ProjectBanner = ({ children }: Props) => {
  return (
    <HStack
      justifyContent={"flex-start"}
      alignItems={"flex-end"}
      height={"90px"}
      backgroundColor={"primary.100"}
    >
      <Heading
        fontWeight={400}
        paddingBottom={4}
        paddingLeft={{ base: 10, md: 20, lg: "300px" }}
        color={"white"}
        fontSize={30}
      >
        {children}
      </Heading>
    </HStack>
  );
};

export default ProjectBanner;
