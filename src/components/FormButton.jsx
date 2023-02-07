import React, { Component } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { BsPlusLg } from 'react-icons/bs';

export default class FormButton extends Component {
  state = {
    isAdding: false,
    inputValue: '',
  };

  handleAddingStatus = () => {
    this.setState(({ isAdding }) => ({ isAdding: !isAdding }));
  };

  render() {
    const {
      blockClassName, inputPlaceholder, openBtnText, submitBtnText
    } = this.props;
    const { isAdding } = this.state;
    return (
      <>
        { isAdding ? (
          <form className={ `${blockClassName}__form` }>
            <input
              type="text"
              placeholder={ inputPlaceholder }
              name="inputValue"
              className={ `${blockClassName}__form-input` }
              autoFocus
            />
            <div className={ `${blockClassName}__btns-wrapper` }>
              <button
                className={ `${blockClassName}__submit-btn` }
                type="button"
              >
                { submitBtnText }
              </button>
              <button
                type="button"
                onClick={ this.handleAddingStatus }
                className={ `${blockClassName}__close-form-btn` }
              >
                <GrFormClose className="close-form-icon" />
              </button>
            </div>
          </form>
          ) : (
          <button
            onClick={ this.handleAddingStatus }
            className={ `${blockClassName}__plus-btn` }>
            <BsPlusLg className={ `${blockClassName}__add-icon` } />
            <span className={` ${blockClassName}__plus-btn-text` }>
              { openBtnText }
            </span>
          </button>
        ) }
      </>
    );
  }
}
