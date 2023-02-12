import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BoardColumn from './BoardColumn';
import AddBoardColumn from './AddBoardColumn';
import getNewIndex from '../utils/getNewIndex';
import '../styles/ColumnsList.css';

class ColumnsList extends Component {
  changePosition = (columnID, positionDifference) => {
    const { columns } = this.state;
    const currentIndex = columns.findIndex((column) => column.id === columnID);
    const newIndex = getNewIndex(columns, currentIndex, positionDifference);
    columns.splice(newIndex, 0, columns[currentIndex]);

    const newCurrentIndex =
      currentIndex > newIndex ? currentIndex + 1 : currentIndex;
    columns.splice(newCurrentIndex, 1);

    this.setState({ columns: columns });
  };

  render() {
    const { columns } = this.props;
    return (
      <ol className="ColumnsList">
        {columns.map(({ id, title, cards }) => (
          <li key={id}>
            <BoardColumn
              title={title}
              cards={cards}
              id={id}
              handlePositionChange={this.changePosition}
            />
          </li>
        ))}
        <li>
          <AddBoardColumn />
        </li>
      </ol>
    );
  }
}

ColumnsList.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cards: PropTypes.array.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = ({ kanban }) => ({
  columns: kanban.columns,
});

export default connect(mapStateToProps)(ColumnsList);
