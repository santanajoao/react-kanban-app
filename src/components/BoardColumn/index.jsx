import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import EditableText from '../EditableText';
import FormButton from '../FormButton';
import BoardCard from '../BoardCard';
import {
  addCard,
  moveColumn,
  removeColumn,
  setColumnTitle,
} from '../../redux/actions';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './style.module.css';

function BoardColumn(props) {
  const INITIAL_CARD_NAME = '';
  const [newCardName, setNewCardName] = useState(INITIAL_CARD_NAME);
  const { title, cards, index, length } = props;
  const dispatch = useDispatch();

  function submitHandler() {
    dispatch(addCard(index, newCardName));
    setNewCardName(INITIAL_CARD_NAME);
  }

  return (
    <div className={styles.board_column}>
      <header className={styles.header}>
        <EditableText
          title={title}
          onEnter={(newTitle) => dispatch(setColumnTitle({ index, newTitle }))}
          styles={styles}
        />

        <div className={styles.buttons_wrapper}>
          {length > 1 && (
            <div className={styles.movement_buttons_wrapper}>
              <button
                type="button"
                title="Mover para a esquerda"
                onClick={() => dispatch(moveColumn(index, -1))}
                className={styles.movement_button}
              >
                <AiOutlineLeft className={styles.movement_icon} />
              </button>
              <button
                type="button"
                title="Mover para a direita"
                onClick={() => dispatch(moveColumn(index, 1))}
                className={styles.movement_button}
              >
                <AiOutlineRight className={styles.movement_icon} />
              </button>
            </div>
          )}

          <button
            type="button"
            title="Apagar coluna"
            onClick={() => dispatch(removeColumn(index))}
            className={styles.delete_button}
          >
            <FaTrashAlt className={styles.delete_icon} />
          </button>
        </div>
      </header>

      <ol className={styles.card_list}>
        {cards.map(({ id, title, description }, cardIndex) => (
          <li key={id}>
            <BoardCard
              title={title}
              index={cardIndex}
              description={description}
              columnIndex={index}
            />
          </li>
        ))}
      </ol>

      <footer>
        <FormButton
          styles={styles}
          inputPlaceholder="Insira o título do cartão"
          openBtnText="Adicionar um cartão"
          submitBtnText="Adicionar cartão"
          submitHandler={submitHandler}
          inputChangeHandler={({ target }) => setNewCardName(target.value)}
          inputValue={newCardName}
        />
      </footer>
    </div>
  );
}

BoardColumn.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default BoardColumn;
