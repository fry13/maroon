import Socials from "../Socials/Socials";
import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <article id="contacts" className={styles.contacts}>
      <div className={styles.contacts_block}>
        <h2>Контакты</h2>
        <h3>Адрес</h3>
        <p>
          Санкт-Петербург,
          <br /> ул. Большая Конюшенная, 19
        </p>
        <h3>Телефон</h3>
        <p>+7 (923) 888-90-60</p>
        <h3>E-mail</h3>
        <p>info@maroon.ru</p>
        <Socials />
        <iframe src="https://yandex.ru/map-widget/v1/?ll=30.323384%2C59.937888&mode=whatshere&whatshere%5Bpoint%5D=30.323058%2C59.938652&whatshere%5Bzoom%5D=17&z=16.11"></iframe>
      </div>
    </article>
  );
};

export default Contacts;
