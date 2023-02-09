import React, { Component } from 'react';
import EditableTitle from './EditableTitle';
import '../styles/Header.css';

export default class Header extends Component {
  state = {
    title: 'Meu quadro',
  };

  handleTitleChange = (event) => {
    const { value } = event.target;
    this.setState({ title: value });
  };

  render() {
    const { title } = this.state;
    return (
      <header className="Header">
        <EditableTitle
          handleTitleChange={ this.handleTitleChange }
          title={ title }
          blockClassName="Header"
        />
      </header>
    );
  }
}
