import React from "react";
import './index.scss'

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {type = 'text', value = '', placeholder = '', title} = this.props
    return (
      <div className="input">
        {title && <label className="input__label">{title}</label>}
        <input
          className='input__field'
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => this.valueChanged(e)}
        />
      </div>
    )
  }

  valueChanged(e) {
    const { change } = this.props
    const value = e.target.value
    console.log({value})
    change && change(value)
  }
}

export default Input
