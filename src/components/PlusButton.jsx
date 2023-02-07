import React, { Component } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import '../styles/PlusButton.css';

export default class PlusButton extends Component {
  render() {
    const { className, children, onClick } = this.props;
    const btnClass = `PlusButton ${className}__plus-btn`;
    return (
      <button onClick={ onClick } className={ btnClass }>
        <BsPlusLg className={ `${className}__add-icon` } />
        <span className={` ${className}__plus-btn-text` }>
          { children }
        </span>
      </button>
    );
  }
}
