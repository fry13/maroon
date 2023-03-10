import { Product } from "@/types";
import styles from "./RecentlyViewed.module.scss";
import Catalog from "../Catalog/Catalog";

type Props = {
  data: Product[];
};

const RecentlyViewed = ({ data }: Props) => {
  return (
    <article className={styles.recently_viewed}>
      <h2>Вы недавно смотрели</h2>
      <Catalog smallSize data={data} />
    </article>
  );
};

export default RecentlyViewed;
