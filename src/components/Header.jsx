import React, { Component } from 'react';
import '../styles/Header.css';
import EditableTitle from './EditableTitle';

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <EditableTitle
          initialText="Meu Quadro"
          blockClassName="Header"
        />
      </header>
    );
  }
}
