"use client"; // This is a magic comment that tells Vercel to use the browser version of the module
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan 1",
    "Total Revenue": 150000,
    "Total Orders": 2400,
    "Total Successful": 100,
    "Total Canceled": 5,
  },
  {
    name: "Jan 2",
    "Total Revenue": 155000,
    "Total Orders": 1398,
    "Total Successful": 100,
    "Total Canceled": 5,
  },
  {
    name: "Jan 3",
    "Total Revenue": 160000,
    "Total Orders": 9800,
    "Total Successful": 100,
    "Total Canceled": 5,
  },
  {
    name: "Jan 4",
    "Total Revenue": 165000,
    "Total Orders": 3908,
    "Total Successful": 100,
    "Total Canceled": 5,
  },
  {
    name: "Jan 5",
    "Total Revenue": 170000,
    "Total Orders": 4800,
    "Total Successful": 100,
    "Total Canceled": 5,
  },
  {
    name: "Jan 6",
    "Total Revenue": 165000,
    "Total Orders": 3800,
    "Total Successful": 100,
    "Total Canceled": 5,
  },
  {
    name: "Jan 7",
    "Total Revenue": 160000,
    "Total Orders": 4300,
    "Total Successful": 100,
    "Total Canceled": 5,
  },
  {
    name: "Jan 8",
    "Total Revenue": 170000,
    "Total Orders": 2400,
    "Total Successful": 100,
    "Total Canceled": 5,
  },
  {
    name: "Jan 9",
    "Total Revenue": 175000,
    "Total Orders": 1398,
    "Total Successful": 100,
    "Total Canceled": 5,
  },
  {
    name: "Jan 10",
    "Total Revenue": 180000,
    "Total Orders": 9800,
    "Total Successful": 100,
    "Total Canceled": 5,
  },
  {
    name: "Jan 11",
    "Total Revenue": 185000,
    "Total Orders": 3908,
    "Total Successful": 100,
    "Total Canceled": 5,
  },
  {
    name: "Jan 12",
    "Total Revenue": 180000,
    "Total Orders": 4800,
    "Total Successful": 100,
    "Total Canceled": 5,
  },
  {
    name: "Jan 13",
    "Total Revenue": 190000,
    "Total Orders": 3800,
    "Total Successful": 100,
    "Total Canceled": 5,
  },
  {
    name: "Jan 14",
    "Total Revenue": 195000,
    "Total Orders": 4300,
    "Total Successful": 100,
    "Total Canceled": 5,
  },
];

const DashboardChart = () => {
  return (
    <div>
      <div className="h-[350px] border-2 p-4 rounded-lg flex items-center">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis children  dataKey="name" />
            <YAxis />
            <Tooltip
              content={({ active, payload }: any) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Average
                          </span>
                          <span className="font-bold text-muted-foreground">
                            {payload[0].value}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Today
                          </span>
                          <span className="font-bold">{payload[1].value}</span>
                        </div>
                      </div>
                    </div>
                  );
                }

                return null;
              }}
            ></Tooltip>
            <Legend verticalAlign="top" />

            <Line
              type="monotone"
              dataKey="Total Revenue"
              stroke="#3b82f6"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="Total Orders"
              stroke="#8884d8"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardChart;
