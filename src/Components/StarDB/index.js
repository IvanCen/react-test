import React from "react";
import {BrowserRouter as Route, Switch, useRouteMatch} from "react-router-dom";
import './index.css'
import Header from "./Header";
import ItemPlanet from "./ItemPlanet"
import {PeopleSectionList, PlanetsSectionList} from "./SW-Components";

function StarDB() {
  const {url, path} = useRouteMatch();
  console.log(url, path)

  return (
    <section className='starDB'>
      <Route path={path}>
        <Header/>
        <ItemPlanet/>
      </Route>
      <Route path={`${path}/planets/`} component={PlanetsSectionList}/>
      <Route path={`${path}/people/`} component={PeopleSectionList}/>
    </section>
  )
}

export default StarDB
