import { Button, Center, Container, Grid, GridItem } from "@chakra-ui/react";
import { colourSystem } from "../theme";
import UpperPanel from "./UpperPanel";
import Compass from "./compass/Compass";
import TestPlot from "./diagram/testdiagram";
import { useState } from "react";
import { Plane } from "./diagram/plane";
import { newPlot, restyle } from "plotly.js";

const MainPage = () => {
  const [plane, setPlane] = useState(new Plane());
  const [tmp, setTmp] = useState(1);

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
                  //plane.translatePlane(2, 0, 0);
                  setPlane(plane.translatePlane(1, 0, 1));
                  // React erkennt nicht, dass sich Plant geändert hat und triggert so kein redraw ...
                  // Am simpelsten war es einfach eine Laufvariable hinzuzufügen, die dann ein redraw triggert. :)
                  setTmp(tmp + 1);
                }}
              >
                Mum
              </Button>
              <TestPlot plane={plane} tmp={tmp} />
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
