import {
  Grid,
  GridItem,
  Container,
  Center,
  ToastProvider,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import RedrawContext from "./components/state-management/context/redrawContext";
import { useReducer } from "react";
import triggerRedrawReducer from "./components/state-management/reducers/triggerRedrawReducer";
import BirdContext from "./components/state-management/context/birdContext";
import birdReducer, {
  Bird,
} from "./components/state-management/reducers/birdReducer";
import PlaneContext from "./components/state-management/context/planeContext";
import planeReducer from "./components/state-management/reducers/planeReducer";
import { Plane } from "./components/diagram/plane";

function App() {
  const [birdsWithErrors, dispatchBirds] = useReducer(birdReducer, {
    birds: [] as Bird[],
    error: null,
  });
  const [planeWithErrors, dispatchPlane] = useReducer(planeReducer, {
    plane: new Plane(),
    error: null,
  });
  const [redrawTrigger, dispatchRedrawTrigger] = useReducer(
    triggerRedrawReducer,
    0
  );

  return (
    //templateColumns='repeat(5, 1fr)' gap={6}
    <PlaneContext.Provider value={{ planeWithErrors, dispatch: dispatchPlane }}>
      <BirdContext.Provider
        value={{ birdsWithErrors, dispatch: dispatchBirds }}
      >
        <RedrawContext.Provider
          value={{ trigger: redrawTrigger, dispatch: dispatchRedrawTrigger }}
        >
          <Grid
            templateAreas={`"nav main"`}
            templateColumns="210px 1fr"
            gap={0}
          >
            <GridItem area="nav">
              <NavBar />
            </GridItem>
            <GridItem area="main">
              <Center height="100vh" width="100%">
                <Container
                  width="100%"
                  maxWidth="98%"
                  height="97vh"
                  overflow="scroll"
                  borderRadius={10}
                  bg="#F5F6F7"
                  color="#373546"
                >
                  <MainPage />
                </Container>
              </Center>
            </GridItem>
          </Grid>
        </RedrawContext.Provider>
      </BirdContext.Provider>
    </PlaneContext.Provider>
  );
}

export default App;
