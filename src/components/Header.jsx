import React, { Component } from 'react';
import '../styles/Header.css';

export default class Header extends Component {
  state = {
    boardName: 'Meu Quadro',
    editingBoardName: false,
  };

  handleBoardNameClick = () => this.setState({ editingBoardName: true });

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleInputEnter = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editingBoardName: false });
    }
  };

  render() {
    const { boardName, editingBoardName } = this.state;
    const boardNameInputStyle = { width: `${boardName.length + 2.4}ch` };
    return (
      <header className="Header">
        { editingBoardName ? (
          <input
            value={ boardName }
            type="text"
            style={ boardNameInputStyle }
            onKeyDown={ this.handleInputEnter }
            onChange={ this.handleInputChange }
            name="boardName"
            className="Header__board-input"
            autoFocus
          />
        ) : (
          <h1
            onClick={ this.handleBoardNameClick }
            className="Header__board-title"
          >
            { boardName || 'Quadro sem nome' }
          </h1>
        ) }
      </header>
    );
  }
}
