import Image from "next/image";
import styles from "./Individual.module.scss";

const Individual = () => {
  return (
    <section className={styles.individual}>
      <div className={styles.left_block}>
        <h2>Индивидуальный уход</h2>
        <p>
          Не всегда очевидно, какие элементы и минералы необходимы коже,
          <br /> а многочисленные эксперименты
          <br /> с разными средствами только ухудшают ее качество.
        </p>
        <p>
          Заполните анкету, и мы подберем уход, подходящий именно вам, учитывая
          ваш образ жизни, место жительства и другие факторы.
        </p>
        <button>Заполнить анкету</button>
        <Image src="/individual.jpg" width={670} height={451} alt="" />
      </div>
    </section>
  );
};

export default Individual;
