import React from "react";
import { PieChart, ResponsiveContainer, Pie, Tooltip, Cell } from "recharts";

const data = [
  { name: "Vegano", value: 2400 },
  { name: "Alamacén", value: 4567 },
  { name: "Gluten-Free", value: 1398 },
  { name: "Vegetariano", value: 1200 },
];

const COLORS = [
  "#ce93d8",
  "#5c6bc0",
  "#b39ddb",
  "#4dd0e1",
  "#f48fb1",
  "#d500f9",
];

const PieCharts = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            innerRadius={60}
            outerRadius={85}
            fill="#82ca9d"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieCharts;
