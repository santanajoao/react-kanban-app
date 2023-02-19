import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { BiMoveHorizontal } from 'react-icons/bi';
import { BsTextLeft } from 'react-icons/bs';
import { openDetails, openMove } from '../../redux/actions';
import './style.css';

export default function BoardCard(props) {
  const { title, columnIndex, description, index } = props;
  const dispatch = useDispatch();

  return (
    <div className="BoardCard">
      <button
        title="Mover cartão para outra coluna"
        onClick={() => dispatch(openMove(columnIndex, index))}
        className="BoardCard__move-btn"
      >
        <BiMoveHorizontal className="BoardCard__move-icon" />
      </button>

      <button
        onClick={() => dispatch(openDetails(columnIndex, index))}
        title="Ir para os detalhes do cartão"
        className="BoardCard__details-btn"
      >
        <span className="BoardCard__title">{title}</span>

        {description && (
          <span className="BoardCard__footer">
            <BsTextLeft className="BoardCard__footer-icon" />
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
