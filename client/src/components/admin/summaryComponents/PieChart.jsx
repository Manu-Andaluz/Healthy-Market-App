import React from "react";
import { PieChart, ResponsiveContainer, Pie, Tooltip, Cell } from "recharts";

const data = [
  { name: "Vegano", value: 5 },
  { name: "Alamacén", value: 15 },
  { name: "Gluten-Free", value: 5 },
  { name: "Vegetariano", value: 4 },
];

const COLORS = ["#8A2BE2", "#A52A2A", "#0000FF", "#FF8C00"];

const PieCharts = () => {
  return (
    <div className="grid place-content-center mt-8">
      <h2 className="mx-auto">Categorías más usadas en productos</h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey="value"
              data={data}
              innerRadius={60}
              outerRadius={100}
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
    </div>
  );
};

export default PieCharts;
