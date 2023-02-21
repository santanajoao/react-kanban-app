import EditableText from '../EditableText';
import styles from './style.module.css';

export default function Header() {
  const boardTitle = JSON.parse(localStorage.getItem('boardName'));

  function handleEnter(value) {
    localStorage.setItem('boardName', JSON.stringify(value));
  }

  return (
    <header className={styles.header}>
      <EditableText
        title={boardTitle || 'Meu quadro'}
        styles={styles}
        onEnter={handleEnter}
      />
    </header>
  );
}
