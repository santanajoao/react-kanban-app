import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BoardColumn from './BoardColumn';
import AddBoardColumn from './AddBoardColumn';
import '../styles/ColumnsList.css';

class ColumnsList extends Component {
  render() {
    const { columns } = this.props;
    return (
      <ol className="ColumnsList">
        {columns.map(({ id, title, cards }) => (
          <li key={id}>
            <BoardColumn title={title} cards={cards} id={id} />
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
