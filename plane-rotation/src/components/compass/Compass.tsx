import { Box, Center, Text, Tooltip, VStack } from "@chakra-ui/react";
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
import { multiply } from "../../math/matrices";
// "#f64851"
// #39C656
// #0686FF

function getBirdThreat(plane: Plane, bird: Bird): JSX.Element {
  /**
   * Return either a near Threat at the corresponding location if the bird is close
   * or a far threat indicator, if the bird is further away than 15m
   */
  const hzDist = plane.getHorizontalDistance2Plane(bird.location);

  if (hzDist >= 14)
    return (
      <CompassThreatFar
        key={bird.id}
        degree={plane.getAngle2Plane(bird.location)}
        threatColor={bird.color}
      />
    );
  else {
    let x_off =
      Math.round(
        Math.cos((plane.getAngle2Plane(bird.location) * Math.PI) / 180) * 100
      ) / 100;
    let y_off =
      Math.round(
        Math.sin((plane.getAngle2Plane(bird.location) * Math.PI) / 180) * 100
      ) / 100;

    console.log(x_off);
    console.log(y_off);
    //x_off = x_off < 0.2 ? x_off + 0.5 * Math.sign(x_off) : x_off;
    //y_off = y_off < 0.2 ? y_off + 0.5 * Math.sign(y_off) : y_off;
    const multiplier = hzDist < 6 ? 4 : 3;

    return (
      <CompassThreatNear
        key={bird.id}
        offsetX={y_off * (multiplier * hzDist)}
        offsetY={x_off * -(multiplier * hzDist)}
        threatColor={bird.color}
        birdImage={bird.thumbnailURL}
      />
    );
  }
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
                {Math.round(
                  plane.getHorizontalDistance2Plane(selectedBird.location) * 10
                ) / 10}
                m
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
                {Math.round(
                  ((360 + plane.getAngle2Plane(selectedBird.location)) % 360) *
                    10
                ) / 10}
                °
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
