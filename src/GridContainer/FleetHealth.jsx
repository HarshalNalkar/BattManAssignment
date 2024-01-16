import React from "react";
import { VictoryPie, VictoryLabel } from "victory";

const myData = [
  { x: "Nearing EOL", y: 90 },
  { x: "EOL Reached", y: 45 },
  { x: "Excellent", y: 225 },
];

const FleetHealth = () => {
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
          color: "hsl(240, 10%, 20%",
        }}
      >
        Fleet Health
      </h3>
      <VictoryPie
        data={myData}
        colorScale={["#FFAE35", "#C80000 ", "#009460"]}
        radius={160}
        startAngle={180}
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
        labelRadius={({ innerRadius, outerRadius }) => outerRadius + 50}
      />
    </div>
  );
};

export default FleetHealth;
