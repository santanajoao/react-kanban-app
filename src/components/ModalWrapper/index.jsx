import styles from './style.module.css';

export default function ModalWrapper({ children, modalClassName }) {
  const className = `${styles.modal} ${modalClassName}`;
  return (
    <div className={styles.overlay}>
      <div className={className}>{children}</div>
    </div>
  );
}
