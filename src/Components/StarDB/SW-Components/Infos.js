import React from "react";
import ListItems from "../ListItems";
import Api from "../Api";
import ItemInfo from "../ItemInfo";

const api = new Api()

const InfosPlanet = ({selectedItemId}) => {
  return (<ItemInfo
    selectedItemId={selectedItemId}
    imageList='planets'
    getData={(id) => api.getPlanets(id)}
  />)
}

const InfosPeople = ({selectedItemId}) => {
  return (<ListItems
    onItemSelected={selectedItemId}
    getData={() => api.getPeople()}
    renderItem={({name, gender}) => `${name || ''} (${gender || '?'})`}
  />)
}

export {InfosPlanet, InfosPeople}
