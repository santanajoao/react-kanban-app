import React, { Component } from 'react';

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
          <>
            <input
              type="text"
              placeholder="Insira o título da coluna"
              name="newColumnTitle"
            />
            <button type="button">Adicionar coluna</button>
            <button type="button" onClick={ this.handleAddingStatus }>X</button>
          </>
          ) : (
          <button type="button" onClick={ this.handleAddingStatus }>
            Adicionar outra lista
          </button>
        ) }
      </div>
    );
  }
}
