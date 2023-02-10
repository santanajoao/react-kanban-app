import React, { Component } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import EditableTitle from './EditableTitle';
import FormButton from './FormButton';
import '../styles/BoardColumn.css';
import BoardCard from './BoardCard';

export default class BoardColumn extends Component {
  state = {
    newCardName: '',
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({ newCardName: value });
  };

  submitHandler = () => {
    const { id, handleCardCreation } = this.props;
    const { newCardName } = this.state;
    this.setState({ newCardName: '' });
    handleCardCreation(id, newCardName);
  };

  render() {
    const {
      cards,title, handleDelete, id,handlePositionChange,
      handleTitleChange, handleCardCreation,
    } = this.props;
    const { newCardName } = this.state;
    return (
      <div className="BoardColumn">
        <header className="BoardColumn__header">
          <EditableTitle
            id={ id }
            title={ title }
            handleTitleChange={ handleTitleChange }
            blockClassName="BoardColumn"
          />

          <div className="BoardColumn__btns-wrapper">
            <div className="BoardColumn__movement-btns-wrapper">
              <button
                type="button"
                title="Mover para a esquerda"
                onClick={ () => handlePositionChange(id, -1) }
                className="BoardColumn__movement-btn"
              >
                <AiOutlineLeft className="BoardColumn__movement-icon" />  
              </button>
              <button
                type="button"
                title="Mover para a direita"
                onClick={ () => handlePositionChange(id, 1) }
                className="BoardColumn__movement-btn"
              >
                <AiOutlineRight className="BoardColumn__movement-icon" />
              </button>
            </div>
            <button
              type="button"
              title="Apagar coluna"
              onClick={ () => handleDelete(id) }
              className="BoardColumn__delete-btn"
            >
              <FaTrashAlt className="BoardColumn__delete-icon" />
            </button>
          </div>
        </header>

        <ol className="BoardColumn__cards-list">
          { cards.map(() => (
            <li>
              <BoardCard />
            </li>
          )) }
        </ol>

        <footer className="BoardColumn__footer">
          <FormButton
            blockClassName="BoardColumn"
            inputPlaceholder="Insira o título do cartão"
            openBtnText="Adicionar um cartão"
            submitBtnText="Adicionar cartão"
            submitHandler={ this.submitHandler }
            inputChangeHandler={ this.handleInputChange }
            inputValue={ newCardName }
          />
        </footer>
      </div>
    );
  }
}
