import Layout from "@/components/Layout/Layout";
import Product from "@/components/Product/Product";
import data from "@/data";
import { useEffect, useState } from "react";

type Props = {
  id: number;
};

const ProductPage = () => {
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    const id: number = parseInt(document.location.pathname.split("/")[2]);
    setProduct(data[id]);
  }, []);
  return (
    <Layout productPage>
      <Product product={product || data[0]} />
    </Layout>
  );
};

export default ProductPage;
