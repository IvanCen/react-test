import React from "react";
import './index.scss'
import Button from "../Button";


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title = 'Header'} = this.props
    return (
      <header
        className='header'
      >{title}
        <Button
          title='click'
          className="header__button"
        />
      </header>
    )
  }
}

export default Header
