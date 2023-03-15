import { useSelector, useDispatch } from 'react-redux';
import ModalOverlay from '../ModalOverlay';
import styles from './style.module.css';
import CloseButton from '../CloseButton';
import { closeMove, moveCard } from '../../redux/actions';

export default function MoveCardModal() {
  const { columns, editingColumnIndex } = useSelector((state) => state.kanban);
  const dispatch = useDispatch();
  return (
    <ModalOverlay modalClassName={styles.modal}>
      <div className={styles.modal}>
        <CloseButton onClick={() => dispatch(closeMove())} />

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
