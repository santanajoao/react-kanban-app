import React, { Component } from 'react';
import '../styles/AddBoardColumn.css';
import FormButton from './FormButton';

export default class AddBoardColumn extends Component {
  state = {
    columnTitle: '',
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ columnTitle: value });
  }

  addColumn = () => {
    const { addColumnHandler } = this.props;
    const { columnTitle } = this.state;
    addColumnHandler(columnTitle)
  };

  render() {
    const { columnTitle } = this.state;
    return (
      <div className="AddBoardColumn">
        <FormButton
          submitHandler={ this.addColumn }
          inputChangeHandler={ this.handleInputChange }
          inputValue={ columnTitle }
          blockClassName="AddBoardColumn"
          inputPlaceholder="Insira o título da coluna"
          openBtnText="Adicionar uma coluna"
          submitBtnText="Adicionar coluna"
        />
      </div>
    );
  }
}
