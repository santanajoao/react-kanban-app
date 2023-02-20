import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GrClose } from 'react-icons/gr';
import {
  closeDetails,
  setCardTitle,
  setCardDescription,
} from '../../redux/actions';
import EditableText from '../EditableText';
import ModalWrapper from '../ModalWrapper';
import styles from './style.module.css';

function CardDetailsModal() {
  const { editingColumnIndex, editingCardIndex, columns } = useSelector(
    (state) => state.kanban
  );

  const { title: columnTitle, cards } = columns[editingColumnIndex];
  const { title: cardTitle, description: cardDescription } =
    cards[editingCardIndex];
  const [editing, setEditing] = useState(false);
  const [description, setDescription] = useState(cardDescription);

  const dispatch = useDispatch();

  function cancelEditing() {
    setEditing(false);
    setDescription(cardDescription);
  }

  function saveEditing() {
    dispatch(setCardDescription(description.trim()));
    setEditing(false);
  }

  return (
    <ModalWrapper modalClassName={styles.modal}>
      <button
        title="Fechar"
        onClick={() => dispatch(closeDetails())}
        className={styles.close_button}
      >
        <GrClose className={styles.close_icon} />
      </button>

      <div className={styles.title_wrapper}>
        <EditableText
          styles={styles}
          title={cardTitle}
          onEnter={(title) => dispatch(setCardTitle(title))}
        />
        <p className={styles.column_title}>
          Na coluna <span className={styles.underline}>{columnTitle}</span>
        </p>
      </div>

      <div className={styles.description_wrapper}>
        <h2 className={styles.description_heading}>Descrição</h2>
        {editing ? (
          <form className={styles.form}>
            <textarea
              value={description}
              onChange={({ target }) => setDescription(target.value)}
              className={styles.form_input}
              autoFocus
            />
            <div className={styles.buttons_wrapper}>
              <button
                type="button"
                onClick={saveEditing}
                className={`${styles.form_button} ${styles.save_button}`}
              >
                Salvar
              </button>
              <button
                type="button"
                onClick={cancelEditing}
                className={styles.form_button}
              >
                Cancelar
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className={styles.edit_button}
            title="Editar descrição"
          >
            <p className={styles.description}>{description}</p>
          </button>
        )}
      </div>
    </ModalWrapper>
  );
}

export default CardDetailsModal;
