import React, { Component } from 'react';

export default class EditableTitle extends Component {
  state = {
    titleText: this.props.initialText,
    editingTitleText: false,
  };

  handleTitleTextClick = () => this.setState({ editingTitleText: true });

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleInputEnter = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editingTitleText: false });
    }
  };

  render() {
    const { titleText, editingTitleText } = this.state;
    const { blockClassName } = this.props;
    const titleTextInputStyle = { width: `${titleText.length + 2.4}ch` };
    return (
      <>
        { editingTitleText ? (
          <input
            value={ titleText }
            type="text"
            style={ titleTextInputStyle }
            onKeyDown={ this.handleInputEnter }
            onChange={ this.handleInputChange }
            name="titleText"
            className={ `${blockClassName}__editable-title-input` }
            autoFocus
          />
        ) : (
          <h1
            onClick={ this.handleTitleTextClick }
            className={ `${blockClassName}__editable-title` }
          >
            { titleText }
          </h1>
        ) }
      </>
    );
  }
}
