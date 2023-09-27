import { useState } from 'react';
import PropTypes from 'prop-types';

export default function EditableText(props) {
  const { onEnter, styles } = props;
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(props.title);

  function save(text) {
    setEditing(false);
    if (onEnter) onEnter(text);
  }

  function handleKeys({ key, target: { value } }) {
    if (key === 'Enter' && value) {
      save(value);
    }
  }

  const titleTextInputStyle = { width: `${title.length + 2}ch` };
  if (editing) {
    return (
      <input
        onBlur={(e) => save(e.target.value)}
        value={title}
        type="text"
        style={titleTextInputStyle}
        onKeyDown={handleKeys}
        onChange={({ target }) => setTitle(target.value)}
        name="titleText"
        className={styles.input}
        autoFocus
      />
    );
  }

  return (
    <button
      title="Editar título"
      onClick={() => setEditing(true)}
      className={styles.text}
    >
      {title}
    </button>
  );
}

EditableText.propTypes = {
  title: PropTypes.string.isRequired,
  onEnter: PropTypes.func,
};

EditableText.defaultProps = {
  onEnter: () => {},
};
