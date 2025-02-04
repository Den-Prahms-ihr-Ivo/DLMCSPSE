/**
 * Structure of the upper panel of the main page.
 */
import {
  Text,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Switch,
  VStack,
  Center,
  useToast,
  AvatarGroup,
} from "@chakra-ui/react";

// Interfaces
import Bird from "./Bird";

// Fields for User Input
import PlaneRotationInput from "./upperPanel/PlaneRotationInput";
import PlaneTranslationInput from "./upperPanel/PlaneTranslationInput";
import ThreatInput from "./upperPanel/ThreatInput";
import MoveThreatInput from "./upperPanel/MoveThreatInput";

// Customising Styles
import { colourSystem, fontWeightSystem, typographySystem } from "../theme";

// Context
import { useContext, useEffect, useRef } from "react";
import BirdContext from "./state-management/context/birdContext";
import PlaneContext from "./state-management/context/planeContext";
import RedrawContext from "./state-management/context/redrawContext";
import ShowCsContext from "./state-management/context/showCSSystem";

const UpperPanel = () => {
  const { birdsWithErrors, dispatch: dispatchBird } = useContext(BirdContext);
  const { birds, error: birdError } = birdsWithErrors;
  const { planeWithErrors, dispatch: dispatchPlane } = useContext(PlaneContext);
  const { plane, error: planeError } = planeWithErrors;

  const { trigger, dispatch: dispatchRedraw } = useContext(RedrawContext);
  const { toggle: showCSToggle, dispatch: dispatchshowCSToggle } =
    useContext(ShowCsContext);

  // For Error Toasts
  const toast = useToast();

  // References for User Input
  const newThreatRefX = useRef<HTMLInputElement>(null);
  const newThreatRefY = useRef<HTMLInputElement>(null);
  const newThreatRefZ = useRef<HTMLInputElement>(null);

  const translatePlaneRefX = useRef<HTMLInputElement>(null);
  const translatePlaneRefY = useRef<HTMLInputElement>(null);
  const translatePlaneRefZ = useRef<HTMLInputElement>(null);

  const translateBirdsRefX = useRef<HTMLInputElement>(null);
  const translateBirdsRefY = useRef<HTMLInputElement>(null);
  const translateBirdsRefZ = useRef<HTMLInputElement>(null);

  const rotatePlaneRefYaw = useRef<HTMLInputElement>(null);
  const rotatePlaneRefPitch = useRef<HTMLInputElement>(null);
  const rotatePlaneRefRoll = useRef<HTMLInputElement>(null);

  // maximum number of birds that shall be shown in the upper panel
  const showOnlyNBirds = 5;

  // Was there an error adding Birds?
  useEffect(() => {
    if (birdError) {
      toast({
        title: birdError.title,
        description: birdError.description,
        status: birdError.status,
        duration: 9000,
        isClosable: true,
      });
    }
    if (planeError) {
      toast({
        title: planeError.title,
        description: planeError.description,
        status: planeError.status,
        duration: 9000,
        isClosable: true,
      });
    }
  }, [birdError, planeError]);

  return (
    <Grid
      height="100%"
      templateAreas={`"planeRotation addThreat" "planeTranslation moveThreat"`}
      templateColumns={`"1fr 1fr" "1fr 1fr"`}
      columnGap={10}
      gap={0}
    >
      <GridItem area="planeRotation" width="100%">
        <PlaneRotationInput
          rotatePlaneRefRoll={rotatePlaneRefRoll}
          rotatePlaneRefPitch={rotatePlaneRefPitch}
          rotatePlaneRefYaw={rotatePlaneRefYaw}
        />
        <Flex width="100%" justifyContent="flex-end">
          <Button
            className="btn-secondary"
            fontWeight={fontWeightSystem.SemiBold}
            fontSize={typographySystem.size_2}
            size="sm"
            onClick={() => {
              dispatchPlane({
                type: "ROTATE",
                yaw: Number(rotatePlaneRefYaw.current?.value) % 360,
                pitch: Number(rotatePlaneRefPitch.current?.value) % 360,
                roll: Number(rotatePlaneRefRoll.current?.value) % 360,
              });
            }}
          >
            Rotate Plane
          </Button>
        </Flex>
      </GridItem>
      <GridItem area="planeTranslation" width="100%">
        <VStack paddingBottom={4} height="100%" justifyContent="space-between">
          <PlaneTranslationInput
            translatePlaneRefX={translatePlaneRefX}
            translatePlaneRefY={translatePlaneRefY}
            translatePlaneRefZ={translatePlaneRefZ}
          />
          <Flex paddingBottom={3} width="100%" justifyContent="flex-start">
            <Center>
              <Text
                paddingRight={3}
                fontSize={typographySystem.size_2}
                color={colourSystem.Text.secondary}
              >
                Hide Coordinate System?
              </Text>
            </Center>
            <Switch
              colorScheme="teal"
              checked={showCSToggle}
              onChange={() => {
                dispatchshowCSToggle({ type: "TOGGLE" });
              }}
            />
          </Flex>
          <Flex width="100%" justifyContent="space-between">
            <Button
              className="btn-tertiary"
              fontWeight={fontWeightSystem.SemiBold}
              fontSize={typographySystem.size_2}
              size="sm"
              onClick={() => {
                dispatchPlane({
                  type: "RESET",
                });
                dispatchRedraw({ type: "TRIGGER" });
              }}
            >
              Reset Plane
            </Button>
            <Button
              className="btn-secondary"
              fontWeight={fontWeightSystem.SemiBold}
              fontSize={typographySystem.size_2}
              size="sm"
              onClick={() => {
                dispatchPlane({
                  type: "TRANSLATE",
                  x: Number(translatePlaneRefX.current?.value),
                  y: Number(translatePlaneRefY.current?.value),
                  z: Number(translatePlaneRefZ.current?.value),
                });
                dispatchRedraw({ type: "TRIGGER" });
              }}
            >
              Move Plane
            </Button>
          </Flex>
        </VStack>
      </GridItem>
      <GridItem area="addThreat" width="100%">
        <VStack paddingBottom={0} height="100%" justifyContent="space-between">
          <ThreatInput
            newThreatRefX={newThreatRefX}
            newThreatRefY={newThreatRefY}
            newThreatRefZ={newThreatRefZ}
          />
          <Flex width="100%" justifyContent="flex-end">
            <Button
              className="btn-secondary"
              fontWeight={fontWeightSystem.SemiBold}
              fontSize={typographySystem.size_2}
              size="sm"
              onClick={() => {
                dispatchBird({
                  type: "ADD",
                  x: Number(newThreatRefX.current?.value),
                  y: Number(newThreatRefY.current?.value),
                  z: Number(newThreatRefZ.current?.value),
                  plane: plane,
                });
              }}
            >
              Add Threat
            </Button>
          </Flex>
        </VStack>
      </GridItem>
      <GridItem area="moveThreat" width="100%">
        <VStack paddingBottom={4} height="100%" justifyContent="space-between">
          <MoveThreatInput
            translateBirdsRefX={translateBirdsRefX}
            translateBirdsRefY={translateBirdsRefY}
            translateBirdsRefZ={translateBirdsRefZ}
          />
          <HStack width="100%" justifyContent="space-between">
            <AvatarGroup
              size="lg"
              maxWidth="200px"
              max={showOnlyNBirds}
              spacing={-5}
            >
              {birds.map((bird) => (
                // Du darfst maximal 5 Vögel anzeigen
                <Bird
                  key={bird.id}
                  avatar={bird.thumbnailURL}
                  onSelect={() => {
                    dispatchBird({ type: "SELECT", id: bird.id });
                  }}
                  onDelete={() => {
                    dispatchBird({ type: "REMOVE", id: bird.id });
                  }}
                  isSelected={bird.isSelected}
                  highlightColor={bird.color}
                  birdName={bird.name}
                />
              ))}
            </AvatarGroup>


            <Button
              className="btn-secondary"
              fontWeight={fontWeightSystem.SemiBold}
              fontSize={typographySystem.size_2}
              size="sm"
              onClick={() => {
                dispatchBird({
                  type: "MOVE",
                  x: Number(translateBirdsRefX.current?.value),
                  y: Number(translateBirdsRefY.current?.value),
                  z: Number(translateBirdsRefZ.current?.value),
                  birds: birds,
                });
              }}
            >
              Move Threat
            </Button>
          </HStack>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default UpperPanel;
