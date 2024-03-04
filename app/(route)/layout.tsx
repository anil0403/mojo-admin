import Sidebar from "@/components/sidebar/sidebar";
import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex gap-5 px-2 min-h-screen justify-center items-center">
      <ScrollArea className=" min-w-fit border-2 rounded-lg h-[95dvh]">
        <Sidebar />
        <ScrollBar orientation="vertical" />
      </ScrollArea>

      <ScrollArea className="w-full border-2 rounded-lg h-[95dvh]">
        {children}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default Layout;
