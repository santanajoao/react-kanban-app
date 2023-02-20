import { useSelector } from 'react-redux';
import BoardColumn from '../BoardColumn';
import AddBoardColumn from '../AddBoardColumn';
import styles from './style.module.css';

export default function ColumnsList() {
  const { columns } = useSelector((state) => state.kanban);
  const { length } = columns;
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
