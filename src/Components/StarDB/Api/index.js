import React from "react";

class Api extends React.Component {

  _apiBase = 'https://swapi.dev/api'

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
    return await this.getResource(`/people/${id ? id : ''}`);
  }

  async getPlanets(id) {
    return await this.getResource(`/planets/${id ? id : ''}`);
  }

  async getStarships(id) {
    return await this.getResource(`/starships/${id ? id : ''}`);
  }

}


export default Api
