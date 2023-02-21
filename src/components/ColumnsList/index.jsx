import { useDispatch, useSelector } from 'react-redux';
import BoardColumn from '../BoardColumn';
import AddBoardColumn from '../AddBoardColumn';
import styles from './style.module.css';
import { useEffect } from 'react';
import { setColumns } from '../../redux/actions';

export default function ColumnsList() {
  const dispatch = useDispatch();
  const { columns } = useSelector((state) => state.kanban);
  const { length } = columns;

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks && tasks.length > 1) {
      dispatch(setColumns(tasks));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(columns));
  }, [columns]);

  return (
    <ol className={styles.column_list}>
      {columns.map(({ id, title, cards }, index) => (
        <li key={id}>
          <BoardColumn
            title={title}
            cards={cards}
            index={index}
            length={length}
          />
        </li>
      ))}
      <li>
        <AddBoardColumn />
      </li>
    </ol>
  );
}
