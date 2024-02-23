import React from "react";
import { Separator } from "@/components/ui/separator";
import Search from "@/components/search/search";
import { Button } from "@/components/ui/button";
import TablePagination from "@/components/pagination/Pagination";
import { DataTable } from "@/components/table/table";
import { TableDemo } from "@/components/table/suppliers/test";
const SuppliersPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-lg font-medium ">Suppliers</h1>
      <Separator />
      <div className="py-4 flex items-center  justify-between">
        <Search placeholder="supplier" />
        <TablePagination />
        <Button size="default">Add New Supplier</Button>
      </div>
      {/* <DataTable /> */}
      <TableDemo />
    </div>
  );
};

export default SuppliersPage;
