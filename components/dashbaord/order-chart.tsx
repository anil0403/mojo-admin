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
    "Total Orders": 2400,
    "Total Successful": 2300,
    "Total Canceled": 100,
  },
  {
    name: "Jan 2",
    "Total Orders": 1398,
    "Total Successful": 1000,
    "Total Canceled": 398,
  },
  {
    name: "Jan 3",
    "Total Orders": 9800,
    "Total Successful": 9000,
    "Total Canceled": 800,
  },
  {
    name: "Jan 4",
    "Total Orders": 3900,
    "Total Successful": 3800,
    "Total Canceled": 100,
  },
  {
    name: "Jan 5",
    "Total Orders": 4800,
    "Total Successful": 4000,
    "Total Canceled": 800,
  },
  {
    name: "Jan 6",
    "Total Orders": 3800,
    "Total Successful": 3500,
    "Total Canceled": 300,
  },
  {
    name: "Jan 7",
    "Total Orders": 4300,
    "Total Successful": 4000,
    "Total Canceled": 300,
  },
  {
    name: "Jan 8",
    "Total Orders": 2400,
    "Total Successful": 2000,
    "Total Canceled": 400,
  },
  {
    name: "Jan 9",
    "Total Orders": 1398,
    "Total Successful": 1300,
    "Total Canceled": 98,
  },
  {
    name: "Jan 10",
    "Total Orders": 9800,
    "Total Successful": 9000,
    "Total Canceled": 800,
  },
  {
    name: "Jan 11",
    "Total Orders": 3908,
    "Total Successful": 3000,
    "Total Canceled": 908,
  },
  {
    name: "Jan 12",
    "Total Orders": 4800,
    "Total Successful": 4000,
    "Total Canceled": 800,
  },
  {
    name: "Jan 13",
    "Total Orders": 3800,
    "Total Successful": 3500,
    "Total Canceled": 300,
  },
  {
    name: "Jan 14",
    "Total Orders": 4300,
    "Total Successful": 4000,
    "Total Canceled": 300,
  },
];

const OrdersChart = () => {
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
            <XAxis   dataKey="name" />
            {/* <YAxis /> */}
            <Tooltip
              content={({ active, payload }: any) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Total Orders
                          </span>
                          <span className="font-bold text-muted-foreground">
                            {payload[0].value}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Total Successful
                          </span>
                          <span className="font-bold">{payload[1].value}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Total Canceled
                          </span>
                          <span className="font-bold">{payload[2].value}</span>
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
              dataKey="Total Orders"
              stroke="#3b82f6"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="Total Successful"
              stroke="#22c55e"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="Total Canceled"
              stroke="#e20809"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-start gap-5 px-5">
        <Label className="bg-[#3b82f6] p-2 rounded-lg w-full">Total Orders : 4300</Label>
        <Label className="bg-[#22c55e] p-2 rounded-lg w-full">Successful : 4000</Label>
        <Label className="bg-[#e20809] p-2 rounded-lg w-full">Canceled : 300</Label>

      </div>
    </div>
  );
};

export default OrdersChart;
