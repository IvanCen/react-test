import React, {useState} from "react";
import Container from "../Container/Container";
import {ItemsListPeople, ItemsListPlanets} from "./ItemLists";
import {InfosPeople, InfosPlanet} from "./Infos";

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

const PeopleSectionList = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <Container classNames={'starDB__container'}>
      <ItemsListPeople
        onItemSelected={id => callCallbackWithParams(setSelectedItem, id)}
      />
      <InfosPeople
        selectedItemId={selectedItem}
      />
    </Container>)
}


export {PlanetsSectionList, PeopleSectionList}
