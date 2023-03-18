import { useState } from "react";
import Image from "next/image";
import styles from "./CatalogHeading.module.scss";
import { forFace, forBody, skinType } from "@/filters";
import Checkbox from "../Checkbox/Checkbox";

const CatalogHeading = () => {
  const [filterState, setFilterState] = useState<boolean>(false);
  const [faceCategoryState, setFaceCategoryState] = useState<boolean>(false);
  const [skinCategoryState, setSkinCategoryState] = useState<boolean>(false);
  const [skinTypeState, setSkinTypeState] = useState<boolean>(false);

  return (
    <section className={styles.heading}>
      <div className={styles.title}>
        <h1>Каталог</h1>
        <button
          className={filterState ? styles.filter_display_none : styles.filter_display_block}
          onClick={() => setFilterState(true)}
        >
          Фильтр
        </button>
        <button
          className={filterState ? styles.filter_display_block : styles.filter_display_none}
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
          <div className={styles.category_title}>
            <p>Уход для лица</p>
            <button
              type="button"
              className={`${styles.expand} ${
                faceCategoryState ? styles.display_none : styles.display_block
              }`}
              onClick={() => setFaceCategoryState(true)}
            >
              <Image src="/plus.svg" width={12} height={12} alt="Развернуть" />
            </button>
            <button
              type="button"
              className={`${styles.expand} ${
                faceCategoryState ? styles.display_block : styles.display_none
              }`}
              onClick={() => setFaceCategoryState(false)}
            >
              <Image src="/minus.svg" width={12} height={12} alt="Свернуть" />
            </button>
          </div>

          <ul
            className={
              faceCategoryState ? styles.display_block : styles.display_none
            }
          >
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
          <div className={styles.category_title}>
            <p>Уход для тела</p>
            <button
              type="button"
              className={`${styles.expand} ${
                skinCategoryState ? styles.display_none : styles.display_block
              }`}
              onClick={() => setSkinCategoryState(true)}
            >
              <Image src="/plus.svg" width={12} height={12} alt="Развернуть" />
            </button>
            <button
              type="button"
              className={`${styles.expand} ${
                skinCategoryState ? styles.display_block : styles.display_none
              }`}
              onClick={() => setSkinCategoryState(false)}
            >
              <Image src="/minus.svg" width={12} height={12} alt="Свернуть" />
            </button>
          </div>
          <ul
            className={
              skinCategoryState ? styles.display_block : styles.display_none
            }
          >
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
          <div className={styles.category_title}>
            <p>Тип кожи</p>
            <button
              type="button"
              className={`${styles.expand} ${
                skinTypeState ? styles.display_none : styles.display_block
              }`}
              onClick={() => setSkinTypeState(true)}
            >
              <Image src="/plus.svg" width={12} height={12} alt="Развернуть" />
            </button>
            <button
              type="button"
              className={`${styles.expand} ${
                skinTypeState ? styles.display_block : styles.display_none
              }`}
              onClick={() => setSkinTypeState(false)}
            >
              <Image src="/minus.svg" width={12} height={12} alt="Свернуть" />
            </button>
          </div>
          <ul
            className={
              skinTypeState ? styles.display_block : styles.display_none
            }
          >
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
