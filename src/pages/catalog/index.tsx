import Catalog from "@/components/Catalog/Catalog";
import CatalogHeading from "@/components/CatalogHeading/CatalogHeading";
import Layout from "@/components/Layout/Layout";
import RecentlyViewed from "@/components/RecentlyViewed/RecentlyViewed";
import data from "@/data";

const catalog = () => {
  return (
    <Layout>
      <CatalogHeading />
      <Catalog size={12} data={data} />
      <RecentlyViewed data={data} />
    </Layout>
  );
};

export default catalog;
