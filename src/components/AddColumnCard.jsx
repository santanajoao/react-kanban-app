import React, { Component } from 'react';
import '../styles/AddColumnCard.css';
import FormButton from './FormButton';

export default class AddColumnCard extends Component {
  render() {
    return (
      <div className="AddColumnCard">
        <FormButton
          blockClassName="AddColumnCard"
          inputPlaceholder="Insira o título da coluna"
          openBtnText="Adicionar uma coluna"
          submitBtnText="Adicionar coluna"
        />
      </div>
    );
  }
}
