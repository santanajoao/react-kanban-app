import React, { Component } from 'react';
import EditableTitle from './EditableTitle';
import '../styles/Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <EditableTitle title="Meu quadro" blockClassName="Header" />
      </header>
    );
  }
}
