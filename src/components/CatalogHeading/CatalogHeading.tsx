import { useState } from "react";
import Image from "next/image";
import styles from "./CatalogHeading.module.scss";
import { forFace, forBody, skinType } from "@/filters";
import Checkbox from "../Checkbox/Checkbox";

const CatalogHeading = () => {
  const [filterState, setFilterState] = useState<boolean>(false);
  let filterStyle: string;
  let filterButtonStyle: string;
  let crossButtonStyle: string;

  if (filterState) {
    filterStyle = `${styles.filter_container} ${styles.expanded}`;
    filterButtonStyle = styles.display_none;
    crossButtonStyle = styles.display_block;
  } else {
    filterStyle = `${styles.filter_container} ${styles.collapsed}`;
    filterButtonStyle = styles.display_block;
    crossButtonStyle = styles.display_none;
  }

  return (
    <section className={styles.heading}>
      <div className={styles.title}>
        <h1>Каталог</h1>
        <button
          className={filterButtonStyle}
          onClick={() => setFilterState(true)}
        >
          Фильтр
        </button>
        <button
          className={crossButtonStyle}
          onClick={() => setFilterState(false)}
        >
          <Image src="/cross.svg" width={18} height={18} alt="" />
        </button>
      </div>
      <form className={filterStyle}>
        <div className={styles.filter_col}>
          <p>Уход для лица</p>
          <ul>
            {forFace.map((item) => {
              return (
                <li key={item.id}>
                  <Checkbox id={item.id} name={item.name} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.filter_col}>
          <p>Уход для тела</p>
          <ul>
            {forBody.map((item) => {
              return (
                <li key={item.id}>
                  <Checkbox id={item.id} name={item.name} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.filter_col}>
          <p>Тип кожи</p>
          <ul>
            {skinType.map((item) => {
              return (
                <li key={item.id}>
                  <Checkbox id={item.id} name={item.name} />
                </li>
              );
            })}
          </ul>
          <div className={styles.buttons_wrapper}>
            <button onClick={(evt) => evt.preventDefault()}>Применить</button>
            <button onClick={(evt) => evt.preventDefault()}>Сбросить</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CatalogHeading;
