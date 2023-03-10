import Image from "next/image";
import Link from "next/link";
import Header from "../Header/Header";
import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <main className={styles.intro}>
      <Header noBorder />
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <Link href="/catalog">
            <Image src="/intro1.jpg" width={330} height={422} alt="" />
          </Link>
          <div>
            <Link href="/catalog">Уход для лица</Link>
            <Link href="/catalog">
              <Image src="/right.svg" width={26} height={12} alt="" />
            </Link>
          </div>
        </div>
        <div className={styles.title}>
          <h1>MAROON</h1>
          <p>
            Натуральная косметика
            <br /> для бережного ухода за кожей
          </p>
          <button>Подробнее</button>
        </div>
        <div className={styles.card}>
          <Link href="/catalog">
            <Image src="/intro2.jpg" width={330} height={422} alt="" />
          </Link>
          <div>
            <Link href="/catalog">Уход для тела</Link>
            <Link href="/catalog">
              <Image src="/right.svg" width={26} height={12} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Intro;
