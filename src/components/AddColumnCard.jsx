import React, { Component } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';
import '../styles/AddColumnCard.css';

export default class AddColumnCard extends Component {
  state = {
    isAdding: false,
    newColumnTitle: '',
  };

  handleAddingStatus = () => {
    this.setState(({ isAdding }) => ({ isAdding: !isAdding }));
  };

  render() {
    const { isAdding } = this.state;
    return (
      <div className="AddColumnCard">
        { isAdding ? (
          <form className="AddColumnCard__form">
            <input
              type="text"
              placeholder="Insira o título da coluna"
              name="newColumnTitle"
              className="AddColumnCard__title-input"
              autoFocus
            />
            <div className="AddColumnCard__btns-wrapper">
              <button
                className="AddColumnCard__submit-btn"
                type="button"
              >
                Adicionar coluna
              </button>
              <button
                type="button"
                onClick={ this.handleAddingStatus }
                className="AddColumnCard__close-form-btn"
              >
                <GrFormClose className="close-form-icon" />
              </button>
            </div>
          </form>
          ) : (
          <button
            type="button"
            onClick={ this.handleAddingStatus }
            className="AddColumnCard__open-form-btn"
          >
            <BsPlusLg className="open-form-icon" />
            Adicionar uma coluna
          </button>
        ) }
      </div>
    );
  }
}
