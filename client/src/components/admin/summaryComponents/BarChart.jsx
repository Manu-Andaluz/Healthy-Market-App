import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "María", age: 10, nacionalidad: "Argentina" },
  { name: "Karina", age: 25, nacionalidad: "Chile" },
  { name: "Susana", age: 15, nacionalidad: "Colombia" },
  { name: "Pedro", age: 35, nacionalidad: "Argentina" },
  { name: "Felipe", age: 12, nacionalidad: "Argentina" },
  { name: "Laura", age: 30, nacionalidad: "Mexico" },
  { name: "Adrián", age: 15, nacionalidad: "Argentina" },
];

const SimpleBarCharts = () => {
  return (
    <div className="mt-10">
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          data={data}
          width={500}
          height={300}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 1 2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="nacionalidad" fill="#6b48ff" />
          <Bar dataKey="age" fill="#1553cf" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarCharts;
