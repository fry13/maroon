import Link from "next/link";
import Image from "next/image";
import Socials from "../Socials/Socials";
import styles from "./BurgerMenu.module.scss";
import { useState } from "react";

const BurgerMenu = () => {
  const [burgerState, setBurgerState] = useState<boolean>(false);

  return (
    <div className={styles.burger_menu}>
      <div className={styles.button_wrapper}>
        <button>
          <Image
            className={burgerState ? styles.display_none : styles.display_block}
            src="/burger.svg"
            width={24}
            height={12}
            alt="Открыть меню"
            onClick={() => setBurgerState(true)}
          />
        </button>
        <button>
          <Image
            className={burgerState ? styles.display_block : styles.display_none}
            src="/cross.svg"
            width={18}
            height={18}
            alt="Закрыть меню"
            onClick={() => setBurgerState(false)}
          />
        </button>
      </div>
      <nav
        className={`${styles.links} ${
          burgerState ? styles.display_block : null
        }`}
      >
        <ul>
          <li>
            <Link href="/catalog">Каталог</Link>
          </li>
          <li>
            <Link href="#">О нас</Link>
          </li>
          <li>
            <Link href="#">Контакты</Link>
          </li>
        </ul>
        <Socials />
      </nav>
    </div>
  );
};

export default BurgerMenu;
