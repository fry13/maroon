import Image from "next/image";
import Link from "next/link";
import styles from "./Socials.module.scss";

const Socials = () => {
  return (
    <nav className={styles.socials}>
      <Link href="/">
        <Image
          src="/socials/facebook.svg"
          alt="facebook"
          width={11}
          height={18}
        />
      </Link>
      <Link href="/">
        <Image
          src="/socials/insta.svg"
          alt="instagram"
          width={20}
          height={20}
        />
      </Link>
      <Link href="/">
        <Image
          src="/socials/twitter.svg"
          alt="twitter"
          width={20}
          height={17}
        />
      </Link>
    </nav>
  );
};

export default Socials;
