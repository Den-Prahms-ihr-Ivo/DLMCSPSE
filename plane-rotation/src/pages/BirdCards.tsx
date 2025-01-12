import { useContext } from "react";
import BirdCard from "../components/birdCards/BirdCard";
import BirdContext from "../components/state-management/context/birdContext";
import PlaneContext from "../components/state-management/context/planeContext";
import { Container, Button, SimpleGrid, Stack } from "@chakra-ui/react";
import { colourSystem } from "../theme";

function BirdCards() {
  const { birdsWithErrors, dispatch: dispatchBird } = useContext(BirdContext);
  const { birds } = birdsWithErrors;
  const { planeWithErrors, dispatch: dispatchPlane } = useContext(PlaneContext);
  const { plane } = planeWithErrors;

  return (
    <>
      {birds.length === 0 && (
        <Container width="100%" height="100%" alignContent="center">
          <Button
            bg={colourSystem.Purple.back}
            color={colourSystem.Text.light}
            onClick={() => {
              dispatchBird({ type: "ADD", plane: plane, x: 0, y: 0, z: 0 });
            }}
          >
            Add Threat
          </Button>
        </Container>
      )}
      {birds.length > 0 && (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
          spacing={6}
          padding="10px"
        >
          {birds.map((bird) => (
            //plane.getAngle2Plane(bird.location)
            <BirdCard
              key={bird.id}
              bird={bird}
              angle2Threat={plane.getAngle2Plane(bird.location)}
              distance2Plane={plane.getDistance2Plane(bird.location)}
              horizontalDistance2Plane={plane.getHorizontalDistance2Plane(
                bird.location
              )}
              azimuth={plane.getAzimuth2Threat(bird.location)}
              elevation={plane.getElevation2Threat(bird.location)}
              altitude={bird.location.z}
              removeEvent={dispatchBird}
            />
          ))}
        </SimpleGrid>
      )}
    </>
  );
}

export default BirdCards;
