import PropTypes from 'prop-types';
import { GrFormClose } from 'react-icons/gr';
import { BsPlusLg } from 'react-icons/bs';
import { useState } from 'react';

export default function FormButton(props) {
  const [isAdding, setIsAdding] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsAdding(false);
    props.submitHandler();
  }

  function handleIsAdding() {
    setIsAdding(!isAdding);
  }

  const {
    blockClassName,
    inputPlaceholder,
    openBtnText,
    submitBtnText,
    inputChangeHandler,
    inputValue,
  } = props;

  if (isAdding) {
    return (
      <form onSubmit={handleSubmit} className={`${blockClassName}__form`}>
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
            onClick={handleIsAdding}
            className={`${blockClassName}__close-form-btn`}
          >
            <GrFormClose className="close-form-icon" />
          </button>
        </div>
      </form>
    );
  }

  return (
    <button onClick={handleIsAdding} className={`${blockClassName}__plus-btn`}>
      <BsPlusLg className={`${blockClassName}__add-icon`} />
      <span className={` ${blockClassName}__plus-btn-text`}>{openBtnText}</span>
    </button>
  );
}

FormButton.propTypes = {
  blockClassName: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  openBtnText: PropTypes.string.isRequired,
  submitBtnText: PropTypes.string.isRequired,
  inputChangeHandler: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};
