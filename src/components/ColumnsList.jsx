import React, { Component } from 'react';
import BoardColumn from './BoardColumn';
import AddBoardColumn from './AddBoardColumn';
import getNewIndex from '../utils/getNewIndex';
import '../styles/ColumnsList.css';

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

  deleteColumn = (id) => {
    const { columns } = this.state;
    this.setState({
      columns: columns.filter((column) => column.id !== id) ,
    });
  }

  handleColumnTitleChange = (event, id) => {
    const { value } = event.target;
    const { columns } = this.state;
    const targetIndex = columns.findIndex((column) => column.id === id);
    columns[targetIndex].title = value;
    this.setState({ columns: columns });
  };

  changePosition = (id, positionDifference) => {
    const { columns } = this.state;
    const currentIndex = columns.findIndex((column) => column.id === id);
    const newIndex = getNewIndex(columns, currentIndex, positionDifference);
    columns.splice(newIndex, 0, columns[currentIndex]);

    const newCurrentIndex = currentIndex > newIndex ? currentIndex + 1 : currentIndex;
    columns.splice(newCurrentIndex, 1);
  
    this.setState({ columns: columns });
  }

  render() {
    const { columns } = this.state;
    return (
      <ol className="ColumnsList">
        { columns.map(({ id, title, cards }) => (
          <li key={ id } >
            <BoardColumn
              title={ title }
              cards={ cards }
              id={ id }
              handlePositionChange={ this.changePosition }
              handleDelete={ this.deleteColumn }
              handleTitleChange={ this.handleColumnTitleChange }
            />
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
