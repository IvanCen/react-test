import React from "react";
import './index.css'
import classNames from 'classnames'

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.button)
  }

  render() {
    const {title = 'Submit', onClick, disabled = false, className} = this.props
    return (
      <button
        ref={node => this.button = node}
        onClick={e => onClick && onClick()}
        className={classNames('button', {'button_disabled': disabled}, className)}
      >{title}</button>
    )
  }
}

export default Button
