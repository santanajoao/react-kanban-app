import EditableText from '../EditableText';
import styles from './style.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <EditableText title="Meu quadro" styles={styles} />
    </header>
  );
}
