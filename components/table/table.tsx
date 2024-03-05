import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CellAction from "./cell-action";
import Link from "next/link";

interface TableComponentProps {
  products: any;
}

const TableComponent = ({ products }: TableComponentProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>S.N</TableHead>
          <TableHead>product Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>CP</TableHead>
          <TableHead>SP</TableHead>
          <TableHead>Discount</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Expire In</TableHead>
          <TableHead>Expiry Date</TableHead>

          <TableHead>Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.map((product: any, index: number) => (
          <TableRow key={product?.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>
              <Link href={`/products/${product?.product_id}`}>
                {product?.product_id}
              </Link>
            </TableCell>
            <TableCell>{product?.name}</TableCell>
            <TableCell>{product?.cp}</TableCell>
            <TableCell>{product?.sp}</TableCell>
            <TableCell>{product?.discount}</TableCell>
            <TableCell>{product?.stock}</TableCell>
            <TableCell>90 days</TableCell>
            <TableCell>{product?.expiry_date}</TableCell>

            <TableCell>{product?.sub_category_id}</TableCell>
            <TableCell>
              <CellAction product={product} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
