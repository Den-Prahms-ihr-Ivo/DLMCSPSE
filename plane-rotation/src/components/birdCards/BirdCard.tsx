import {
  Button,
  ButtonGroup,
  CardBody,
  CardFooter,
  Divider,
  Stack,
  Card,
  Text,
  Image,
  Heading,
  HStack,
  Icon,
  Container,
  VStack,
  Tooltip,
} from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa6";
import { colourSystem, fontWeightSystem, typographySystem } from "../../theme";
import { Bird, BirdAction } from "../state-management/reducers/birdReducer";

interface BirdCardProps {
  angle2Threat: number;
  distance2Plane: number;
  horizontalDistance2Plane: number;
  altitude: number;
  azimuth: number;
  elevation: number;
  removeEvent: React.Dispatch<BirdAction>;
  bird: Bird;
}

const BirdCard = ({
  angle2Threat,
  distance2Plane,
  horizontalDistance2Plane,
  altitude,
  azimuth,
  elevation,
  removeEvent,
  bird,
}: BirdCardProps) => {
  return (
    <Card
      margin={3}
      maxW="xs"
      borderRadius="lg"
      // {/*bg="linear-gradient(217deg, #313131, #505070 100%)"*/ }
      bg={colourSystem.Background.foreground}
      boxShadow="rgba(252, 254, 255, 0.5) 0px 13px 27px -5px, rgba(19, 62, 83, 0.4) 0px 8px 16px -8px"
    >
      <Container
        position="absolute"
        top={0}
        padding={0}
        //        #ffb900, #ff7730)
        //backgroundImage="linear-gradient(to left top, #B572F6, #6262EA)"
        backgroundImage="linear-gradient(to left top, #ffb900, #ff7730)"
        backgroundBlendMode="screen"
        clipPath="polygon(0 0, 100% 0, 100% 85%, 0 100%)"
        width="100%"
        borderBottomRadius={0}
        height="60%"
        zIndex="1"
      />
      <Image
        src={bird.imageURL}
        alt={bird.name}
        borderTopRadius="lg"
        boxShadow="rgb(202, 93, 8) 0px 5px 15px;"
        margin={2}
        zIndex={2}
      />

      <CardBody paddingTop={0} paddingBottom={0} zIndex={2}>
        <Stack width="100%" spacing="3" paddingBottom={4}>
          <HStack marginTop={0} width="100%" justifyContent={"space-between"}>
            <Heading color={colourSystem.Text.light} size="lg">
              {bird.name}
            </Heading>
            <Tooltip
              hasArrow
              label={"" + angle2Threat + "° from the plane's X-Axis"}
              bg={colourSystem.Purple.front}
            >
              <HStack>
                <Container
                  transform={"rotate(" + angle2Threat + "deg)"}
                  background={colourSystem.Text.light}
                  padding="0"
                  width="20px"
                  height="20px"
                  alignContent={"center"}
                  textAlign={"center"}
                  margin={0}
                >
                  <Icon
                    marginTop="3px"
                    fontSize={typographySystem.size_3}
                    as={FaArrowUp}
                    color={colourSystem.Purple.back}
                  />
                </Container>

                <Text
                  color={colourSystem.Text.light}
                  fontSize={typographySystem.size_3}
                  fontWeight={fontWeightSystem.SemiBold}
                >
                  {angle2Threat}°
                </Text>
              </HStack>
            </Tooltip>
          </HStack>
        </Stack>
        {/*
        <Text
          color={colourSystem.Text.light}
          fontSize={typographySystem.size_2}
          paddingBottom={4}
        >
          laksjlkajlskdjaklsjdkljs
        </Text> */}
        <Container
          paddingTop={4}
          paddingBottom={2}
          height="80%"
          border="solid rgba(98, 98, 234, .3) 1.5px"
        >
          <HStack
            width="100%"
            paddingBottom={6}
            justifyContent={"space-around"}
          >
            <Tooltip
              hasArrow
              label={"Distance to plane"}
              bg={colourSystem.Purple.front}
            >
              <VStack spacing={0}>
                <Heading
                  color={colourSystem.Purple.back}
                  fontSize={typographySystem.size_8}
                  fontWeight={fontWeightSystem.SemiBold}
                  padding={0}
                >
                  {distance2Plane}
                </Heading>
                <Text
                  color={colourSystem.Text.secondary}
                  fontSize={typographySystem.size_3}
                  fontWeight={fontWeightSystem.SemiBold}
                  padding={0}
                >
                  Meter
                </Text>
              </VStack>
            </Tooltip>

            <Tooltip
              hasArrow
              label={"Horizontal distance to plane"}
              bg={colourSystem.Purple.front}
            >
              <VStack spacing={0}>
                <Heading
                  color={colourSystem.Purple.back}
                  fontSize={typographySystem.size_8}
                  fontWeight={fontWeightSystem.SemiBold}
                  padding={0}
                >
                  {horizontalDistance2Plane}
                </Heading>
                <Text
                  color={colourSystem.Text.secondary}
                  fontSize={typographySystem.size_3}
                  fontWeight={fontWeightSystem.SemiBold}
                  padding={0}
                >
                  Meter
                </Text>
              </VStack>
            </Tooltip>
          </HStack>

          <HStack width="100%" justifyContent={"space-around"}>
            {/*<Tooltip
              hasArrow
              label={"Azimuth angle from plane to bird"}
              bg={colourSystem.Purple.front}
            >
              <VStack spacing={0}>
                <Heading
                  color={colourSystem.Purple.back}
                  fontSize={typographySystem.size_6}
                  fontWeight={fontWeightSystem.SemiBold}
                  padding={0}
                >
                  {azimuth}
                </Heading>
                <Text
                  color={colourSystem.Text.secondary}
                  fontSize={typographySystem.size_2}
                  fontWeight={fontWeightSystem.SemiBold}
                  padding={0}
                >
                  Azimuth
                </Text>
              </VStack>
            </Tooltip>*/}

            <Tooltip
              hasArrow
              label={"Elevation angle from plane to bird"}
              bg={colourSystem.Purple.front}
            >
              <VStack spacing={0}>
                <Heading
                  color={colourSystem.Purple.back}
                  fontSize={typographySystem.size_6}
                  fontWeight={fontWeightSystem.SemiBold}
                  padding={0}
                >
                  {elevation ? elevation : "-"}
                </Heading>
                <Text
                  color={colourSystem.Text.secondary}
                  fontSize={typographySystem.size_2}
                  fontWeight={fontWeightSystem.SemiBold}
                  padding={0}
                >
                  Degree
                </Text>
              </VStack>
            </Tooltip>

            <Tooltip hasArrow label={"Altitude"} bg={colourSystem.Purple.front}>
              <VStack spacing={0}>
                <Heading
                  color={colourSystem.Purple.back}
                  fontSize={typographySystem.size_6}
                  fontWeight={fontWeightSystem.SemiBold}
                  padding={0}
                >
                  {altitude}
                </Heading>
                <Text
                  color={colourSystem.Text.secondary}
                  fontSize={typographySystem.size_2}
                  fontWeight={fontWeightSystem.SemiBold}
                  padding={0}
                >
                  Meter
                </Text>
              </VStack>
            </Tooltip>
          </HStack>
        </Container>
      </CardBody>

      <CardFooter padding={5} justifyContent={"flex-end"} zIndex="2">
        <ButtonGroup spacing="2">
          <Button
            variant="ghost"
            colorScheme="blue"
            color={colourSystem.Purple.back}
            _hover={{ bg: "rgba(98, 98, 234, .2)" }}
            onClick={() => removeEvent({ type: "REMOVE", id: bird.id })}
          >
            Remove
          </Button>
        </ButtonGroup>
      </CardFooter>
      {/*<Container
        position="absolute"
        bottom={0}
        padding={0}
        //        #ffb900, #ff7730)
        //backgroundImage="linear-gradient(to left top, #B572F6, #6262EA)"
        backgroundImage="linear-gradient(to left top, #ffb900, #ff7730)"
        backgroundBlendMode="screen"
        clipPath="polygon(0 60%, 100% 0%, 100% 100%, 0% 100%)"
        width="100%"
        borderTopRadius={0}
        height="20%"
        zIndex="0"
      />*/}
    </Card>
  );
};

export default BirdCard;
