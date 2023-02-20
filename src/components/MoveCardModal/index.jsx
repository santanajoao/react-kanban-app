import { useSelector } from 'react-redux';
import ModalOverlay from '../ModalOverlay';
import { useDispatch } from 'react-redux';
import { GrClose } from 'react-icons/gr';
import styles from './style.module.css';
import { closeMove, moveCard } from '../../redux/actions';

export default function MoveCardModal() {
  const { columns, editingColumnIndex } = useSelector((state) => state.kanban);
  const dispatch = useDispatch();
  return (
    <ModalOverlay modalClassName={styles.modal}>
      <div className={styles.modal}>
        <button
          title="Fechar"
          onClick={() => dispatch(closeMove())}
          className={styles.close_button}
        >
          <GrClose className={styles.close_icon} />
        </button>
        <p className={styles.message}>
          Escolha para qual coluna o cartão será movido
        </p>
        <ol className={styles.list}>
          {columns.map((column, index) => (
            <li key={column.id}>
              <button
                title={`Mover para coluna ${column.title}`}
                onClick={() => dispatch(moveCard(index))}
                disabled={index === editingColumnIndex}
                className={styles.column_button}
              >
                {column.title}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </ModalOverlay>
  );
}
