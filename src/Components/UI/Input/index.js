import React from "react";
import './index.scss'
import classNames from 'classnames'

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const {type = 'text', value = '', placeholder = '', title, classInputModifier = '', classInputFieldModifier = ''} = this.props
    return (
      <div
        className={classNames('input', [...classInputModifier])}
      >
        {title && <label className="input__label">{title}</label>}
        <input
          className={classNames('input__field', [...classInputFieldModifier])}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => this.valueChanged(e)}
        />
      </div>
    )
  }

  valueChanged(e) {
    const {change} = this.props
    const value = e.target.value
    console.log({value})
    change && change(value)
  }
}

export default Input
