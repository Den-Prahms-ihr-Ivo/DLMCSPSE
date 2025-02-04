import {
  Center,
  Text,
  Grid,
  GridItem,
  Image,
  Container,
  VStack,
  Heading,
} from "@chakra-ui/react";
import eichhorn from "../../assets/Eichhorn.webp";
import hand from "../../assets/Hand.webp";
import { fontWeightSystem, typographySystem } from "../../theme";

const Home = () => {
  return (
    <Container display="flex" width="100%">
      <Container
        margin="auto"
        height="100%"
        justifyContent="center"
        alignItems="center"
        display="flex"
        paddingX={2}
        paddingY={5}
      >
        <Container
          variant="with-shadow"
          backgroundColor="#fff"
          overflow="hidden"
        >
          <Grid
            height="100%"
            width="100%"
            margin="auto"
            templateAreas={`"heading heading" "content images"`}
            templateColumns="1fr 400px"
            gap={0}
          >
            <GridItem area="heading" margin={5}>
              <Heading
                textAlign="center"
                fontWeight={fontWeightSystem.Bold}
                fontSize={typographySystem.size_10}
                padding={3}
              >
                Paper Plane Project Pitch
              </Heading>
            </GridItem>
            <GridItem area="content">
              <VStack gap={6}>
                <Text fontWeight="bold">
                  Do you know the feeling, you are sitting at your desk and the
                  fear to be accidentally mistaken for a gang member slowly
                  starts to rise because you keep throwing gang signs trying to
                  visualise rotations of coordinate systems with your hands? Oh
                  boy, do I have a solution for you!
                </Text>

                <Text>
                  Not only does this app solve the perfectly rational fear of
                  being unintentionally shot as part of a durg cartell at work.
                  No, it even helps you visualise the effect of translations and
                  rotations in relation to fixed points in space.
                </Text>

                <Text>
                  The visualisation of rotations of the planes axes is fairly
                  straight forward. However, it becomes far more difficult to
                  envision the effect on the relation of a point somewhere on
                  the plane to another point in space. That’s why I decided to
                  crew the plane with a plucky little squirrle trying to
                  navigate the dangerous skies full of vicious birds of prey.
                  All relations have the squirrels head looking straight ahead
                  as the center of their calculations.
                </Text>
                <Image width="400px" src={hand} />
              </VStack>
            </GridItem>
            <GridItem
              area="images"
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              <Center>
                <Image
                  transform="translateY(-30px)"
                  width="400px"
                  display="block"
                  src={eichhorn}
                />
              </Center>
            </GridItem>
          </Grid>
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
