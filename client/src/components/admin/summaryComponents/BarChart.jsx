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
  { name: "María", age: 10, weight: 60 },
  { name: "Karina", age: 25, weight: 70 },
  { name: "Susana", age: 15, weight: 65 },
  { name: "Pedro", age: 35, weight: 85 },
  { name: "Felipe", age: 12, weight: 48 },
  { name: "Laura", age: 30, weight: 69 },
  { name: "Adrián", age: 15, weight: 78 },
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
          <Bar dataKey="weight" fill="#6b48ff" />
          <Bar dataKey="age" fill="#1ee3cf" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarCharts;
