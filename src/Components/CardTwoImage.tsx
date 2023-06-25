import { Box, Text,Image, Card, CardBody, Heading, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import Button from './Button';

interface Props {
    imageOne: string;
    imageTwo: string;
    heading: string;
    paragraph: string;
    buttonLink: string;
    buttonText: string;
    textColor:string;
    headingColor: string
  }

const CardTwoImage = ({
    imageOne,
    imageTwo,
    textColor,
    paragraph,
    heading,
    headingColor,
    buttonLink,
    buttonText,
  }: Props) => {
  return (
    <>
    <Card
      borderRadius={0}
      bg={"white"}
      paddingY={50}
      display={"flex"}
      paddingX={90}
      justifyContent={"space-between"}
      flexDir={"row"}
    >
      <CardBody marginTop={0} flexWrap={'wrap'}  paddingY={0} paddingRight={"5%"}>
        <Heading paddingLeft={10} fontSize={30} fontWeight={400} color={headingColor} marginBottom={3}>
          {heading}
        </Heading>
        <Text fontSize={17} whiteSpace={"pre-wrap"} color={textColor}>
          {paragraph}
        </Text>
        <Box marginTop={10}>
          <Link to={buttonLink}>
            <Button variant="primary">{buttonText}</Button>
          </Link>
        </Box>
      </CardBody>
      <HStack>
          <Image
            paddingRight={200}
            borderRadius={"5px"}
            overflow={"hidden"}
            maxWidth={"550px"}
            maxHeight={"415px"}
            src={imageOne}
          ></Image>
          <Image
            paddingRight={200}
            borderRadius={"5px"}
            overflow={"hidden"}
            maxWidth={"550px"}
            maxHeight={"415px"}
            src={imageTwo}
          ></Image>
      </HStack>
    </Card>
    </>
  )
}

export default CardTwoImage