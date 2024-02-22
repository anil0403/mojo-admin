import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, ListOrderedIcon, AlignJustify, LineChart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-lg font-medium ">Dashboard</h1>
      <Separator />
      <div className="flex gap-5 py-4">
        <Card className="w-[220px] cursor-pointer hover:drop-shadow-xl ">
          <CardHeader>
            <CardTitle>
              <Link
                href="/users"
                className="flex items-center justify-center space-x-2 hover:underline underline-offset-2"
              >
                <Users size={20} />
                <span>Customers</span>
              </Link>
            </CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <span className="text-4xl font-bold w-full h-full text-center">
              485
            </span>
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            <p className="text-xs">
              vs.{" "}
              <span className="text-lg text-green-500 font-semibold">30%</span>{" "}
              previous 30 days
            </p>
          </CardFooter>
        </Card>
        <Card className="w-[220px] cursor-pointer hover:drop-shadow-xl ">
          <CardHeader>
            <CardTitle>
              <Link
                href="/riders"
                className="flex items-center justify-center space-x-2 hover:underline underline-offset-2"
              >
                <Users size={20} />
                <span>Riders</span>
              </Link>
            </CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <span className="text-4xl font-bold w-full h-full text-center">
              485
            </span>
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            <p className="text-xs text-center flex flex-col">
              <span className="text-lg text-green-500 font-semibold">
                + 15 Riders
              </span>
              <span>in previous 30 days</span>
            </p>
          </CardFooter>
        </Card>

        {/* products */}
        <Card className="w-[220px] cursor-pointer hover:drop-shadow-xl ">
          <CardHeader>
            <CardTitle>
              <Link
                href="/products"
                className="flex items-center justify-center space-x-2 hover:underline underline-offset-2"
              >
                <ListOrderedIcon size={20} />
                <span>Products</span>
              </Link>
            </CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <span className="text-4xl font-bold w-full h-full text-center">
              1250
            </span>
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            <p className="text-xs text-center flex flex-col">
              <span className="text-lg text-green-500 font-semibold">
                + 120 Products
              </span>
              <span>in previous 30 days</span>
            </p>
          </CardFooter>
        </Card>

        {/* categories */}
        <Card className="w-[220px] cursor-pointer hover:drop-shadow-xl ">
          <CardHeader>
            <CardTitle>
              <Link
                href="/categories"
                className="flex items-center justify-center space-x-2 hover:underline underline-offset-2"
              >
                <AlignJustify size={20} />
                <span>Categories</span>
              </Link>
            </CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <span className="text-4xl font-bold w-full h-full text-center">
              15
            </span>
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            <p className="text-xs text-center flex flex-col">
              <span className="text-lg text-green-500 font-semibold">
                + 4 Category
              </span>
              <span>in previous 30 days</span>
            </p>
          </CardFooter>
        </Card>

        {/* recent visits  */}
        <Card className="w-[220px] cursor-pointer hover:drop-shadow-xl ">
          <CardHeader>
            <CardTitle>
              <Link
                href="/categories"
                className="flex items-center justify-center space-x-2 hover:underline underline-offset-2"
              >
                <LineChart size={20} />
                <span>New Visits</span>
              </Link>
            </CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <span className="text-4xl font-bold w-full h-full text-center">
              725
            </span>
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            <p className="text-xs text-center flex flex-col">
              new visits in previous week
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
