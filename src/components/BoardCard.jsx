import React, { Component } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import { removeCard } from '../redux/actions';
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

export default connect()(BoardCard);
