import { Box } from "@chakra-ui/react";
import Plot from "react-plotly.js";

const TestPlot = () => {
  return (
    <Box width="500px" height="400px">
      <Plot
        data={[
          {
            x: [1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 18],
            y: [32, 37, 40.5, 43, 49, 54, 59, 63.5, 69.5, 73, 74],
            mode: "markers",
            type: "scatter",
          },
        ]}
        layout={{
          autosize: false,
          width: 500,
          height: 400,
          title: "Growth Rate in Boys",
          xaxis: {
            title: "Age (years)",
          },
          yaxis: {
            title: "Height (inches)",
          },
        }}
      />
    </Box>
  );
};

export default TestPlot;
