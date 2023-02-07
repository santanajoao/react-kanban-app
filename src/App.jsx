import React, { Component } from 'react';
import ColumnsList from './components/ColumnsList';
import Header from './components/Header';
import './styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ColumnsList />
      </div>
    );
  }
}
