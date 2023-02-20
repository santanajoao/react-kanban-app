import { useState } from 'react';
import PropTypes from 'prop-types';

export default function EditableText(props) {
  const { onEnter, styles } = props;
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(props.title);

  function handleInputEnter({ key, target: { value } }) {
    if (key === 'Enter' && value) {
      setEditing(false);
      onEnter && onEnter(value);
    }
  }

  const titleTextInputStyle = { width: `${title.length + 2}ch` };
  if (editing) {
    return (
      <input
        value={title}
        type="text"
        style={titleTextInputStyle}
        onKeyDown={handleInputEnter}
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
