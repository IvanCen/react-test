import React, {useState} from "react";
import Container from "../Container/Container";
import {ItemsListPeople, ItemsListPlanets} from "./ItemLists";
import {InfosPeople, InfosPlanet} from "./Infos";
import {BrowserRouter as Route} from "react-router-dom";


const callCallbackWithParams = (func, id) => {
  func(id)
}

const PlanetsSectionList = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <Container classNames='starDB__container'>
      <ItemsListPlanets
        onItemSelected={id => callCallbackWithParams(setSelectedItem, id)}
      />
      <InfosPlanet
        selectedItemId={selectedItem}
      />
    </Container>)
}


const PeopleSectionList = ({match: {url}}) => {
  const [selectedItem, setSelectedItem] = useState(null)
  console.log(url)
  return (
    <Container classNames={'starDB__container'}>
      <ItemsListPeople
        onItemSelected={id => callCallbackWithParams(setSelectedItem, id)}
      />
      <Route exact to={`${url.path}/people/:id`} render={({match}) => {
        const {id} = match.params
        return <InfosPeople selectedItemId={id}/>
      }}/>
    </Container>)
}

export {PlanetsSectionList, PeopleSectionList}
