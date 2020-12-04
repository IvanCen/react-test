import React from "react";
import './index.scss'
import classNames from 'classnames'
import {Link} from "react-router-dom";

class LinkItem extends React.Component {

  render = () => {
    const {title, classNameLink = '', path} = this.props
    return (
      <li className={classNames('link', [...classNameLink])}><Link to={path}>{title}</Link></li>
    )
  }

}

export default LinkItem
