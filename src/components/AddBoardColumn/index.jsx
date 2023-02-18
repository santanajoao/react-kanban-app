import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/actions';
import FormButton from '../FormButton';
import './style.css';

export default function AddBoardColumn() {
  const INITIAL_TITLE = '';
  const [columnTitle, setColumnTitle] = useState(INITIAL_TITLE);
  const dispatch = useDispatch();

  function add() {
    dispatch(addColumn(columnTitle));
    setColumnTitle(INITIAL_TITLE);
  }

  return (
    <div className="AddBoardColumn">
      <FormButton
        submitHandler={add}
        inputChangeHandler={({ target }) => setColumnTitle(target.value)}
        inputValue={columnTitle}
        blockClassName="AddBoardColumn"
        inputPlaceholder="Insira o título da coluna"
        openBtnText="Adicionar uma coluna"
        submitBtnText="Adicionar coluna"
      />
    </div>
  );
}
