import React from "react";
import './index.css'
import Button from "../../UI/Button";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header
        className='starDB__header'
      ><h2 className="starDB__title">StarDB</h2>
        <div className="starDB__link-container">
          <a href="" className="starDB__link">People</a>
          <a href="" className="starDB__link">Planets</a>
          <a href="" className="starDB__link">Starships</a>
        </div>
      </header>
    )
  }
}

export default Header
