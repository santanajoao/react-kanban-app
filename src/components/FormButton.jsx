import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GrFormClose } from 'react-icons/gr';
import { BsPlusLg } from 'react-icons/bs';

export default class FormButton extends Component {
  state = {
    isAdding: false,
  };

  handleAddingStatus = () => {
    this.setState(({ isAdding }) => ({ isAdding: !isAdding }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { submitHandler } = this.props;
    this.setState({ isAdding: false });
    submitHandler();
  };

  render() {
    const {
      blockClassName,
      inputPlaceholder,
      openBtnText,
      submitBtnText,
      inputChangeHandler,
      inputValue,
    } = this.props;
    const { isAdding } = this.state;
    return (
      <>
        {isAdding ? (
          <form
            onSubmit={this.handleSubmit}
            className={`${blockClassName}__form`}
          >
            <input
              value={inputValue}
              type="text"
              placeholder={inputPlaceholder}
              onChange={inputChangeHandler}
              name="inputValue"
              className={`${blockClassName}__form-input`}
              autoFocus
            />
            <div className={`${blockClassName}__btns-wrapper`}>
              <button
                type="submit"
                disabled={!inputValue}
                className={`${blockClassName}__submit-btn`}
              >
                {submitBtnText}
              </button>
              <button
                type="button"
                title="Fechar"
                onClick={this.handleAddingStatus}
                className={`${blockClassName}__close-form-btn`}
              >
                <GrFormClose className="close-form-icon" />
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={this.handleAddingStatus}
            className={`${blockClassName}__plus-btn`}
          >
            <BsPlusLg className={`${blockClassName}__add-icon`} />
            <span className={` ${blockClassName}__plus-btn-text`}>
              {openBtnText}
            </span>
          </button>
        )}
      </>
    );
  }
}

FormButton.propTypes = {
  blockClassName: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  openBtnText: PropTypes.string.isRequired,
  submitBtnText: PropTypes.string.isRequired,
  inputChangeHandler: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};
