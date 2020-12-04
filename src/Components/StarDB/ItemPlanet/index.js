import React from "react";
import './index.css'
import Api from "../Api";
import Loader from "../../UI/Loader";
import Error from "../../UI/Error";
import PropTypes from "prop-types"

class ItemPlanet extends React.Component {
  api = new Api();

  state = {
    planet: {},
    loading: true,
    error: false,
  }

  static defaultProps = {
    updateInterval: 10000
  }

  static propTypes = {
    updateInterval: PropTypes.number
  }

  componentDidMount = () => {
    const {updateInterval} = this.props
    this.updateData()
    this.interval = setInterval(() => this.updateData(), updateInterval)
    this.api.getStarships().then(res => console.log(res))
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    })
  }

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
      .catch(this.onError)
  }

  render = () => {
    const {
      planet: {
        id, name, population,
        rotationPeriod, diameter
      }, loading, error
    } = this.state;

    if (loading && !error) {
      return <Loader/>
    } else if (error) {
      return <Error/>
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
