import { Product } from "@/types";
import styles from "./RecentlyViewed.module.scss";
import Catalog from "../Catalog/Catalog";
import { useEffect, useRef } from "react";

type Props = {
  data: Product[];
};

const RecentlyViewed = ({ data }: Props) => {
  let size = useRef(4);
  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth <= 560) size.current = 1;
    console.log(size.current);
  }, [size]);

  return (
    <article className={styles.recently_viewed}>
      <h2>Вы недавно смотрели</h2>
      <Catalog size={size.current} data={data} />
    </article>
  );
};

export default RecentlyViewed;
