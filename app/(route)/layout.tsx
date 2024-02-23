import Sidebar from "@/components/sidebar/sidebar";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex gap-5 px-2 min-h-screen justify-center items-center">
      <div className="max-w-fit border-2 rounded-lg">
        <Sidebar />
      </div>
      <ScrollArea className="w-full border-2 rounded-lg h-[95dvh]">
        {children}
      </ScrollArea>
    </div>
  );
};

export default Layout;
