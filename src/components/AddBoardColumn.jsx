import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/AddBoardColumn.css';
import FormButton from './FormButton';
import { addColumn } from '../redux/actions';

class AddBoardColumn extends Component {
  state = {
    columnTitle: '',
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ columnTitle: value });
  }

  addColumn = () => {
    const { columnTitle } = this.state;
    const { dispatch } = this.props;
    dispatch(addColumn(columnTitle));
    this.setState({ columnTitle: '' });
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

export default connect()(AddBoardColumn);
