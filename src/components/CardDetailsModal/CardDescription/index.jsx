import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCardDescription } from '../../../redux/actions';

export default function CardDescription(props) {
  const [editing, setEditing] = useState(false);

  const { styles, description, initialDescription, setDescription } = props;
  const dispatch = useDispatch();

  function cancelEditing() {
    setEditing(false);
    setDescription(initialDescription);
  }

  function saveEditing() {
    dispatch(setCardDescription(description.trim()));
    setEditing(false);
  }

  function handleKeys({ key }) {
    if (key === 'Escape') {
      setEditing(false);
    }
  }

  return (
    <div className={styles.description_wrapper}>
      <h2 className={styles.description_heading}>Descrição</h2>
      {editing ? (
        <form className={styles.form}>
          <textarea
            value={description}
            onKeyDown={handleKeys}
            onChange={({ target }) => setDescription(target.value)}
            className={styles.form_input}
            autoFocus
          />
          <div className={styles.buttons_wrapper}>
            <button
              type="button"
              onClick={saveEditing}
              className={`${styles.form_button} ${styles.save_button}`}
            >
              Salvar
            </button>
            <button
              type="button"
              onClick={cancelEditing}
              className={styles.form_button}
            >
              Cancelar
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setEditing(true)}
          className={styles.edit_button}
          title="Editar descrição"
        >
          <p className={styles.description}>{description}</p>
        </button>
      )}
    </div>
  );
}
