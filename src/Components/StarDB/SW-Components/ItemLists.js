import React from "react";
import ListItems from "../ListItems";
import Api from "../Api";

const api = new Api()

const ItemsListPlanets = ({onItemSelected}) => {
  return (<ListItems
    onItemSelected={onItemSelected}
    getData={() => api.getPlanets()}
    renderItem={({name}) => name}
  />)
}

const ItemsListPeople = ({onItemSelected}) => {
  return (<ListItems
    onItemSelected={onItemSelected}
    getData={() => api.getPeople()}
    renderItem={({name, gender}) => `${name || ''} (${gender || '?'})`}
  />)
}

export {ItemsListPlanets, ItemsListPeople}
