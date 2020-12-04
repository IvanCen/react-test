import React from "react";

class Api extends React.Component {
  constructor(props) {
    super(props);

    this._apiBase = 'https://swapi.dev/api'
  }



  getResource = async (url) => {
    return await fetch(`${this._apiBase}${url}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  async getPeople(id) {
    const people = await this.getResource(`/people/${id ? id : ''}`);
    if (typeof people.results !== 'undefined') {
      return people.results.map(this._transformPeople)
    }
    return this._transformPeople(people)
  }

  async getPlanets(id) {
    const planet = await this.getResource(`/planets/${id ? id : ''}`);
    if (typeof planet.results !== 'undefined') {
      return planet.results.map(this._transformPlanet)
    }
    return this._transformPlanet(planet)
  }

  async getStarships(id) {
    const starships = await this.getResource(`/starships/${id ? id : ''}`);
    if (typeof starships.results !== 'undefined') {
      return starships.results.map(this._transformStarships)
    }
    return this._transformStarships(starships)
  }

  _transformPlanet(planet) {
    const id = planet.url.replace(/.*\/([0-9]*)\/$/, '$1');
    return {
      id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      url: planet.url,
    }
  }

  _transformPeople(people) {
    const id = people.url.replace(/.*\/([0-9]*)\/$/, '$1');
    return {
      id,
      name: people.name,
      gender: people.gender,
      birthYear: people.birthYear,
      eyeColor: people.eyeColor,
      url: people.url,
    }
  }

  _transformStarships(starship) {
    const id = starship.url.replace(/.*\/([0-9]*)\/$/, '$1');
    return {
      id,
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
      url: starship.url,
    }
  }

}

export default Api
