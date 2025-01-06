import { Grid, GridItem, Container, Center } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import RedrawContext from "./components/state-management/context/redrawContext";
import { useReducer } from "react";
import triggerRedrawReducer from "./components/state-management/reducers/triggerRedrawReducer";

function App() {
  const [redrawTrigger, dispatchRedrawTrigger] = useReducer(
    triggerRedrawReducer,
    0
  );

  return (
    //templateColumns='repeat(5, 1fr)' gap={6}
    <RedrawContext.Provider
      value={{ trigger: redrawTrigger, dispatch: dispatchRedrawTrigger }}
    >
      <Grid templateAreas={`"nav main"`} templateColumns="210px 1fr" gap={0}>
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
  );
}

export default App;
