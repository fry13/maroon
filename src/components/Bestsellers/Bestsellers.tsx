import Catalog from "../Catalog/Catalog";
import styles from "./Bestsellers.module.scss";
import data from "@/data";

const Bestsellers = () => {
  return (
    <article className={styles.bestsellers}>
      <div className={styles.title_block}>
        <h2>Бестселлеры</h2>
        <p>Легендарные продукты, завоевавшие любовь наших клиентов</p>
        <button>Смотреть все</button>
      </div>
      <Catalog data={data} size={3} />
    </article>
  );
};

export default Bestsellers;
