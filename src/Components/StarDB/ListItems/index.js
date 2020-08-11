import React from "react";
import './index.css'

class ListItems extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className='starDB__list-items'>
        <li className='starDB__list-item starDB__list-item_indentation_side starDB__list-item_border_bottom'>ListItem</li>
        <li className='starDB__list-item starDB__list-item_indentation_side starDB__list-item_border_bottom'>ListItem</li>
      </ul>
    )
  }
}

export default ListItems
