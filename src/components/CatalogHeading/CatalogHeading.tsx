import { useState } from "react";
import Image from "next/image";
import styles from "./CatalogHeading.module.scss";
import { forFace, forBody, skinType } from "@/filters";

const CatalogHeading = () => {
  const [filterState, setFilterState] = useState<boolean>(false);
  let filterStyle: string;
  let filterButtonStyle: string;
  let crossButtonStyle: string;

  if (filterState) {
    filterStyle = `${styles.filter_container} ${styles.expanded}`;
    filterButtonStyle = styles.displayNone;
    crossButtonStyle = styles.displayBlock;
  } else {
    filterStyle = `${styles.filter_container} ${styles.collapsed}`;
    filterButtonStyle = styles.displayBlock;
    crossButtonStyle = styles.displayNone;
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
                  <label className={styles.input_wrapper} htmlFor={item.id}>
                    <input
                      className={styles.input}
                      id={item.id}
                      type="checkbox"
                    />
                    <span className={styles.checkmark}></span>
                    {item.name}
                  </label>
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
                  <label className={styles.input_wrapper} htmlFor={item.id}>
                    <input
                      className={styles.input}
                      id={item.id}
                      type="checkbox"
                    />
                    <span className={styles.checkmark}></span>
                    {item.name}
                  </label>
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
                  <label className={styles.input_wrapper} htmlFor={item.id}>
                    <input
                      className={styles.input}
                      id={item.id}
                      type="checkbox"
                    />
                    <span className={styles.checkmark}></span>
                    {item.name}
                  </label>
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
