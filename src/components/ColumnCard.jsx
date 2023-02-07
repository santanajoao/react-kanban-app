import React, { Component } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import { BsPlusLg } from 'react-icons/bs';
import '../styles/ColumnCard.css';

export default class ColumnCard extends Component {
  render() {
    return (
      <div className="ColumnCard">
        <header className="ColumnCard__header">
          <h2 className="ColumnCard__title">
            Title Title TitleTitle eee
          </h2>

          <div className="ColumnCard__btns-wrapper">
            <div className="ColumnCard__movement-btns-wrapper">
              <button
                type="button"
                title="Mover para a esquerda"
                className="ColumnCard__movement-btn"
              >
                <AiOutlineLeft className="ColumnCard__movement-icon" />  
              </button>
              <button
                type="button"
                title="Mover para a direita"
                className="ColumnCard__movement-btn"
              >
                <AiOutlineRight className="ColumnCard__movement-icon" />
              </button>
            </div>
            <button
              type="button"
              title="Apagar coluna"
              className="ColumnCard__delete-btn"
            >
              <FaTrashAlt className="ColumnCard__delete-icon" />
            </button>
          </div>
        </header>

        <ol></ol>

        <footer className="ColumnCard__footer">
          <button type="button" className="ColumnCard__add-btn">
            <BsPlusLg className="ColumnCard__add-icon" />
            <span className="ColumnCard__add-btn-text">
              Adicionar um cartão
            </span>
          </button>
        </footer>
      </div>
    );
  }
}
