"use client"; // This is a magic comment that tells Vercel to use the browser version of the module
import { Label } from "@radix-ui/react-label";
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
    "Total Revenue": 2400,
  },
  {
    name: "Jan 2",
    "Total Revenue": 1398,
  },
  {
    name: "Jan 3",
    "Total Revenue": 9800,
  },
  {
    name: "Jan 4",
    "Total Revenue": 3900,
  },
  {
    name: "Jan 5",
    "Total Revenue": 4800,
  },
  {
    name: "Jan 6",
    "Total Revenue": 3800,
  },
  {
    name: "Jan 7",
    "Total Revenue": 4300,
  },
  {
    name: "Jan 8",
    "Total Revenue": 2400,
  },
  {
    name: "Jan 9",
    "Total Revenue": 1398,
  },
  {
    name: "Jan 10",
    "Total Revenue": 9800,
  },
  {
    name: "Jan 11",
    "Total Revenue": 3908,
  },
  {
    name: "Jan 12",
    "Total Revenue": 4800,
  },
  {
    name: "Jan 13",
    "Total Revenue": 3800,
  },
  {
    name: "Jan 14",
    "Total Revenue": 4300,
  },
];

const RevenueChart = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="h-[350px] border-2 p-4 rounded-lg flex items-center col-span-4">
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
            <XAxis dataKey="name" />
            {/* <YAxis /> */}
            <Tooltip
              content={({ active, payload }: any) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Total Revenue
                          </span>
                          <span className="font-bold text-muted-foreground">
                            {payload[0].value}
                          </span>
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
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center gap-5 px-5">
        <Label className="w-[120px] flex flex-col justify-center items-center border-2 rounded-lg px-4 py-2">
          <span className="whitespace-nowrap p-4">Total Revenue</span>
          <span className="text-lg font-semibold">4300</span>
        </Label>
      </div>
    </div>
  );
};

export default RevenueChart;
