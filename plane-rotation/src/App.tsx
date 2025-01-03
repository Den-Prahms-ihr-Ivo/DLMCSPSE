import { Grid, GridItem, Container, Center } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    //templateColumns='repeat(5, 1fr)' gap={6}
    <Grid templateAreas={`"nav main"`} templateColumns="250px 1fr" gap={2}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <Center height="100vh" width="100%">
          <Container
            className="maincontainer"
            width="100%"
            maxWidth="98%"
            height="97vh"
            overflow="scroll"
            borderRadius={10}
            bg="#F5F6F7"
            color="#373546"
          >
            Main
          </Container>
        </Center>
      </GridItem>
    </Grid>
  );
}

export default App;
