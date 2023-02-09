import React, { Component } from 'react';
import BoardColumn from './BoardColumn';
import '../styles/ColumnsList.css';
import AddBoardColumn from './AddBoardColumn';

export default class ColumnsList extends Component {
  state = {
    columns: [],
    id: 0,
  };

  createColumn = (columnTitle) => {
    const { id } = this.state;
    const newColumn = {
      id,
      title: columnTitle,
      cards: [],
    };

    this.setState(({ columns, id }) => ({
      columns: [...columns, newColumn],
      id: id + 1,
    }));
  };

  render() {
    const { columns } = this.state;
    return (
      <ol className="ColumnsList">
        { columns.map((column) => (
          <li key={ column.id } >
            <BoardColumn { ...column } />
          </li>
        )) }
        <li>
          <AddBoardColumn
            addColumnHandler={ this.createColumn }
          />
        </li>
      </ol>
    );
  }
}
