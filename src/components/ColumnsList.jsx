import React, { Component } from 'react';
import ColumnCard from './ColumnCard';
import '../styles/ColumnsList.css';
import AddColumnCard from './AddColumnCard';

export default class ColumnsList extends Component {
  state = {
    columns: [],
  };

  render() {
    return (
      <ol className="ColumnsList">
        <li>
          <ColumnCard />
        </li>
        <li>
          <ColumnCard />
        </li>
        <li>
          <AddColumnCard />
        </li>
      </ol>
    );
  }
}
