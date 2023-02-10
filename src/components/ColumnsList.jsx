import React, { Component } from 'react';
import BoardColumn from './BoardColumn';
import AddBoardColumn from './AddBoardColumn';
import getNewIndex from '../utils/getNewIndex';
import '../styles/ColumnsList.css';

export default class ColumnsList extends Component {
  state = {
    columns: [],
    columnID: 0,
    cardID: 0,
  };

  createColumn = (columnTitle) => {
    const { columnID } = this.state;
    const newColumn = {
      id: columnID,
      title: columnTitle,
      cards: [],
    };

    this.setState(({ columns, columnID }) => ({
      columns: [...columns, newColumn],
      columnID: columnID + 1,
    }));
  };

  createCard = (columnID, cardTitle) => {
    const { cardID, columns } = this.state;
    const newCard = {
      id: cardID,
      title: cardTitle,
    };

    const columnIndex = columns.findIndex((column) => column.id === columnID);
    const prevCards = columns[columnIndex].cards;
    const newCards = [...prevCards, newCard];
    columns[columnIndex].cards = newCards;
    this.setState({
      cardID: cardID + 1,
      columns: columns,
    });
  };

  deleteColumn = (columnID) => {
    const { columns } = this.state;
    this.setState({
      columns: columns.filter((column) => column.id !== columnID) ,
    });
  }

  handleColumnTitleChange = (event, columnID) => {
    const { value } = event.target;
    const { columns } = this.state;
    const targetIndex = columns.findIndex((column) => column.id === columnID);
    columns[targetIndex].title = value;
    this.setState({ columns: columns });
  };

  changePosition = (columnID, positionDifference) => {
    const { columns } = this.state;
    const currentIndex = columns.findIndex((column) => column.id === columnID);
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
              handleCardCreation={ this.createCard }
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
