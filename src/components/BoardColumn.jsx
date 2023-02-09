import React, { Component } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import EditableTitle from './EditableTitle';
import FormButton from './FormButton';
import '../styles/BoardColumn.css';
import BoardCard from './BoardCard';

export default class BoardColumn extends Component {
  render() {
    const { cards, title } = this.props;
    return (
      <div className="BoardColumn">
        <header className="BoardColumn__header">
          <EditableTitle
            initialText={ title }
            blockClassName="BoardColumn"
          />

          <div className="BoardColumn__btns-wrapper">
            <div className="BoardColumn__movement-btns-wrapper">
              <button
                type="button"
                title="Mover para a esquerda"
                className="BoardColumn__movement-btn"
              >
                <AiOutlineLeft className="BoardColumn__movement-icon" />  
              </button>
              <button
                type="button"
                title="Mover para a direita"
                className="BoardColumn__movement-btn"
              >
                <AiOutlineRight className="BoardColumn__movement-icon" />
              </button>
            </div>
            <button
              type="button"
              title="Apagar coluna"
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
          />
        </footer>
      </div>
    );
  }
}
