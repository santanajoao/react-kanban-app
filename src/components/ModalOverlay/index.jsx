import styles from './style.module.css';

export default function ModalOverlay({ children }) {
  return <div className={styles.overlay}>{children}</div>;
}
