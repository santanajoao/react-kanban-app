import { useDispatch } from 'react-redux';
import { setCardTitle } from '../../../redux/actions';
import EditableText from '../../EditableText';

export default function CardAndColumnTitles(props) {
  const { cardTitle, columnTitle, styles } = props;
  const dispatch = useDispatch();

  return (
    <div className={styles.title_wrapper}>
      <EditableText
        styles={styles}
        title={cardTitle}
        onEnter={(title) => dispatch(setCardTitle(title))}
      />
      <p className={styles.column_title}>
        Na coluna <span className={styles.underline}>{columnTitle}</span>
      </p>
    </div>
  );
}
