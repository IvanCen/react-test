import React from "react";
import './index.scss'
import Input from "../Input";
import classNames from 'classnames'
import Button from "../Button";

class SearchPanel extends React.Component {

  render = () => {
    const {change, value, filter, onFilterChange} = this.props
    const buttons = ['All', 'Active', 'Done'].map(el => {
      const isActiveButton = filter === el.toLowerCase()
      return (
        <Button
          key={el}
          className={classNames('search-panel__button', {'search-panel__button_active': isActiveButton})}
          title={el}
          onClick={() => onFilterChange(el.toLowerCase())}
        />
      )
    })
    return (
      <div
        className='search-panel'>
        <Input
          type='text'
          value={value}
          placeholder='Search'
          change={change}
          classInputModifier={['input_size_small', 'search-panel__input']}
          classInputFieldModifier={['input__field_theme_dark']}
        />
        <div className='search-panel__button-container'>
          {buttons}
        </div>
      </div>
    )
  }

}

export default SearchPanel
