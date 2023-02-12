import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeCard } from '../redux/actions';
import { FaTrashAlt } from 'react-icons/fa';
import '../styles/BoardCard.css';

class BoardCard extends Component {
  render() {
    const { title, id, dispatch, columnID } = this.props;
    return (
      <div className="BoardCard">
        <button
          title="Remover cartão"
          onClick={() => dispatch(removeCard(columnID, id))}
          className="BoardCard__delete-btn"
        >
          <FaTrashAlt className="delete-btn-icon" />
        </button>

        <button className="BoardCard__details-btn">
          <h3 className="BoardCard__title">{title}</h3>
        </button>
      </div>
    );
  }
}

BoardCard.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  columnID: PropTypes.string.isRequired,
};

export default connect()(BoardCard);
