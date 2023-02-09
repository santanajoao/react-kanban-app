import React, { Component } from 'react';

export default class EditableTitle extends Component {
  state = {
    editingTitleText: false,
  };

  handleTitleTextClick = () => this.setState({ editingTitleText: true });

  // handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // };

  handleInputEnter = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editingTitleText: false });
    }
  };

  render() {
    const { editingTitleText } = this.state;
    const { blockClassName, title, handleTitleChange, id } = this.props;
    // const titleTextInputStyle = { width: `${title.length + 2.4}ch` };
    return (
      <>
        { editingTitleText ? (
          <input
            value={ title }
            type="text"
            // style={ titleTextInputStyle }
            onKeyDown={ this.handleInputEnter }
            onChange={ (event) => handleTitleChange(event, id) }
            name="titleText"
            className={ `${blockClassName}__editable-title-input` }
            autoFocus
          />
        ) : (
          <h1
            onClick={ this.handleTitleTextClick }
            className={ `${blockClassName}__editable-title` }
          >
            { title }
          </h1>
        ) }
      </>
    );
  }
}
