import React, { Component } from 'react';
import '../styles/AddBoardColumn.css';
import FormButton from './FormButton';

export default class AddBoardColumn extends Component {
  render() {
    return (
      <div className="AddBoardColumn">
        <FormButton
          blockClassName="AddBoardColumn"
          inputPlaceholder="Insira o título da coluna"
          openBtnText="Adicionar uma coluna"
          submitBtnText="Adicionar coluna"
        />
      </div>
    );
  }
}
