import styles from "./Follow.module.scss";
import Image from "next/image";

const Follow = () => {
  return (
    <section className={styles.follow}>
      <div>
        <Image
          src="/follow block/1.jpg"
          width={233}
          height={233}
          alt=""
        ></Image>
        <Image
          src="/follow block/2.jpg"
          width={233}
          height={233}
          alt=""
        ></Image>
        <Image
          src="/follow block/3.jpg"
          width={233}
          height={233}
          alt=""
        ></Image>
        <Image
          src="/follow block/4.jpg"
          width={233}
          height={233}
          alt=""
        ></Image>
        <Image
          src="/follow block/5.jpg"
          width={233}
          height={233}
          alt=""
        ></Image>
        <Image
          src="/follow block/6.jpg"
          width={233}
          height={233}
          alt=""
        ></Image>
      </div>
      <div>
        <h2>Присоединяйтесь к нам</h2>
        <p>
          Подпишитесь на наш аккаунт @marooncare
          <br /> и узнавайте о новиках и акциях первыми
        </p>
        <button>Подписаться</button>
      </div>
    </section>
  );
};

export default Follow;
