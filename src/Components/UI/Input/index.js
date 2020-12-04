import React from "react";
import './index.scss'
import classNames from 'classnames'


function Input(props) {
  const {type = 'text', value = '', placeholder = '', title, classInputModifier = '', classInputFieldModifier = '', change} = props

  const valueChanged = (e) => {
    const value = e.target.value
    change && change(value)
  }

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
        onChange={(e) => valueChanged(e)}
      />
    </div>
  )


}

export default Input
