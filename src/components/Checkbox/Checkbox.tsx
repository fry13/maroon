import styles from "./Checkbox.module.scss";

type Props = {
  id: string;
  name: string;
};

const Checkbox = ({ id, name }: Props) => {
  return (
    <label className={styles.input_wrapper} htmlFor={id}>
      <input className={styles.input} id={id} type="checkbox" />
      <span className={styles.checkmark}></span>
      {name}
    </label>
  );
};

export default Checkbox;
