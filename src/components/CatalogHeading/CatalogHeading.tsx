import { useState } from "react";
import Image from "next/image";
import styles from "./CatalogHeading.module.scss";

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
            <li>
              <input id="1" type="checkbox" />
              <label htmlFor="1">Крема</label>
            </li>
            <li>
              <input id="2" type="checkbox" />
              <label htmlFor="2">Сыворотки</label>
            </li>
            <li>
              <input id="3" type="checkbox" />
              <label htmlFor="3">Маски</label>
            </li>
            <li>
              <input id="4" type="checkbox" />
              <label htmlFor="4">Пенки</label>
            </li>
            <li>
              <input id="5" type="checkbox" />
              <label htmlFor="5">Тоники</label>
            </li>
            <li>
              <input id="6" type="checkbox" />
              <label htmlFor="6">Пудры</label>
            </li>
          </ul>
        </div>
        <div className={styles.filter_col}>
          <p>Уход для тела</p>
          <ul>
            <li>
              <input id="11" type="checkbox" />
              <label htmlFor="11">Крема</label>
            </li>
            <li>
              <input id="12" type="checkbox" />
              <label htmlFor="12">Масла</label>
            </li>
            <li>
              <input id="13" type="checkbox" />
              <label htmlFor="13">Скрабы</label>
            </li>
            <li>
              <input id="14" type="checkbox" />
              <label htmlFor="14">Мыло</label>
            </li>
            <li>
              <input id="15" type="checkbox" />
              <label htmlFor="15">Бомбочки для ванны</label>
            </li>
            <li>
              <input id="16" type="checkbox" />
              <label htmlFor="16">Соль для ванны</label>
            </li>
          </ul>
        </div>
        <div className={styles.filter_col}>
          <p>Тип кожи</p>
          <ul>
            <li>
              <input id="21" type="checkbox" />
              <label htmlFor="21">Нормальная</label>
            </li>
            <li>
              <input id="22" type="checkbox" />
              <label htmlFor="22">Сухая</label>
            </li>
            <li>
              <input id="23" type="checkbox" />
              <label htmlFor="23">Жирная</label>
            </li>
            <li>
              <input id="24" type="checkbox" />
              <label htmlFor="24">Комбинированная</label>
            </li>
          </ul>
          <div className={styles.buttons_wrapper}>
            <button>Применить</button>
            <button>Сбросить</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CatalogHeading;
