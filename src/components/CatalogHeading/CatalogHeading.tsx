import { useState } from "react";
import Image from "next/image";
import styles from "./CatalogHeading.module.scss";
import { forFace, forBody, skinType } from "@/filters";
import Checkbox from "../Checkbox/Checkbox";

const CatalogHeading = () => {
  const [filterState, setFilterState] = useState<boolean>(false);
  
  return (
    <section className={styles.heading}>
      <div className={styles.title}>
        <h1>Каталог</h1>
        <button
          className={filterState ? styles.display_none : styles.display_block}
          onClick={() => setFilterState(true)}
        >
          Фильтр
        </button>
        <button
          className={filterState ? styles.display_block : styles.display_none}
          onClick={() => setFilterState(false)}
        >
          <Image src="/cross.svg" width={18} height={18} alt="" />
        </button>
      </div>
      <form
        className={`${styles.filter_container} ${
          filterState ? styles.expanded : styles.collapsed
        }`}
      >
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
          <div className={styles.desktop_buttons_wrapper}>
            <button onClick={(evt) => evt.preventDefault()}>Применить</button>
            <button onClick={(evt) => evt.preventDefault()}>Сбросить</button>
          </div>
        </div>
        <div className={styles.tablet_buttons_wrapper}>
          <button onClick={(evt) => evt.preventDefault()}>Применить</button>
          <button onClick={(evt) => evt.preventDefault()}>Сбросить</button>
        </div>
      </form>
    </section>
  );
};

export default CatalogHeading;
