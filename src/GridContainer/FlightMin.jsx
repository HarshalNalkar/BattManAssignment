import React from "react";
import { VictoryPie, VictoryLabel } from "victory";

const myData = [
  { x: "6S2P Li-Po", y: 105 },
  { x: "12S1P1 Li-Ion", y: 65 },
  { x: "6S1P Li-Ion", y: 190 },
];

const FlightMin = () => {
  return (
    <div
      style={{
        height: 250,
        width: 450,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 30,
      }}
    >
      <h3
        style={{
          fontWeight: "bold",
          marginBottom: 10,
          color: "hsl(240, 10%, 20%)",
        }}
      >
        Available Flight Minutes
      </h3>
      <VictoryPie
        data={myData}
        colorScale={["#009460", "#00E091 ", "#1E5C44"]}
        radius={160}
        innerRadius={80}
        startAngle={330}
        endAngle={-180}
        labelComponent={
          <VictoryLabel
            textAnchor="start"
            verticalAnchor="middle"
            style={{
              fontSize: 28,
              fill: "hsl(240, 10%, 45%)",
            }}
            
          />
        }
        labelRadius={({ innerRadius, outerRadius }) =>
          (outerRadius + innerRadius) / 2
        }
      />
    </div>
  );
};

export default FlightMin;
