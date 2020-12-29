import React from "react";
import './index.scss'
import LinkItem from "../Link";
import {Link} from "react-router-dom";
import Button from "../Button";

class Header extends React.Component {

  createLinks = () => {
    const {game, todo, stardb, blog, routes, login, secret} = this.props.links
    const classNameLink = 'header__link';
    return [
      {key: game, title: 'Game', path: game, classNameLink: [classNameLink]},
      {key: todo, title: 'ToDo', path: todo, classNameLink: [classNameLink]},
      {key: stardb, title: 'StarDB', path: stardb, classNameLink: [classNameLink]},
      {key: blog, title: 'Blog', path: blog, classNameLink: [classNameLink]},
      {key: routes, title: 'Routes', path: routes, classNameLink: [classNameLink]},
      {key: login, title: 'Login', path: login, classNameLink: [classNameLink]},
      {key: secret, title: 'Secret', path: secret, classNameLink: [classNameLink]},
    ]
  }


  render = () => {
    const {title = 'Header', links: {main}, themeSwitcher} = this.props
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
        <Button title={'Сменить тему'} onClick={themeSwitcher} className="header__button"/>
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
