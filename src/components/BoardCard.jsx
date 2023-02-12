import React, { Component } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import '../styles/BoardCard.css';

export default class BoardCard extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="BoardCard">
        <button title="Remover cartão" className="BoardCard__delete-btn">
          <FaTrashAlt className="delete-btn-icon" />
        </button>

        <button className="BoardCard__details-btn">
          <h3 className="BoardCard__title">{title}</h3>
        </button>
      </div>
    );
  }
}
