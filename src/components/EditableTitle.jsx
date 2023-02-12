import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditableTitle extends Component {
  state = {
    editingTitleText: false,
    title: this.props.title,
  };

  handleTitleTextClick = () => this.setState({ editingTitleText: true });

  handleTitleChange = ({ target }) => {
    this.setState({ title: target.value });
  };

  handleInputEnter = ({ key, target: { value } }) => {
    const { onEnter } = this.props;
    if (key === 'Enter' && value) {
      this.setState({ editingTitleText: false });
      onEnter && onEnter(value);
    }
  };

  render() {
    const { editingTitleText, title } = this.state;
    const { blockClassName } = this.props;
    const titleTextInputStyle = { width: `${title.length + 2}ch` };
    return (
      <>
        {editingTitleText ? (
          <input
            value={title}
            type="text"
            style={titleTextInputStyle}
            onKeyDown={this.handleInputEnter}
            onChange={this.handleTitleChange}
            name="titleText"
            className={`${blockClassName}__editable-title-input`}
            autoFocus
          />
        ) : (
          <h1
            onClick={this.handleTitleTextClick}
            className={`${blockClassName}__editable-title`}
          >
            {title}
          </h1>
        )}
      </>
    );
  }
}

EditableTitle.propTypes = {
  blockClassName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onEnter: PropTypes.func,
};

EditableTitle.defaultProps = {
  onEnter: () => {},
};

export default EditableTitle;
