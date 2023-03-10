import { Product } from "@/types";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Catalog.module.scss";

type Props = {
  data: Product[];
  smallSize?: boolean;
};

const Catalog = ({ data, smallSize }: Props) => {
  let productsOnPage: number;
  if (smallSize) productsOnPage = 4;
  else productsOnPage = 12;

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [sliceParams, setSliceParams] = useState<number[]>([0, productsOnPage]);
  const [disableLeftArrow, setDisableLeftArrow] = useState<boolean>(false);
  const [disableRightArrow, setDisableRightArrow] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (sliceParams[0] + productsOnPage > allProducts.length) {
      setDisableRightArrow(true);
    } else setDisableRightArrow(false);
    if (sliceParams[0] - productsOnPage < 0) {
      setDisableLeftArrow(true);
    } else setDisableLeftArrow(false);
  }, [sliceParams, allProducts]);

  useEffect(() => {
    setAllProducts(data);
  }, [allProducts, data]);

  const paginationNext = () => {
    setCurrentPage(currentPage + 1);
    if (!smallSize) window.scrollTo(0, 140);
    setSliceParams([
      sliceParams[0] + productsOnPage,
      sliceParams[1] + productsOnPage,
    ]);
  };

  const paginationPrev = () => {
    setCurrentPage(currentPage - 1);
    if (!smallSize) window.scrollTo(0, 140);
    setSliceParams([
      sliceParams[0] - productsOnPage,
      sliceParams[1] - productsOnPage,
    ]);
  };

  return (
    <main className={styles.catalog}>
      <ul>
        {allProducts
          .slice(sliceParams[0], sliceParams[1])
          .map((product: Product) => {
            return (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            );
          })}
      </ul>
      <div className={styles.pagination}>
        <div className={styles.digits_container}>
          <p>{currentPage}</p>
          <Image src="/line.svg" width={50} height={1} alt="" />
          <p>{Math.ceil(allProducts.length / productsOnPage)}</p>
        </div>
        <div className={styles.arrows_container}>
          <button onClick={paginationPrev} disabled={disableLeftArrow}>
            <Image src="/left.svg" width={26} height={12} alt="Назад" />
          </button>
          <button onClick={paginationNext} disabled={disableRightArrow}>
            <Image src="/right.svg" width={26} height={12} alt="Далее" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Catalog;
