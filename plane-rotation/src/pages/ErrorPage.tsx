import {
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Image,
  VStack,
  Center,
} from "@chakra-ui/react";
import { colourSystem, fontWeightSystem, typographySystem } from "../theme";
import Hand from "../assets/Hand.webp";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Center margin="auto" marginTop={10}>
      <Grid
        height="100%"
        templateAreas={`"image text"`}
        templateColumns={`"1fr 1fr"`}
        columnGap={10}
        gap={5}
        padding={5}
      >
        <GridItem area="image" width="100%">
          <Image src={Hand} alt="Hand Logo" borderRadius="lg" />
        </GridItem>
        <GridItem
          area="text"
          width="100%"
          justifyContent="space-between"
          verticalAlign="center"
          display="flex"
        >
          <Center>
            <VStack width="50vw" spacing={4}>
              <Heading
                fontSize={typographySystem.size_15}
                color={colourSystem.Accent.accent_3}
              >
                404
              </Heading>
              <Heading>UH OH! You're lost.</Heading>
              <Text>
                The page you are looking for does not exist. How you got here is
                a mystery. But you can click the button below to go back to the
                homepage.
              </Text>
              <Text padding={0}>
                This page will look nice in future Versions of the App, I
                promise :)
              </Text>
              <Link to="/">
                <Button
                  margin={5}
                  className="btn-primary"
                  fontWeight={fontWeightSystem.SemiBold}
                  fontSize={typographySystem.size_5}
                  size="lg"
                >
                  Home
                </Button>
              </Link>
            </VStack>
          </Center>
        </GridItem>
      </Grid>
    </Center>
  );
};

export default ErrorPage;
