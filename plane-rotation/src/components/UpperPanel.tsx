import { Grid, GridItem } from "@chakra-ui/react";
import InputConsole from "./InputConsole";
import ThreatPanel from "./ThreatPanel";

const UpperPanel = () => {
  return (
    <Grid
      height="100%"
      templateAreas={`"inputs pigeon"`}
      templateColumns="1fr 1fr"
      gap={7}
    >
      <GridItem width="100%" area="inputs">
        <InputConsole />
      </GridItem>
      <GridItem width="100%" area="pigeon">
        <ThreatPanel />
      </GridItem>
    </Grid>
  );
};

export default UpperPanel;
