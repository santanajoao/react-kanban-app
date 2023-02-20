import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/actions';
import FormButton from '../FormButton';
import styles from './style.module.css';

export default function AddBoardColumn() {
  const INITIAL_TITLE = '';
  const [columnTitle, setColumnTitle] = useState(INITIAL_TITLE);
  const dispatch = useDispatch();

  function add() {
    dispatch(addColumn(columnTitle));
    setColumnTitle(INITIAL_TITLE);
  }

  return (
    <div className={styles.add_board_column}>
      <FormButton
        submitHandler={add}
        inputChangeHandler={({ target }) => setColumnTitle(target.value)}
        inputValue={columnTitle}
        styles={styles}
        inputPlaceholder="Insira o título da coluna"
        openBtnText="Adicionar uma coluna"
        submitBtnText="Adicionar coluna"
      />
    </div>
  );
}
