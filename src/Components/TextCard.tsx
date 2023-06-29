import { Card, Text, CardBody, Heading, HStack, Image } from "@chakra-ui/react";

interface Props {
  image?: string;
  headingOne?: string;
  headingTwo?: string;
  paragraphOne: string;
  paragraphTwo?: string;
  textColor: string;
  headingColor: string;
  showImage: boolean;
}

const TextCard = ({
  image,
  textColor,
  paragraphOne,
  paragraphTwo,
  headingOne,
  headingTwo,
  headingColor,
  showImage,
}: Props) => {
  return (
    <Card boxShadow={0}>
      <CardBody marginTop={"1%"} paddingX={"6%"}>
        <HStack
          spacing={"11%"}
          flexDirection={{ base: "column", lg: "row" }}
          alignItems={"flex-start"}
        >
          <HStack
            width={{ base: "auto", lg: paragraphTwo ? "50%" : "auto" }}
            flexDirection={"column"}
            alignItems={"flex-start"}
            marginBottom={{ base: 5, lg: 0 }}
          >
            {headingOne && (
              <Heading
                fontSize={{ base: 20, md: 30, lg: 30 }}
                fontWeight={400}
                color={headingColor}
                marginBottom={5}
              >
                {headingOne}
              </Heading>
            )}
            <Text
              fontSize={{ base: 15, md: 15, lg: 17 }}
              whiteSpace={"pre-wrap"}
              color={textColor}
            >
              {paragraphOne}
            </Text>
          </HStack>
          {paragraphTwo && (
            <HStack
              width={{ base: "auto", lg: "50%" }}
              flexDirection={"column"}
              alignItems={"flex-start"}
              marginBottom={{ base: 5, lg: 0 }}
            >
              {headingTwo && (
                <Heading
                  fontSize={{ base: 20, md: 30, lg: 30 }}
                  fontWeight={400}
                  color={headingColor}
                  marginBottom={3}
                >
                  {headingTwo}
                </Heading>
              )}
              <Text
                bg={"gray.100"}
                fontSize={{ base: 15, md: 15, lg: 17 }}
                whiteSpace={"pre-wrap"}
                color={textColor}
              >
                {paragraphTwo}
              </Text>
              {showImage && (
                <Image
                  src={image}
                  width={{ base: "200px", md: "400px", lg: "500px" }}
                  marginRight={"200px"}
                ></Image>
              )}
            </HStack>
          )}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default TextCard;
