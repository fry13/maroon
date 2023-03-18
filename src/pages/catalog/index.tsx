import Catalog from "@/components/Catalog/Catalog";
import CatalogHeading from "@/components/CatalogHeading/CatalogHeading";
import Layout from "@/components/Layout/Layout";
import RecentlyViewed from "@/components/RecentlyViewed/RecentlyViewed";
import data from "@/data";
import Head from "next/head";

const catalog = () => {
  return (
    <>
      <Head>
        <title>Maroon Catalog</title>
        <meta name="Maroon" content="Maroon cosmetics" />
      </Head>
      <Layout>
        <CatalogHeading />
        <Catalog size={12} data={data} />
        <RecentlyViewed data={data} />
      </Layout>
    </>
  );
};

export default catalog;
