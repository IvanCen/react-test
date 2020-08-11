import React from "react";
import './index.css'
import Api from "../Api";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.updateData()
    setInterval(() => this.updateData(), 10000)

    this.state = {
      id: null,
      name: null,
      population: null,
      rotationPeriod: null,
      diameter: null,
      url: null,
    }
  }

  api = new Api();

  updateData = () => {
    const id = Math.floor(Math.random() * 10 + 2);
    this.api
      .getPlanets(id)
      .then(planet => {
        this.setState({
          id,
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter,
          url: planet.url,
        })
      })
  }

  render() {
    const {id, name, population, rotationPeriod, diameter} = this.state;
    return (
      <div className='starDB__item'>
        <img className="starDB__item-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
             alt="planet"/>
        <div className='starDB__item-content-container'>
          <h3 className='starDB__item-title'>{name}</h3>
          <ul className="starDB__list">
            <li className="starDB__list-item starDB__list-item_border_bottom">
              <span className="starDB__item-info">Population:</span>
              <span>{population}</span>
            </li>
            <li className="starDB__list-item starDB__list-item_border_bottom">
              <span className="starDB__item-info">Rotation Period:</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="starDB__list-item starDB__list-item_border_bottom">
              <span className="starDB__item-info">Diameter:</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Item
