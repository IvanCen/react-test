import React from "react";
import './index.css'
import icon from './loader.svg'

class Loader extends React.Component {

  render = () => {
    return (
    <img
      src={icon}
      className='loader'
      alt='loader'
    />
    )
  }
}

export default Loader
