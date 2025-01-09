import { Button, Center, Container, Grid, GridItem } from "@chakra-ui/react";
import { colourSystem } from "../theme";
import UpperPanel from "./UpperPanel";
import Compass from "./compass/Compass";
import PlaneDiagram from "./diagram/planeDiagram";
import { useContext } from "react";
import RedrawContext from "./state-management/context/redrawContext";
import PlaneContext from "./state-management/context/planeContext";

const MainPage = () => {
  // TODO: WIRING :(
  const { trigger: redrawTrigger, dispatch: dispatchRedraw } =
    useContext(RedrawContext);

  const { planeWithErrors, dispatch: dispatchPlane } = useContext(PlaneContext);

  return (
    <Grid
      height="100%"
      templateAreas={`"inputField inputField" "diagram compass"`}
      gap={2}
    >
      <GridItem marginTop={4} marginBottom={1} area="inputField">
        <Center height="100%" width="100%">
          <Container
            bg={colourSystem.Background.foreground}
            variant="with-shadow"
          >
            <UpperPanel />
          </Container>
        </Center>
      </GridItem>
      <GridItem
        minWidth="540px"
        marginTop={1}
        marginRight={1}
        marginBottom={4}
        area="diagram"
      >
        <Center height="100%" width="100%">
          <Container
            bg={colourSystem.Background.foreground}
            variant="with-shadow"
          >
            <Center>
              <Button
                onClick={() => {
                  dispatchPlane({ type: "ROTATE", yaw: 45, pitch: 0, roll: 0 });
                  // React erkennt nicht, dass sich Plant geändert hat und triggert so kein redraw ...
                  // Am simpelsten war es einfach eine Laufvariable hinzuzufügen, die dann ein redraw triggert. :)
                  dispatchRedraw({ type: "TRIGGER" });
                }}
              >
                Test
              </Button>
              <PlaneDiagram tmp={redrawTrigger} />
            </Center>
          </Container>
        </Center>
      </GridItem>
      <GridItem
        minHeight="430px"
        marginTop={1}
        marginLeft={1}
        marginBottom={4}
        area="compass"
      >
        <Center height="100%" width="100%">
          <Container
            bg={colourSystem.Background.foreground}
            variant="with-shadow"
          >
            <Center>
              <Compass />
            </Center>
          </Container>
        </Center>
      </GridItem>
    </Grid>
  );
};

export default MainPage;
