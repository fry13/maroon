import Layout from "@/components/Layout/Layout";
import Product from "@/components/Product/Product";
import data from "@/data";
import Head from "next/head";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    const id: number = parseInt(document.location.pathname.split("/")[2]);
    setProduct(data[id]);
  }, []);
  return (
    <>
      <Head>
        <title>Maroon Catalog</title>
        <meta name="Maroon" content="Maroon cosmetics" />
      </Head>
      <Layout productPage>
        <Product product={product || data[0]} />
      </Layout>
    </>
  );
};

export default ProductPage;
