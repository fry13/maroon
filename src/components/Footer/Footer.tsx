import Image from "next/image";
import Logo from "../Logo/Logo";
import Link from "next/link";
import Socials from "../Socials/Socials";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles.top_wrapper}>
        <div>
          <Logo />
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link href="/catalog">Каталог</Link>
              </li>
              <li>
                <Link href="#history">О нас</Link>
              </li>
              <li>
                <Link href="#">Магазины</Link>
              </li>
              <li>
                <Link href="#contacts">Контакты</Link>
              </li>
            </ul>
            <Socials />
          </nav>
        </div>
      </div>
      <div className={styles.bottom_wrapper}>
        <div>
          <div>
            <p>Maroon</p>
            <Image
              src="/copyright.svg"
              width={14}
              height={14}
              alt="Copyright"
            ></Image>
            <p>2020 Все права защищены</p>
          </div>
          <Link href="#">Политика конфиденциальности</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
