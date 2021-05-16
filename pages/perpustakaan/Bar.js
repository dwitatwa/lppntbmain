import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { KabupatenData as kabupaten } from "./KabupatenData";

export default function App() {
  return (
    <BarChart
      width={1100}
      height={500}
      data={kabupaten}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="awardee" stackId="a" fill="#2f6fdf" />
    </BarChart>
  );
}
