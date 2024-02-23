import React, { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import Search from "@/components/search/search";
import { Button } from "@/components/ui/button";
import TablePagination from "@/components/pagination/Pagination";
import { SupplierTable } from "@/components/table/suppliers/table";
const SuppliersPage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-lg font-medium ">Suppliers</h1>
      <Separator />
      <div className="py-4 flex items-center  justify-between">
        <Suspense fallback={<div>...</div>}>
          <Search placeholder="supplier" />
        </Suspense>
        <TablePagination />
        <Button size="default">Add New Supplier</Button>
      </div>
      <SupplierTable />
    </div>
  );
};

export default SuppliersPage;
