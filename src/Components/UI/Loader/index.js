import React from "react";
import './index.css'

class Loader extends React.Component {

  render = () => {
    return (
    <img
      src={process.env.PUBLIC_URL + '/loader.svg'}
      className='loader'
      alt='loader'
    />
    )
  }
}

export default Loader
