import React from "react";

interface ProductPageProps {
  params: { productId: string };
}

const ProductPage = ({ params: { productId } }: ProductPageProps) => {
  return <div>ProductPage = {productId} </div>;
};

export default ProductPage;
