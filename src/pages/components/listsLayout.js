import styles from "./listsLayout.module.css";

export default function listsLayout({ children }) {
  return <ul className={styles.lists}>{children}</ul>;
}
