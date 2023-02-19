import { useState } from 'react';
import PropTypes from 'prop-types';

export default function EditableTitle(props) {
  const { onEnter, blockClassName } = props;
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
        className={`${blockClassName}__editable-title-input`}
        autoFocus
      />
    );
  }

  return (
    <button
      title="Editar título"
      onClick={() => setEditing(true)}
      className={`${blockClassName}__editable-title`}
    >
      {title}
    </button>
  );
}

EditableTitle.propTypes = {
  blockClassName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onEnter: PropTypes.func,
};

EditableTitle.defaultProps = {
  onEnter: () => {},
};
