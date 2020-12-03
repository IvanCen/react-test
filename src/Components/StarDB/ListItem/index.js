import React from "react";
import './index.css'


function ListItem({label, onItemSelected}) {
  return <li
    key={label}
    onClick={() => onItemSelected()}
    className='starDB__list-item starDB__list-item_type_single starDB__list-item_indentation_side starDB__list-item_border_bottom'>
    {label}
  </li>
}

export default ListItem
