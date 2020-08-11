import React from "react";
import './index.css'
import classNames from 'classnames'
import {cn} from '@bem-react/classname';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  createClass = () => {
    const {disabled = false} = this.props
    const classEl = cn('button');
    return classEl({disabled})
  }

  render = () => {
    const {title = 'Submit', onClick, className} = this.props
    return (
      <button
        ref={node => this.button = node}
        onClick={e => onClick && onClick()}
        className={classNames(this.createClass(), className)}
      >{title}</button>
    )
  }
}

export default Button
