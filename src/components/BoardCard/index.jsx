import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { BiMoveHorizontal } from 'react-icons/bi';
import { BsTextLeft } from 'react-icons/bs';
import { openDetails, openMove } from '../../redux/actions';
import styles from './style.module.css';

export default function BoardCard(props) {
  const { title, columnIndex, description, index } = props;
  const dispatch = useDispatch();

  return (
    <div className={styles.board_card}>
      <button
        title="Mover cartão para outra coluna"
        onClick={() => dispatch(openMove(columnIndex, index))}
        className={styles.move_button}
      >
        <BiMoveHorizontal className={styles.move_icon} />
      </button>

      <button
        onClick={() => dispatch(openDetails(columnIndex, index))}
        title="Ir para os detalhes do cartão"
        className={styles.details_button}
      >
        <span className={styles.title}>{title}</span>

        {description && (
          <span className={styles.footer}>
            <BsTextLeft className={styles.footer_icon} />
          </span>
        )}
      </button>
    </div>
  );
}

BoardCard.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  columnIndex: PropTypes.number.isRequired,
};
