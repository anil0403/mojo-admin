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
  MessageCircleQuestion,
  MessageSquare,
  ArrowDownUp,
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
      <div className="pb-2">
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

          <div className="w-full">
            {/* users */}
            <Accordion
              type="single"
              defaultValue="item-1"
              collapsible
              className="w-full border-none"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className=" text-secondary-foreground hover:bg-secondary/80 rounded-lg px-4">
                  Users
                </AccordionTrigger>
                <AccordionContent className="flex flex-col space-y-1">
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
                    variant={pathname === "/customers" ? "default" : "ghost"}
                    asChild
                  >
                    <Link href="/customers" className="flex items-center gap-2">
                      <Users size={18} />
                      <span className="font-medium text-medium ">
                        Customers
                      </span>
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
                    variant={pathname === "/suppliers" ? "default" : "ghost"}
                    asChild
                  >
                    <Link href="/suppliers" className="flex items-center gap-2">
                      <Container size={18} />
                      <span className="font-medium text-medium ">
                        Suppliers
                      </span>
                    </Link>
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* operations */}
            <Accordion
              type="single"
              defaultValue="item-1"
              collapsible
              className="w-full border-none"
            >
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-secondary-foreground hover:bg-secondary/80 rounded-lg px-4">
                  Operations
                </AccordionTrigger>
                <AccordionContent className="flex flex-col space-y-1">
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
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/* inventory */}
            <Accordion
              type="single"
              defaultValue="item-2"
              collapsible
              className="w-full border-none"
            >
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-secondary-foreground hover:bg-secondary/80 rounded-lg px-4">
                  Inventory
                </AccordionTrigger>
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
                    className="justify-start"
                    variant={pathname === "/categories" ? "default" : "ghost"}
                    asChild
                  >
                    <Link
                      href="/categories"
                      className="flex items-center gap-2"
                    >
                      <AlignJustify size={18} />
                      <span className="font-medium text-medium ">
                        Categories
                      </span>
                    </Link>
                  </Button>

                  <Button
                    className="justify-start w-full"
                    variant={pathname === "/low-stock" ? "default" : "ghost"}
                    asChild
                  >
                    <Link href="/low-stock" className="flex items-center gap-2">
                      <Layers size={18} />
                      <span className="font-medium text-medium ">
                        Low Stock
                      </span>
                    </Link>
                  </Button>

                  <Button
                    className="justify-start w-full"
                    variant={pathname === "/low-expiry-date" ? "default" : "ghost"}
                    asChild
                  >
                    <Link href="/low-expiry-date" className="flex items-center gap-2">
                      <CalendarFold size={18} />
                      <span className="font-medium text-medium ">
                        Low Expiry
                      </span>
                    </Link>
                  </Button>

                  <Button
                    className="justify-start w-full"
                    variant={pathname === "/products/add-product" ? "default" : "ghost"}
                    asChild
                  >
                    <Link
                      href="/products/add-product"
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
          </div>

          {/* suggestions */}
          <Button
            className="justify-start"
            variant={pathname === "/suggestion" ? "default" : "ghost"}
            asChild
          >
            <Link href="/suggestion" className="flex items-center gap-2">
              <MessageCircleQuestion size={18} />
              <span className="font-medium text-medium ">Customer Suggestion</span>
            </Link>
          </Button>

          {/* support */}
          <Button
            className="justify-start"
            variant={pathname === "/support" ? "default" : "ghost"}
            asChild
          >
            <Link href="/support" className="flex items-center gap-2">
              <MessageSquare size={18} />
              <span className="font-medium text-medium ">Customer Support</span>
            </Link>
          </Button>

          {/* Traffic */}
          <Button
            className="justify-start"
            variant={pathname === "/traffic" ? "default" : "ghost"}
            asChild
          >
            <Link href="/traffic" className="flex items-center gap-2">
              <ArrowDownUp size={18} />
              <span className="font-medium text-medium ">Traffic</span>
            </Link>
          </Button>
        </div>
      </div>
      <ProfileDialog />
    </div>
  );
};
export default Sidebar;
