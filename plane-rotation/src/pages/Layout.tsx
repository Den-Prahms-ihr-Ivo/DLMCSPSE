import { Outlet } from "react-router-dom";
import { Grid, GridItem, Container, Center } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import PlaneContext from "../components/state-management/context/planeContext";
import triggerRedrawReducer from "../components/state-management/reducers/triggerRedrawReducer";
import { Plane } from "../components/diagram/plane";
import birdReducer, {
  Bird,
} from "../components/state-management/reducers/birdReducer";
import { useReducer } from "react";
import planeReducer from "../components/state-management/reducers/planeReducer";
import BirdContext from "../components/state-management/context/birdContext";
import RedrawContext from "../components/state-management/context/redrawContext";
import showCSReducer from "../components/state-management/reducers/showCSReducer";
import ShowCsContext from "../components/state-management/context/showCSSystem";

const Layout = () => {
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

  const [showCSToggle, dispatchshowCSToggle] = useReducer(showCSReducer, true);

  return (
    <PlaneContext.Provider value={{ planeWithErrors, dispatch: dispatchPlane }}>
      <BirdContext.Provider
        value={{ birdsWithErrors, dispatch: dispatchBirds }}
      >
        <ShowCsContext.Provider
          value={{ toggle: showCSToggle, dispatch: dispatchshowCSToggle }}
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
                <NavBar activeNavItem={""} />
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
                    <Outlet />
                  </Container>
                </Center>
              </GridItem>
            </Grid>
          </RedrawContext.Provider>
        </ShowCsContext.Provider>
      </BirdContext.Provider>
    </PlaneContext.Provider>
  );
};

export default Layout;
