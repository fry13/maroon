import Image from "next/image";
import styles from "./Product.module.scss";
import { Product } from "@/types";
import { useEffect, useState } from "react";
import data from "@/data";
import ForYou from "../ForYou/ForYou";

type Props = {
  product: Product;
};

const Product = ({ product }: Props) => {
  const [compositionState, setCompositionState] = useState<boolean>(false);
  const [applicationState, setApplicationState] = useState<boolean>(false);
  let compositionStyle: string;
  let applicationStyle: string;
  let compositionButtonPlusStyle: string;
  let compositionButtonMinusStyle: string;
  let applicationButtonPlusStyle: string;
  let applicationButtonMinusStyle: string;

  if (compositionState) {
    compositionStyle = `${styles.composition} ${styles.expanded}`;
    compositionButtonPlusStyle = `${styles.expand} ${styles.displayNone}`;
    compositionButtonMinusStyle = `${styles.expand} ${styles.displayBlock}`;
  } else {
    compositionStyle = `${styles.composition} ${styles.collapsed}`;
    compositionButtonPlusStyle = `${styles.expand} ${styles.displayBlock}`;
    compositionButtonMinusStyle = `${styles.expand} ${styles.displayNone}`;
  }

  if (applicationState) {
    applicationStyle = `${styles.application} ${styles.expanded}`;
    applicationButtonPlusStyle = `${styles.expand} ${styles.displayNone}`;
    applicationButtonMinusStyle = `${styles.expand} ${styles.displayBlock}`;
  } else {
    applicationStyle = `${styles.application} ${styles.collapsed}`;
    applicationButtonPlusStyle = `${styles.expand} ${styles.displayBlock}`;
    applicationButtonMinusStyle = `${styles.expand} ${styles.displayNone}`;
  }

  return (
    <>
      <main className={styles.product}>
        <Image
          className={styles.image}
          src={product.image}
          width={630}
          height={647}
          alt=""
        />
        <div className={styles.text_wrapper}>
          <h1>{product.name}</h1>
          <p className={styles.shortDesc}>{product.shortDesc}</p>
          <p className={styles.longDesc}>{product.longDesc}</p>
          <div className={compositionStyle}>
            <div>
              <p>Состав</p>
              <div className={styles.expand_wrapper}>
                <button
                  className={compositionButtonPlusStyle}
                  onClick={() => setCompositionState(true)}
                >
                  <Image
                    src="/plus.svg"
                    width={12}
                    height={12}
                    alt="Развернуть"
                  />
                </button>
                <button
                  className={compositionButtonMinusStyle}
                  onClick={() => setCompositionState(false)}
                >
                  <Image
                    src="/minus.svg"
                    width={12}
                    height={12}
                    alt="Свернуть"
                  />
                </button>
              </div>
            </div>
            <p>{product.composition}</p>
          </div>
          <div className={applicationStyle}>
            <div>
              <p>Способ применения</p>
              <div className={styles.expand_wrapper}>
                <button
                  className={applicationButtonPlusStyle}
                  onClick={() => setApplicationState(true)}
                >
                  <Image
                    src="/plus.svg"
                    width={12}
                    height={12}
                    alt="Развернуть"
                  />
                </button>
                <button
                  className={applicationButtonMinusStyle}
                  onClick={() => setApplicationState(false)}
                >
                  <Image
                    src="/minus.svg"
                    width={12}
                    height={12}
                    alt="Свернуть"
                  />
                </button>
              </div>
            </div>
            <p>{product.application}</p>
          </div>
          <form className={styles.volume}>
            <p>Объем:</p>
            {product.volume.map((item: string) => {
              return (
                <div key={item}>
                  <input id={item} type="checkbox" />
                  <label htmlFor={item}>{item}</label>
                </div>
              );
            })}
          </form>
          <div className={styles.cost_wrapper}>
            <p>{product.cost} ₽</p>
            <button>Добавить в корзину</button>
          </div>
        </div>
      </main>
      <ForYou data={data} />
    </>
  );
};

export default Product;
