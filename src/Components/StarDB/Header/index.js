import React from "react";
import {useRouteMatch} from "react-router-dom";
import LinkItem from "../../UI/Link";
import './index.css'


function Header({url}) {
  console.log(url)
  const createLinks = () => {
    const classNameLink = ['header__link', 'starDB__link'];
    return [
      {key: 'People', title: 'People', path: `/stardb/people`, classNameLink},
      {key: 'Planets', title: 'Planets', path: `/stardb/planets`, classNameLink},
    ]
  }
  const links = createLinks()
  const linksElements = links.map(({key, title, path, classNameLink}) =>
    <LinkItem
      key={key}
      classNameLink={classNameLink}
      title={title}
      path={path}
    />)
  return (
    <header
      className='starDB__header'
    ><h2 className="starDB__title">StarDB</h2>
      <div className="starDB__link-container">
        {linksElements}
      </div>
    </header>
  )
}

export default Header
