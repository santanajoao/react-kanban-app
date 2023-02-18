import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GrClose } from 'react-icons/gr';
import { closeModal, setCardTitle, setCardDescription } from '../redux/actions';
import EditableTitle from './EditableTitle';
import '../styles/Modal.css';

function Modal() {
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
    dispatch(setCardDescription(description));
    setEditing(false);
  }

  return (
    <div className="Modal__overlay">
      <div className="Modal">
        <button
          onClick={() => dispatch(closeModal())}
          className="Modal__close-btn"
        >
          <GrClose className="Modal__close-icon" />
        </button>

        <div className="Modal__title-wrapper">
          <EditableTitle
            title={cardTitle}
            onEnter={(title) => dispatch(setCardTitle(title))}
            blockClassName="Modal"
          />
          <p className="Modal__column-paragraph">
            Na coluna <span className="Modal__column-title">{columnTitle}</span>
          </p>
        </div>

        <div className="Modal__description-wrapper">
          <h2 className="Modal__description-title">Descrição</h2>
          {editing ? (
            <form className="Modal__description-form">
              <textarea
                value={description}
                onChange={({ target }) => setDescription(target.value)}
                className="Modal__description-input"
                autoFocus
              />
              <div className="Modal__form-btns-wrapper">
                <button
                  type="button"
                  onClick={saveEditing}
                  className="Modal__form-btn Modal__save-btn"
                >
                  Salvar
                </button>
                <button
                  type="button"
                  onClick={cancelEditing}
                  className="Modal__form-btn"
                >
                  Cancelar
                </button>
              </div>
            </form>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="Modal__edit-btn"
            >
              <p className="Modal__description">{description}</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
