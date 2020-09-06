import React from "react";
import './index.scss'
import classNames from 'classnames'
import {Link} from "react-router-dom";

class LinkItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const {title, classNameLink = '', path} = this.props
    return (
      <li><Link className={classNames('link', [...classNameLink])} to={path}>{title}</Link></li>
    )
  }

}

export default LinkItem
