import Image from "next/image";
import styles from "./Product.module.scss";
import { Product } from "@/types";
import { useEffect, useState } from "react";
import data from "@/data";
import ForYou from "../ForYou/ForYou";
import Checkbox from "../Checkbox/Checkbox";

type Props = {
  product: Product;
};

const Product = ({ product }: Props) => {
  const [compositionState, setCompositionState] = useState<boolean>(false);
  const [applicationState, setApplicationState] = useState<boolean>(false);

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
          <div
            className={`${styles.composition} ${
              compositionState ? styles.expanded : styles.collapsed
            }`}
          >
            <div>
              <p>Состав</p>
              <div className={styles.expand_wrapper}>
                <button
                  className={`${styles.expand} ${
                    compositionState ? styles.displayNone : styles.displayBlock
                  }`}
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
                  className={`${styles.expand} ${
                    compositionState ? styles.displayBlock : styles.displayNone
                  }`}
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
          <div
            className={`${styles.application} ${
              applicationState ? styles.expanded : styles.collapsed
            }`}
          >
            <div>
              <p>Способ применения</p>
              <div className={styles.expand_wrapper}>
                <button
                  className={`${styles.expand} ${
                    applicationState ? styles.displayNone : styles.displayBlock
                  }`}
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
                  className={`${styles.expand} ${
                    applicationState ? styles.displayBlock : styles.displayNone
                  }`}
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
                  <Checkbox id={item} name={item} />
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
