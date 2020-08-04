import React from "react";
import './index.scss'
import Button from "../Button";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNeed: false

    }
  }

  render = () => {
    const {title = 'Header'} = this.props
    const {isNeed} = this.state
    this.loginBox = <span>Hello</span>
    return (
      <header
        className='header'
      >{title}
        {isNeed ? this.loginBox : ''}
        <Button
          title='Toggle "Hello"'
          className="header__button"
          onClick={() => this.toggleHello()}
          isActive={true}
        />
      </header>
    )
  }

  toggleHello = () => {
    this.setState(({isNeed}) => {
      return {
        isNeed: !isNeed
      }
    })
  }

}

export default Header
