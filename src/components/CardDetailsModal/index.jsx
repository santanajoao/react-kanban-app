import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GrClose } from 'react-icons/gr';
import {
  closeDetails,
  setCardTitle,
  setCardDescription,
} from '../../redux/actions';
import EditableTitle from '../EditableTitle';
import ModalWrapper from '../ModalWrapper';
import './style.css';

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
    <ModalWrapper>
      <button
        onClick={() => dispatch(closeDetails())}
        className="CardDetailsModal__close-btn"
      >
        <GrClose className="CardDetailsModal__close-icon" />
      </button>

      <div className="CardDetailsModal__title-wrapper">
        <EditableTitle
          title={cardTitle}
          onEnter={(title) => dispatch(setCardTitle(title))}
          blockClassName="CardDetailsModal"
        />
        <p className="CardDetailsModal__column-paragraph">
          Na coluna{' '}
          <span className="CardDetailsModal__column-title">{columnTitle}</span>
        </p>
      </div>

      <div className="CardDetailsModal__description-wrapper">
        <h2 className="CardDetailsModal__description-title">Descrição</h2>
        {editing ? (
          <form className="CardDetailsModal__description-form">
            <textarea
              value={description}
              onChange={({ target }) => setDescription(target.value)}
              className="CardDetailsModal__description-input"
              autoFocus
            />
            <div className="CardDetailsModal__form-btns-wrapper">
              <button
                type="button"
                onClick={saveEditing}
                className="CardDetailsModal__form-btn CardDetailsModal__save-btn"
              >
                Salvar
              </button>
              <button
                type="button"
                onClick={cancelEditing}
                className="CardDetailsModal__form-btn"
              >
                Cancelar
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="CardDetailsModal__edit-btn"
          >
            <p className="CardDetailsModal__description">{description}</p>
          </button>
        )}
      </div>
    </ModalWrapper>
  );
}

export default CardDetailsModal;
