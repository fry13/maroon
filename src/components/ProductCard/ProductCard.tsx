import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.scss";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Link className={styles.link} href={`/catalog/${product.id}`}>
      <div className={styles.wrapper}>
        <Image
          src={product.image}
          width={270}
          height={350}
          alt=""
        />
        <div className={styles.text_container}>
          <div className={styles.upper_text_wrapper}>
            <p className={styles.text}>{product.name}</p>
            <p className={styles.text}>{product.cost} ₽</p>
          </div>
          <div className={styles.bottom_text_wrapper}>
            <p className={styles.text}>{product.shortDesc}</p>
            <p className={styles.text}>{product.volume[0]}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
