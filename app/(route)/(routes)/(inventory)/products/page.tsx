import React, { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import Search from "@/components/search/search";
import { Button } from "@/components/ui/button";
import TablePagination from "@/components/pagination/Pagination";
import { SupplierTable } from "@/components/table/suppliers/table";
import { ProductTable } from "@/components/table/products/table";
import Link from "next/link";
const ProductsPage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-lg font-medium py-1 ">All Products</h1>
      <Separator />
      <div className="py-4 flex  justify-between">
          <Suspense fallback={<div>...</div>}>
            <Search placeholder="product" />
          </Suspense>
        <div>
          <TablePagination />
        </div>

        {/* <Button>Button</Button> */}
        {/* <Button asChild size="default">
          <Link href="/products/add-product">Add Product</Link>
        </Button> */}
      </div>
      <ProductTable />
    </div>
  );
};

export default ProductsPage;
