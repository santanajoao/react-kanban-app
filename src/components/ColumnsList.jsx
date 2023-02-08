import React, { Component } from 'react';
import BoardColumn from './BoardColumn';
import '../styles/ColumnsList.css';
import AddBoardColumn from './AddBoardColumn';

export default class ColumnsList extends Component {
  state = {
    columns: [],
  };

  render() {
    return (
      <ol className="ColumnsList">
        <li>
          <BoardColumn />
        </li>
        <li>
          <BoardColumn />
        </li>
        <li>
          <AddBoardColumn />
        </li>
      </ol>
    );
  }
}
