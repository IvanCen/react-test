import React from "react";
import './index.css'
import Header from "./Header";
import ItemPlanet from "./ItemPlanet"
import {PeopleSectionList, PlanetsSectionList} from "./SW-Components";


function StarDB() {
  return (
    <section className='starDB'>
      <Header/>
      <ItemPlanet/>
      <PlanetsSectionList/>
      <PeopleSectionList/>
    </section>
  )
}

export default StarDB
