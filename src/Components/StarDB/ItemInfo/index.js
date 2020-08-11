import React from "react";
import './index.css'

class ItemInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='starDB__item'>
        <img className="starDB__item-image"
             src=''
             alt="planet" />
        <div className='starDB__item-content-container'>
          <h3 className='starDB__item-title'>Planet</h3>
          <ul className="starDB__list">
            <li className="starDB__list-item starDB__list-item_border_bottom">
              <span className="starDB__item-info">Population</span>
              <span>123123</span>
            </li>
            <li className="starDB__list-item starDB__list-item_border_bottom">
              <span className="starDB__item-info">Rotation Period</span>
              <span>1231</span>
            </li>
            <li className="starDB__list-item starDB__list-item_border_bottom">
              <span className="starDB__item-info">Diameter</span>
              <span>1231</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ItemInfo
