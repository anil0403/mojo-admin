"use client";
import {
  AlignJustify,
  DollarSign,
  LayoutDashboard,
  ListOrderedIcon,
  ShoppingCart,
  UndoDot,
  Container,
  UserCircle,
  Users,
  Layers,
  CalendarFold,
  PlusCircle,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import ProfileDialog from "../dialog/profile/profile";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-background w-[250px] min-h-[95dvh] px-4 py-2 rounded-lg flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-semibold whitespace-nowrap pb-5">
          Admin Panel
        </h1>
        <div className="flex flex-col space-y-1 justify-between">
          <Button
            className="justify-start"
            variant={pathname === "/" ? "default" : "ghost"}
            asChild
          >
            <Link href="/" className="flex items-center gap-2">
              <LayoutDashboard size={18} />
              <span className="font-medium text-medium ">Dashboard</span>
            </Link>
          </Button>
          <Button
            className="justify-start"
            variant={pathname === "/admins" ? "default" : "ghost"}
            asChild
          >
            <Link href="/admins" className="flex items-center gap-2">
              <UserCircle size={18} />
              <span className="font-medium text-medium ">Admins</span>
            </Link>
          </Button>

          <Button
            className="justify-start"
            variant={pathname === "/users" ? "default" : "ghost"}
            asChild
          >
            <Link href="/users" className="flex items-center gap-2">
              <Users size={18} />
              <span className="font-medium text-medium ">Users</span>
            </Link>
          </Button>

          <Button
            className="justify-start"
            variant={pathname === "/riders" ? "default" : "ghost"}
            asChild
          >
            <Link href="/riders" className="flex items-center gap-2">
              <Users size={18} />
              <span className="font-medium text-medium ">Riders</span>
            </Link>
          </Button>

          <Button
            className="justify-start"
            variant={pathname === "/orders" ? "default" : "ghost"}
            asChild
          >
            <Link href="/orders" className="flex items-center gap-2">
              <ShoppingCart size={18} />
              <span className="font-medium text-medium ">Orders</span>
            </Link>
          </Button>

          <Button
            className="justify-start"
            variant={pathname === "/payments" ? "default" : "ghost"}
            asChild
          >
            <Link href="/payments" className="flex items-center gap-2">
              <DollarSign size={18} />
              <span className="font-medium text-medium ">Payments</span>
            </Link>
          </Button>

          <Button
            className="justify-start"
            variant={pathname === "/refunds" ? "default" : "ghost"}
            asChild
          >
            <Link href="/refunds" className="flex items-center gap-2">
              <UndoDot size={18} />
              <span className="font-medium text-medium ">Refunds</span>
            </Link>
          </Button>

          <Button
            className="justify-start"
            variant={pathname === "/suppliers" ? "default" : "ghost"}
            asChild
          >
            <Link href="/suppliers" className="flex items-center gap-2">
              <Container size={18} />
              <span className="font-medium text-medium ">Suppliers</span>
            </Link>
          </Button>

          <div className="w-full">
            <h1 className="text-muted-foreground text-sm font-medium">
              Inventory
            </h1>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Products</AccordionTrigger>
                <AccordionContent className="flex flex-col space-y-1">
                  <Button
                    className="justify-start w-full"
                    variant={pathname === "/products" ? "default" : "ghost"}
                    asChild
                  >
                    <Link href="/products" className="flex items-center gap-2">
                      <ListOrderedIcon size={18} />

                      <span className="font-medium text-medium ">
                        All Products
                      </span>
                    </Link>
                  </Button>

                  <Button
                    className="justify-start w-full"
                    variant={pathname === "/low-stock" ? "default" : "ghost"}
                    asChild
                  >
                    <Link href="/products" className="flex items-center gap-2">
                      <Layers size={18} />
                      <span className="font-medium text-medium ">
                        Low Stock
                      </span>
                    </Link>
                  </Button>

                  <Button
                    className="justify-start w-full"
                    variant={pathname === "/low-expiry" ? "default" : "ghost"}
                    asChild
                  >
                    <Link href="/products" className="flex items-center gap-2">
                      <CalendarFold size={18} />
                      <span className="font-medium text-medium ">
                        Low Expiry
                      </span>
                    </Link>
                  </Button>

                  <Button
                    className="justify-start w-full"
                    variant={pathname === "/add-product" ? "default" : "ghost"}
                    asChild
                  >
                    <Link
                      href="/add-product"
                      className="flex items-center gap-2"
                    >
                      <PlusCircle size={18} />

                      <span className="font-medium text-medium ">
                        Add Products
                      </span>
                    </Link>
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="flex flex-col space-y-1 justify-between">
              <Button
                className="justify-start"
                variant={pathname === "/categories" ? "default" : "ghost"}
                asChild
              >
                <Link href="/categories" className="flex items-center gap-2">
                  <AlignJustify size={18} />
                  <span className="font-medium text-medium ">Categories</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ProfileDialog />
    </div>
  );
};

export default Sidebar;
