import Catalog from "@/components/Catalog/Catalog";
import CatalogHeading from "@/components/CatalogHeading/CatalogHeading";
import Layout from "@/components/Layout/Layout";
import data from "@/data";

const catalog = () => {
  return (
    <Layout>
      <CatalogHeading />
      <Catalog data={data} />
    </Layout>
  );
};

export default catalog;
