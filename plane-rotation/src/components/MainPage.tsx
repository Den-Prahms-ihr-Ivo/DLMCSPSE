/**
 * The structure of the main page arranging the sub components.
 */
import { Center, Container, Grid, GridItem } from "@chakra-ui/react";
import { colourSystem } from "../theme";
import UpperPanel from "./UpperPanel";
import Compass from "./compass/Compass";
import PlaneDiagram from "./diagram/planeDiagram";
import { useContext } from "react";
import RedrawContext from "./state-management/context/redrawContext";

const MainPage = () => {
  // The redraw is nedded, because the plane stays the same instance and
  // react does not trigger a redraw if properties on a class change.
  // A workaround is using this dummy counter to trigger a redraw.
  const { trigger: redrawTrigger, dispatch: dispatchRedraw } =
    useContext(RedrawContext);

  return (
    <Grid
      height="100%"
      templateAreas={`"inputField inputField" "diagram compass"`}
      gap={2}
      paddingBottom={2}
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
        minWidth="560px"
        marginTop={1}
        marginRight={1}
        marginBottom={4}
        area="diagram"
        paddingBottom="20px"
      >
        <Center height="100%" width="100%">
          <Container
            bg={colourSystem.Background.foreground}
            variant="with-shadow"
          >
            <Center>
              <PlaneDiagram
                tmp={redrawTrigger}
                viewPortWidth={600}
                viewPortHeight={400}
              />
            </Center>
          </Container>
        </Center>
      </GridItem>
      <GridItem
        minHeight="450px"
        marginTop={1}
        marginLeft={1}
        marginBottom={4}
        area="compass"
        paddingBottom="20px"
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
