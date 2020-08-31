import React from "react";
import './index.scss'
import Button from "../Button";
import {cn} from '@bem-react/classname';

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
      >
        <h1>{title}</h1>
        {isNeed ? this.loginBox : ''}
        <Button
          title='Toggle "Hello"'
          className="header__button"
          classesNames={[{size: 'm'}]}
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
