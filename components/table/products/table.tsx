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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const products = [
  {
    id: "1",
    product_id: "S782105436",
    name: "Swastik Vanaspati Ghee",
    description: "Swastik Vanaspati Ghee",
    ingredients: "Milk fat",
    country_of_origin: "Nepal",
    self_life: "",
    expiry_date: "2080-11-04",
    weight: "1 L",
    manufracturer: "Swastik oil industries pvt ltd ,Biratnagar",
    manufratured_date: "",
    marketed_by: "KL Dugar Group",
    regd_no: "140987/080/081",
    dftqcn: "01-23-65-63-0-795",
    limit: "10%",
    stock: "10",
    mrp: "Rs 204",
    cp: "Rs. 153",
    sp: "Rs. 183",
    discount: "10%",
    discount_amount: "21%",
    margin: "25%",
    margin_amount: "Rs. 51",
    sub_category_id: "CAT2015890",
    supplier_id: "S032U4579",
    isArchived: "",
  },
  {
    id: "1",
    product_id: "S782105436",
    name: "Swastik Vanaspati Ghee",
    description: "Swastik Vanaspati Ghee",
    ingredients: "Milk fat",
    country_of_origin: "Nepal",
    self_life: "",
    expiry_date: "2080-11-04",
    weight: "1 L",
    manufracturer: "Swastik oil industries pvt ltd ,Biratnagar",
    manufratured_date: "",
    marketed_by: "KL Dugar Group",
    regd_no: "140987/080/081",
    dftqcn: "01-23-65-63-0-795",
    limit: "10%",
    stock: "10",
    mrp: "Rs 204",
    cp: "Rs. 153",
    sp: "Rs. 183",
    discount: "10%",
    discount_amount: "21%",
    margin: "25%",
    margin_amount: "Rs. 51",
    sub_category_id: "CAT2015890",
    supplier_id: "S032U4579",
    isArchived: "",
  },
  {
    id: "1",
    product_id: "S782105436",
    name: "Swastik Vanaspati Ghee",
    description: "Swastik Vanaspati Ghee",
    ingredients: "Milk fat",
    country_of_origin: "Nepal",
    self_life: "",
    expiry_date: "2080-11-04",
    weight: "1 L",
    manufracturer: "Swastik oil industries pvt ltd ,Biratnagar",
    manufratured_date: "",
    marketed_by: "KL Dugar Group",
    regd_no: "140987/080/081",
    dftqcn: "01-23-65-63-0-795",
    limit: "10%",
    stock: "10",
    mrp: "Rs 204",
    cp: "Rs. 153",
    sp: "Rs. 183",
    discount: "10%",
    discount_amount: "21%",
    margin: "25%",
    margin_amount: "Rs. 51",
    sub_category_id: "CAT2015890",
    supplier_id: "S032U4579",
    isArchived: "",
  },
  {
    id: "1",
    product_id: "S782105436",
    name: "Swastik Vanaspati Ghee",
    description: "Swastik Vanaspati Ghee",
    ingredients: "Milk fat",
    country_of_origin: "Nepal",
    self_life: "",
    expiry_date: "2080-11-04",
    weight: "1 L",
    manufracturer: "Swastik oil industries pvt ltd ,Biratnagar",
    manufratured_date: "",
    marketed_by: "KL Dugar Group",
    regd_no: "140987/080/081",
    dftqcn: "01-23-65-63-0-795",
    limit: "10%",
    stock: "10",
    mrp: "Rs 204",
    cp: "Rs. 153",
    sp: "Rs. 183",
    discount: "10%",
    discount_amount: "21%",
    margin: "25%",
    margin_amount: "Rs. 51",
    sub_category_id: "CAT2015890",
    supplier_id: "S032U4579",
    isArchived: "",
  },
  {
    id: "1",
    product_id: "S782105436",
    name: "Swastik Vanaspati Ghee",
    description: "Swastik Vanaspati Ghee",
    ingredients: "Milk fat",
    country_of_origin: "Nepal",
    self_life: "",
    expiry_date: "2080-11-04",
    weight: "1 L",
    manufracturer: "Swastik oil industries pvt ltd ,Biratnagar",
    manufratured_date: "",
    marketed_by: "KL Dugar Group",
    regd_no: "140987/080/081",
    dftqcn: "01-23-65-63-0-795",
    limit: "10%",
    stock: "10",
    mrp: "Rs 204",
    cp: "Rs. 153",
    sp: "Rs. 183",
    discount: "10%",
    discount_amount: "21%",
    margin: "25%",
    margin_amount: "Rs. 51",
    sub_category_id: "CAT2015890",
    supplier_id: "S032U4579",
    isArchived: "",
  },
  {
    id: "1",
    product_id: "S782105436",
    name: "Swastik Vanaspati Ghee",
    description: "Swastik Vanaspati Ghee",
    ingredients: "Milk fat",
    country_of_origin: "Nepal",
    self_life: "",
    expiry_date: "2080-11-04",
    weight: "1 L",
    manufracturer: "Swastik oil industries pvt ltd ,Biratnagar",
    manufratured_date: "",
    marketed_by: "KL Dugar Group",
    regd_no: "140987/080/081",
    dftqcn: "01-23-65-63-0-795",
    limit: "10%",
    stock: "10",
    mrp: "Rs 204",
    cp: "Rs. 153",
    sp: "Rs. 183",
    discount: "10%",
    discount_amount: "21%",
    margin: "25%",
    margin_amount: "Rs. 51",
    sub_category_id: "CAT2015890",
    supplier_id: "S032U4579",
    isArchived: "",
  },
  {
    id: "1",
    product_id: "S782105436",
    name: "Swastik Vanaspati Ghee",
    description: "Swastik Vanaspati Ghee",
    ingredients: "Milk fat",
    country_of_origin: "Nepal",
    self_life: "",
    expiry_date: "2080-11-04",
    weight: "1 L",
    manufracturer: "Swastik oil industries pvt ltd ,Biratnagar",
    manufratured_date: "",
    marketed_by: "KL Dugar Group",
    regd_no: "140987/080/081",
    dftqcn: "01-23-65-63-0-795",
    limit: "10%",
    stock: "10",
    mrp: "Rs 204",
    cp: "Rs. 153",
    sp: "Rs. 183",
    discount: "10%",
    discount_amount: "21%",
    margin: "25%",
    margin_amount: "Rs. 51",
    sub_category_id: "CAT2015890",
    supplier_id: "S032U4579",
    isArchived: "",
  },
  {
    id: "1",
    product_id: "S782105436",
    name: "Swastik Vanaspati Ghee",
    description: "Swastik Vanaspati Ghee",
    ingredients: "Milk fat",
    country_of_origin: "Nepal",
    self_life: "",
    expiry_date: "2080-11-04",
    weight: "1 L",
    manufracturer: "Swastik oil industries pvt ltd ,Biratnagar",
    manufratured_date: "",
    marketed_by: "KL Dugar Group",
    regd_no: "140987/080/081",
    dftqcn: "01-23-65-63-0-795",
    limit: "10%",
    stock: "10",
    mrp: "Rs 204",
    cp: "Rs. 153",
    sp: "Rs. 183",
    discount: "10%",
    discount_amount: "21%",
    margin: "25%",
    margin_amount: "Rs. 51",
    sub_category_id: "CAT2015890",
    supplier_id: "S032U4579",
    isArchived: "",
  },
  {
    id: "1",
    product_id: "S782105436",
    name: "Swastik Vanaspati Ghee",
    description: "Swastik Vanaspati Ghee",
    ingredients: "Milk fat",
    country_of_origin: "Nepal",
    self_life: "",
    expiry_date: "2080-11-04",
    weight: "1 L",
    manufracturer: "Swastik oil industries pvt ltd ,Biratnagar",
    manufratured_date: "",
    marketed_by: "KL Dugar Group",
    regd_no: "140987/080/081",
    dftqcn: "01-23-65-63-0-795",
    limit: "10%",
    stock: "10",
    mrp: "Rs 204",
    cp: "Rs. 153",
    sp: "Rs. 183",
    discount: "10%",
    discount_amount: "21%",
    margin: "25%",
    margin_amount: "Rs. 51",
    sub_category_id: "CAT2015890",
    supplier_id: "S032U4579",
    isArchived: "",
  },
  {
    id: "1",
    product_id: "S782105436",
    name: "Swastik Vanaspati Ghee",
    description: "Swastik Vanaspati Ghee",
    ingredients: "Milk fat",
    country_of_origin: "Nepal",
    self_life: "",
    expiry_date: "2080-11-04",
    weight: "1 L",
    manufracturer: "Swastik oil industries pvt ltd ,Biratnagar",
    manufratured_date: "",
    marketed_by: "KL Dugar Group",
    regd_no: "140987/080/081",
    dftqcn: "01-23-65-63-0-795",
    limit: "10%",
    stock: "10",
    mrp: "Rs 204",
    cp: "Rs. 153",
    sp: "Rs. 183",
    discount: "10%",
    discount_amount: "21%",
    margin: "25%",
    margin_amount: "Rs. 51",
    sub_category_id: "CAT2015890",
    supplier_id: "S032U4579",
    isArchived: "",
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
          <TableHead>Stock</TableHead>
          <TableHead>Expire In</TableHead>
          <TableHead>Expiry Date</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Thumbnail</TableHead>

        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.map((product, index) => (
          <TableRow key={product?.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>
              <Link href={`/products/${product?.product_id}`}>
                {product?.product_id}
              </Link>
            </TableCell>
            <TableCell>{product?.name}</TableCell>
            <TableCell>{product?.stock}</TableCell>
            <TableCell>90 days</TableCell>
            <TableCell>{product?.expiry_date}</TableCell>
            <TableCell>{product?.sub_category_id}</TableCell>
            <TableCell>
              <Avatar>
                <AvatarImage src="#" alt="@shadcn" />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>

            </TableCell>




            <TableCell>
              <CellAction product={product} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
