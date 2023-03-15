import styles from "./Follow.module.scss";
import Image from "next/image";

const Follow = () => {
  return (
    <section className={styles.follow}>
      <div>
        <Image
          src="/follow_block/1.jpg"
          width={233}
          height={233}
          alt=""
        ></Image>
        <Image
          src="/follow_block/2.jpg"
          width={233}
          height={233}
          alt=""
        ></Image>
        <Image
          src="/follow_block/3.jpg"
          width={233}
          height={233}
          alt=""
        ></Image>
        <Image
          src="/follow_block/4.jpg"
          width={233}
          height={233}
          alt=""
        ></Image>
        <Image
          src="/follow_block/5.jpg"
          width={233}
          height={233}
          alt=""
        ></Image>
        <Image
          src="/follow_block/6.jpg"
          width={233}
          height={233}
          alt=""
        ></Image>
      </div>
      <div>
        <h2>Присоединяйтесь к нам</h2>
        <p>
          Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и акциях
          первыми
        </p>
        <button>Подписаться</button>
      </div>
    </section>
  );
};

export default Follow;
