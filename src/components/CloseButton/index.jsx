import { GrClose } from 'react-icons/gr';
import styles from './style.module.css';

export default function CloseButton({ onClick }) {
  return (
    <button title="Fechar" onClick={onClick} className={styles.close_button}>
      <GrClose className={styles.close_icon} />
    </button>
  );
}
