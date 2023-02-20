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
    styles,
    inputPlaceholder,
    openBtnText,
    submitBtnText,
    inputChangeHandler,
    inputValue,
  } = props;

  if (isAdding) {
    return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          value={inputValue}
          type="text"
          placeholder={inputPlaceholder}
          onChange={inputChangeHandler}
          name="inputValue"
          className={styles.form__input}
          autoFocus
        />
        <div className={styles.buttons_wrapper}>
          <button
            type="submit"
            disabled={!inputValue}
            className={styles.submit_button}
          >
            {submitBtnText}
          </button>
          <button
            type="button"
            title="Fechar"
            onClick={handleIsAdding}
            className={styles.close_button}
          >
            <GrFormClose className={styles.close_button__icon} />
          </button>
        </div>
      </form>
    );
  }

  return (
    <button onClick={handleIsAdding} className={styles.add_button}>
      <BsPlusLg className={styles.add_button__icon} />
      <span className={styles.add_button__text}>{openBtnText}</span>
    </button>
  );
}

FormButton.propTypes = {
  inputPlaceholder: PropTypes.string.isRequired,
  openBtnText: PropTypes.string.isRequired,
  submitBtnText: PropTypes.string.isRequired,
  inputChangeHandler: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};
