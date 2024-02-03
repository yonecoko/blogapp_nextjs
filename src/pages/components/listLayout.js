import styles from "./listLayout.module.css";

export default function ListLayout({ children }) {
  return <li className={styles.list}>{children}</li>;
}
