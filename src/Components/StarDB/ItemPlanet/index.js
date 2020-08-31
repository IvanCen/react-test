import React from "react";
import './index.css'
import Api from "../Api";
import Loader from "../../UI/Loader";

class ItemPlanet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planet: {},
      loading: true,
    }
    this.updateData()
    setInterval(() => this.updateData(), 10000)
    this.api.getStarships().then(res => console.log(res))
  }

  api = new Api();

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    })
  }

  updateData = () => {
    const id = Math.floor(Math.random() * 10 + 2);
    this.api
      .getPlanets(id)
      .then(this.onPlanetLoaded)
      .catch(err => console.log(err))
  }

  render() {
    const {
      planet: {
        id, name, population,
        rotationPeriod, diameter
      }, loading
    } = this.state;

    if (loading) {
      return <Loader/>
    } else {
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
}

export default ItemPlanet
