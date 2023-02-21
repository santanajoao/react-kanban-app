import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CloseButton from '../CloseButton';
import { closeDetails, removeCard } from '../../redux/actions';
import ModalOverlay from '../ModalOverlay';
import styles from './style.module.css';
import CardAndColumnTitles from './CardAndColumnTitles';
import CardDescription from './CardDescription';

function CardDetailsModal() {
  const { editingColumnIndex, editingCardIndex, columns } = useSelector(
    (state) => state.kanban
  );

  const column = columns[editingColumnIndex];
  const card = column.cards[editingCardIndex];

  const [description, setDescription] = useState(card.description);

  const dispatch = useDispatch();

  return (
    <ModalOverlay>
      <div className={styles.modal}>
        <CloseButton onClick={() => dispatch(closeDetails())} />

        <CardAndColumnTitles
          styles={styles}
          cardTitle={card.title}
          columnTitle={column.title}
        />

        <CardDescription
          styles={styles}
          initialDescription={card.description}
          description={description}
          setDescription={setDescription}
        />

        <div>
          <button
            type="button"
            onClick={() => dispatch(removeCard())}
            className={styles.delete_button}
          >
            Deletar cartão
          </button>
        </div>
      </div>
    </ModalOverlay>
  );
}

export default CardDetailsModal;
