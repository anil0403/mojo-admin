import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CellAction from "./cell-action";

const suppliers = [
  {
    id: "1",
    name: "Diwash Bhattrai",
    supplier_id: "S782105436",
    phone: "9841234567",
    address: "Old Baneshwor, Kathmandu",
    email: "bhattraidiwash@gmail.com",
    pan: "056879543",
    items: "5",
  },
  {
    id: "2",
    name: "Diwash Bhattrai",
    supplier_id: "S782105436",
    phone: "9841234567",
    address: "Old Baneshwor, Kathmandu",
    email: "bhattraidiwash@gmail.com",
    pan: "056879543",
    items: "5",
  },
  {
    id: "3",
    name: "Diwash Bhattrai",
    supplier_id: "S782105436",
    phone: "9841234567",
    address: "Old Baneshwor, Kathmandu",
    email: "bhattraidiwash@gmail.com",
    pan: "056879543",
    items: "5",
  },
  {
    id: "4",
    name: "Diwash Bhattrai",
    supplier_id: "S782105436",
    phone: "9841234567",
    address: "Old Baneshwor, Kathmandu",
    email: "bhattraidiwash@gmail.com",
    pan: "056879543",
    items: "5",
  },
  {
    id: "5",
    name: "Diwash Bhattrai",
    supplier_id: "S782105436",
    phone: "9841234567",
    address: "Old Baneshwor, Kathmandu",
    email: "bhattraidiwash@gmail.com",
    pan: "056879543",
    items: "5",
  },
  {
    id: "6",
    name: "Diwash Bhattrai",
    supplier_id: "S782105436",
    phone: "9841234567",
    address: "Old Baneshwor, Kathmandu",
    email: "bhattraidiwash@gmail.com",
    pan: "056879543",
    items: "5",
  },
  {
    id: "7",
    name: "Diwash Bhattrai",
    supplier_id: "S782105436",
    phone: "9841234567",
    address: "Old Baneshwor, Kathmandu",
    email: "bhattraidiwash@gmail.com",
    pan: "056879543",
    items: "8",
  },
  {
    id: "8",
    name: "Diwash Bhattrai",
    supplier_id: "S782105436",
    phone: "9841234567",
    address: "Old Baneshwor, Kathmandu",
    email: "bhattraidiwash@gmail.com",
    pan: "056879543",
    items: "5",
  },
  {
    id: "9",
    name: "Diwash Bhattrai",
    supplier_id: "S782105436",
    phone: "9841234567",
    address: "Old Baneshwor, Kathmandu",
    email: "bhattraidiwash@gmail.com",
    pan: "056879543",
    items: "5",
    bank_name: "Siddharth Bank Ltd.",
    bank_account_holder_name: "Siddharth Bank Ltd.",
    bank_account_number: "1234567890123456",
    qr: "https://www.google.com",
  },
  {
    id: "10",
    name: "Diwash Bhattrai",
    supplier_id: "S782105436",
    phone: "9841234567",
    address: "Old Baneshwor, Kathmandu",
    email: "bhattraidiwash@gmail.com",
    pan: "056879543",
    items: "5",
  },
];

export function SupplierTable() {
  return (
    <Table>
      {/* <TableCaption>A list of your recent suppliers.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead>S.N</TableHead>
          <TableHead>Supplier Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Phone</TableHead>
          {/* <TableHead>Email</TableHead> */}
          <TableHead>Pan Number</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Items</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {suppliers?.map((supplier) => (
          <TableRow key={supplier?.id}>
            <TableCell>{supplier?.id}</TableCell>
            <TableCell>{supplier?.supplier_id}</TableCell>
            <TableCell>{supplier?.name}</TableCell>
            <TableCell>{supplier?.phone}</TableCell>
            {/* <TableCell>{supplier?.email}</TableCell> */}
            <TableCell>{supplier?.pan}</TableCell>
            <TableCell>{supplier?.address}</TableCell>
            <TableCell>{supplier?.items}</TableCell>

            <TableCell>
              <CellAction supplier={supplier} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}
