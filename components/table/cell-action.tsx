"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CellActionProps {
  product: any;
}

const CellAction = ({ product }: CellActionProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          {/* <span className="sr-only">Open menu</span> */}
          <DotsHorizontalIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(product?.supplier_id)}
        >
          Copy Supplier Id
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-blue-800">
          <Link className="w-full" href={`/products/${product?.product_id}`}>
            View
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-purple-800">
          <Link
            className="w-full"
            href={`/products/${product?.product_id}/edit`}
          >
            Edit
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-800"> Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CellAction;
