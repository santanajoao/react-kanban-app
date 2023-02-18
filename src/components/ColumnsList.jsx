import { useSelector } from 'react-redux';
import BoardColumn from './BoardColumn';
import AddBoardColumn from './AddBoardColumn';
import '../styles/ColumnsList.css';

export default function ColumnsList() {
  const { columns } = useSelector((state) => state.kanban);
  const { length } = columns;
  return (
    <ol className="ColumnsList">
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
