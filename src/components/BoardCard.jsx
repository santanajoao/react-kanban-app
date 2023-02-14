import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BiMoveHorizontal } from 'react-icons/bi';
import { openModal } from '../redux/actions';
import '../styles/BoardCard.css';

class BoardCard extends Component {
  render() {
    const { title, dispatch, columnIndex, index } = this.props;
    return (
      <div className="BoardCard">
        <button
          title="Mover cartão para outra coluna"
          onClick={() => dispatch({ type: 'NONE' })}
          className="BoardCard__move-btn"
        >
          <BiMoveHorizontal className="BoardCard__move-icon" />
        </button>

        <button
          onClick={() => dispatch(openModal(columnIndex, index))}
          className="BoardCard__details-btn"
        >
          <h3 className="BoardCard__title">{title}</h3>
        </button>
      </div>
    );
  }
}

BoardCard.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  columnIndex: PropTypes.number.isRequired,
};

export default connect()(BoardCard);
