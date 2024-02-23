import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CellAction from "./cell-action";

const products = [
  {
    id: "1",
    product_id: "S782105436",
    name: "",
    phone: "9841234567",
    address: "Old Baneshwor, Kathmandu",
    email: "bhattraidiwash@gmail.com",
    pan: "056879543",
    items: "5",
  },
];

export function ProductTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>S.N</TableHead>
          <TableHead>product Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Pan Number</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Items</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.map((product) => (
          <TableRow key={product?.id}>
            <TableCell>{product?.id}</TableCell>
            <TableCell>{product?.product_id}</TableCell>
            <TableCell>{product?.name}</TableCell>
            <TableCell>{product?.phone}</TableCell>
            <TableCell>{product?.pan}</TableCell>
            <TableCell>{product?.address}</TableCell>
            <TableCell>{product?.items}</TableCell>

            <TableCell>
              <CellAction product={product} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
