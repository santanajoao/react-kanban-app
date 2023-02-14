import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EditableTitle from './EditableTitle';
import FormButton from './FormButton';
import BoardCard from './BoardCard';
import {
  addCard,
  moveColumn,
  removeColumn,
  setColumnTitle,
} from '../redux/actions';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import '../styles/BoardColumn.css';

class BoardColumn extends Component {
  state = {
    newCardName: '',
  };

  handleInputChange = ({ target }) => {
    this.setState({ newCardName: target.value });
  };

  submitHandler = () => {
    const { index, dispatch } = this.props;
    const { newCardName } = this.state;
    this.setState({ newCardName: '' });
    dispatch(addCard(index, newCardName));
  };

  render() {
    const { cards, title, index, dispatch, length } = this.props;
    const { newCardName } = this.state;
    return (
      <div className="BoardColumn">
        <header className="BoardColumn__header">
          <EditableTitle
            title={title}
            onEnter={(newTitle) =>
              dispatch(setColumnTitle({ index, newTitle }))
            }
            blockClassName="BoardColumn"
          />

          <div className="BoardColumn__btns-wrapper">
            {length > 1 && (
              <div className="BoardColumn__movement-btns-wrapper">
                <button
                  type="button"
                  title="Mover para a esquerda"
                  onClick={() => dispatch(moveColumn(index, -1))}
                  className="BoardColumn__movement-btn"
                >
                  <AiOutlineLeft className="BoardColumn__movement-icon" />
                </button>
                <button
                  type="button"
                  title="Mover para a direita"
                  onClick={() => dispatch(moveColumn(index, 1))}
                  className="BoardColumn__movement-btn"
                >
                  <AiOutlineRight className="BoardColumn__movement-icon" />
                </button>
              </div>
            )}

            <button
              type="button"
              title="Apagar coluna"
              onClick={() => dispatch(removeColumn(index))}
              className="BoardColumn__delete-btn"
            >
              <FaTrashAlt className="BoardColumn__delete-icon" />
            </button>
          </div>
        </header>

        <ol className="BoardColumn__cards-list">
          {cards.map(({ id, title }, cardIndex) => (
            <li key={id}>
              <BoardCard title={title} index={cardIndex} columnIndex={index} />
            </li>
          ))}
        </ol>

        <footer className="BoardColumn__footer">
          <FormButton
            blockClassName="BoardColumn"
            inputPlaceholder="Insira o título do cartão"
            openBtnText="Adicionar um cartão"
            submitBtnText="Adicionar cartão"
            submitHandler={this.submitHandler}
            inputChangeHandler={this.handleInputChange}
            inputValue={newCardName}
          />
        </footer>
      </div>
    );
  }
}

BoardColumn.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(BoardColumn);
