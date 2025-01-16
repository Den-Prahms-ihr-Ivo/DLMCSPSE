import { Box, Center, Text, VStack } from "@chakra-ui/react";
import CompassBG from "./CompassBG";
import CompassTriangle from "./CompassTriangle";
import CompassThreatFar from "./CompassThreatFar";
import CompassShadow from "./CompassShadow";
import CompassThreatNear from "./CompassThreatNear";

import crow from "../../assets/birds/crow.webp";
import { colourSystem, fontWeightSystem, typographySystem } from "../../theme";
import { useContext } from "react";
import BirdContext from "../state-management/context/birdContext";
import PlaneContext from "../state-management/context/planeContext";
import { Bird } from "../state-management/reducers/birdReducer";
import { Plane } from "../diagram/plane";
// "#f64851"
// #39C656
// #0686FF

function getBirdThreat(plane: Plane, bird: Bird): JSX.Element {
  /**
   * Return either a near Threat at the corresponding location if the bird is close
   * or a far threat indicator, if the bird is further away than 15m
   */
  if (true)
    return (
      <CompassThreatFar
        degree={plane.getAngle2Plane(bird.location)}
        threatColor="#0686FF"
      />
    );
  else
    return (
      <CompassThreatNear
        offsetX={40}
        offsetY={0}
        threatColor="#0686FF"
        birdImage={crow}
      />
    );
}

const Compass = () => {
  const { birdsWithErrors, dispatch: dispatchBird } = useContext(BirdContext);
  const { birds, error: birdError } = birdsWithErrors;
  const { planeWithErrors, dispatch: dispatchPlane } = useContext(PlaneContext);
  const { plane, error: planeError } = planeWithErrors;

  const selectedBird = birds.find((bird) => bird.isSelected);

  return (
    <Box padding={4} position="relative" width="400px" height="400px">
      <CompassShadow />
      <CompassBG degree={plane.getAngle2North()} />
      <CompassTriangle />

      {birds.map((bird) => getBirdThreat(plane, bird))}

      {selectedBird && (
        <Box position="absolute" zIndex="999" right="0px" bottom="10px">
          <Center>
            <VStack gap={0}>
              <Text
                fontSize={typographySystem.size_6}
                fontWeight={fontWeightSystem.SemiBold}
                color={colourSystem.Accent.accent_1}
              >
                {plane.getHorizontalDistance2Plane(selectedBird.location)}m
              </Text>
              <Text
                fontSize={typographySystem.size_2}
                fontWeight={fontWeightSystem.SemiBold}
                color={colourSystem.Text.dark}
              >
                to {selectedBird.name}
              </Text>
            </VStack>
          </Center>
        </Box>
      )}
      {selectedBird && (
        <Box position="absolute" zIndex="999" left="0px" bottom="10px">
          <Center>
            <VStack gap={0}>
              <Text
                fontSize={typographySystem.size_2}
                fontWeight={fontWeightSystem.SemiBold}
                color={colourSystem.Text.secondary}
              >
                {selectedBird.name} at
              </Text>
              <Text
                fontSize={typographySystem.size_6}
                fontWeight={fontWeightSystem.SemiBold}
                color={colourSystem.Accent.accent_1}
              >
                {plane.getAngle2Plane(selectedBird.location)}°
              </Text>
              <Text
                fontSize={typographySystem.size_2}
                fontWeight={fontWeightSystem.SemiBold}
                color={colourSystem.Text.secondary}
              >
                from Plane
              </Text>
            </VStack>
          </Center>
        </Box>
      )}
    </Box>
  );
};

export default Compass;
