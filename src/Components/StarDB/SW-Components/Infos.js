import React from "react";
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
  return (
    <ItemInfo
      selectedItemId={selectedItemId}
      imageList='characters'
      getData={(id) => api.getPeople(id)}
    />
  )
}

export {InfosPlanet, InfosPeople}
