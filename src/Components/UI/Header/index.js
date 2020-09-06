import React from "react";
import './index.scss'
import LinkItem from "../Link";
import {Link} from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }


  createLinks = () => {
    const {game, todo, stardb, blog} = this.props.links
    const classNameLink = 'header__link';
    return [
      {key: game, title: 'Game', path: game, classNameLink: [classNameLink]},
      {key: todo, title: 'ToDo', path: todo, classNameLink: [classNameLink]},
      {key: stardb, title: 'StarDB', path: stardb, classNameLink: [classNameLink]},
      {key: blog, title: 'Blog', path: blog, classNameLink: [classNameLink]},
    ]
  }


  render = () => {
    const {title = 'Header', links: {main}} = this.props
    const dataLinks = this.createLinks()
    console.log(dataLinks)
    const linksElements = dataLinks.map(({key, title, path, classNameLink}) =>
      <LinkItem
        key={key}
        classNameLink={classNameLink}
        title={title}
        path={path}
      />)
    return (
      <header
        className='header'
      >

        <Link to={main}><h1 className='header__title'>{title}</h1></Link>

        <nav className='header__nav'>
          <ul className='header__link-container'>
            {linksElements}
          </ul>
        </nav>

      </header>
    )
  }

}

export default Header
