import Image from "next/image";
import Logo from "../Logo/Logo";
import Link from "next/link";
import styles from "./Header.module.scss";

type Props = {
  noBorder?: boolean;
};

const Header = ({ noBorder }: Props) => {
  let headerStyle: string;
  if (noBorder) {
    headerStyle = `${styles.wrapper}`;
  } else {
    headerStyle = `${styles.border_bottom} ${styles.wrapper}`;
  }

  return (
    <header className={headerStyle}>
      <div className={styles.header}>
        <Logo />
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <Link href="/catalog">Каталог</Link>
            </li>
            <li>
              <Link href="#history">О нас</Link>
            </li>
            <li>
              <Link href="#contacts">Контакты</Link>
            </li>
          </ul>
          <div className={styles.icons_wrapper}>
            <Link className={styles.icon} href="#">
              <Image
                src="/profile.svg"
                height={21}
                width={16}
                alt="Личный кабинет"
              />
            </Link>
            <Link href="#">
              <Image src="/basket.svg" height={21} width={18} alt="Корзина" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
