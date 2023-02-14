import React, { Component } from 'react';
import { GrClose } from 'react-icons/gr';
import { connect } from 'react-redux';
import { closeModal } from '../redux/actions';
import '../styles/Modal.css';
import EditableTitle from './EditableTitle';

class Modal extends Component {
  state = {
    editing: false,
    description: this.props.description,
    cardTitle: this.props.cardTitle,
  };

  cancelEditing = () => {
    const { description } = this.props;
    this.setState({ editing: false, description });
  };

  render() {
    const { dispatch, columnTitle } = this.props;
    const { editing, description, cardTitle } = this.state;
    return (
      <div className="Modal__overlay">
        <div className="Modal">
          <button
            onClick={() => dispatch(closeModal())}
            className="Modal__close-btn"
          >
            <GrClose className="Modal__close-icon" />
          </button>

          <div className="Modal__title-wrapper">
            <EditableTitle title={cardTitle} blockClassName="Modal" />
            <p className="Modal__column-paragraph">
              Na coluna{' '}
              <span className="Modal__column-title">{columnTitle}</span>
            </p>
          </div>

          <div className="Modal__description-wrapper">
            <h2 className="Modal__description-title">Descrição</h2>
            {editing ? (
              <form className="Modal__description-form">
                <textarea
                  value={description}
                  className="Modal__description-input"
                />
                <div className="Modal__form-btns-wrapper">
                  <button
                    type="button"
                    className="Modal__form-btn Modal__save-btn"
                  >
                    Salvar
                  </button>
                  <button
                    type="button"
                    onClick={this.cancelEditing}
                    className="Modal__form-btn"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            ) : (
              <button
                onClick={() => this.setState({ editing: true })}
                className="Modal__edit-btn"
              >
                <p className="Modal__description">{description}</p>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ kanban }) => ({
  cardTitle: kanban.editingCardName,
  cardDescription: kanban.editingCardDescription,
  columnTitle: kanban.editingCardColumnName,
});

export default connect(mapStateToProps)(Modal);
