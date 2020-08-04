import React from "react";
import './index.scss'
import Input from "../Input";
import classNames from 'classnames'
import Button from "../Button";

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      isActiveButton: false,
    }
  }

  render = () => {
    const {search, isActiveButton} = this.state
    const buttons = ['All', 'Active', 'Done'].map(el => {
      return (
        <Button
          key={el}
          className={classNames('button', 'search-panel__button', {'search-panel__button_active': isActiveButton})}
          title={el}
        />
      )
    })
    return (
      <div
        className='search-panel'>
        <Input
          type='text'
          value={search}
          placeholder='Search'
          change={(e) => this.setState({search: e})}
          classInputModifier={['input_size_small', 'search-panel__input']}
          classInputFieldModifier={['input__field_theme_dark']}
        />
        <div className='search-panel__button-container'>
          {buttons}
        </div>
      </div>
    )
  }

  componentDidMount = () => {
    const buttonsFilter = document.querySelectorAll('.search-panel__button');
    [...buttonsFilter].forEach(el => {
      el.addEventListener('click', function () {
        [...buttonsFilter].forEach(item => {
          item.classList.remove('search-panel__button_active');
        })
        this.classList.add('search-panel__button_active')
      })
    })
  }

}

export default SearchPanel
