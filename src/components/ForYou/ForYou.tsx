import { Product } from "@/types";
import styles from "./ForYou.module.scss";
import Catalog from "../Catalog/Catalog";

type Props = {
  data: Product[];
};

const ForYou = ({ data }: Props) => {
  return (
    <article className={styles.for_you}>
      <h2>Вам также может понравиться</h2>
      <Catalog smallSize data={data} />
    </article>
  );
};

export default ForYou;