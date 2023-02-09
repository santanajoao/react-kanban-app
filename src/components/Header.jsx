import React, { Component } from 'react';
import '../styles/Header.css';
import EditableTitle from './EditableTitle';

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
          id={ 0 }
          handleTitleChange={ this.handleTitleChange }
          title={ title }
          blockClassName="Header"
        />
      </header>
    );
  }
}
