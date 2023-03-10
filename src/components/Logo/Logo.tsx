import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className={styles.logo}
        src="/logo.svg"
        height={20}
        width={130}
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;
