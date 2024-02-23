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

const suppliers = [
  {
    id: "1",
    name: "Diwash Bhattrai",
    phone: "9841234567",
    address: "Old Baneshwor, Kathmandu",
    email: "bhattraidiwash@gmail.com",
    pan: "056879543",
  },
  {
    id: "1",
    name: "Diwash Bhattrai",
    phone: "9841234567",
    address: "Old Baneshwor, Kathmandu",
    email: "bhattraidiwash@gmail.com",
    pan: "056879543",
  },  {
    id: "1",
    name: "Diwash Bhattrai",
    phone: "9841234567",
    address: "Old Baneshwor, Kathmandu",
    email: "bhattraidiwash@gmail.com",
    pan: "056879543",
  },  {
    id: "1",
    name: "Diwash Bhattrai",
    phone: "9841234567",
    address: "Old Baneshwor, Kathmandu",
    email: "bhattraidiwash@gmail.com",
    pan: "056879543",
  },
];

export function TableDemo() {
  return (
    <Table>
      {/* <TableCaption>A list of your recent suppliers.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">S.N</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Pan Number</TableHead>
          <TableHead className="text-right">Address</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {suppliers.map((supplier) => (
          <TableRow key={supplier.id}>
            <TableCell className="font-medium">{supplier.id}</TableCell>
            <TableCell>{supplier.name}</TableCell>
            <TableCell>{supplier.phone}</TableCell>
            <TableCell>{supplier.email}</TableCell>
            <TableCell>{supplier.pan}</TableCell>
            <TableCell className="text-right">{supplier.address}</TableCell>
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
