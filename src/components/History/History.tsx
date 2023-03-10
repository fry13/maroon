import styles from "./History.module.scss";

const History = () => {
  return (
    <section id="history" className={styles.history}>
      <p>
        “Мы стремимся сделать уход за кожей доступным и приятным ритуалом для
        всех, кто хочет заботиться о себе и своем теле”{" "}
      </p>
      <button>Наша история</button>
    </section>
  );
};

export default History;
