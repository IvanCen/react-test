import React from "react";
import './index.css'
import Api from "../Api";
import Loader from "../../UI/Loader";
import Error from "../../UI/Error";

class ItemInfo extends React.Component {
  api = new Api();
  state = {
    item: null,
    loading: true,
    error: false,
  }

  updateItem = () => {
    const {selectedItemId, getData} = this.props;

    if (!selectedItemId) {
      return
    }
    this.setState({
      loading: true,
    })
    getData(selectedItemId)
      .then(this.onItemLoaded)
      .catch(this.onError)
  }

  onItemLoaded = (res) => {
    this.setState({
      item: res,
      loading: false,
    })
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    })
  }

  componentDidMount = () => {
    this.updateItem()
  }

  componentDidUpdate = (prevProps) => {
    const {selectedItemId} = this.props
    if (selectedItemId !== prevProps.selectedItemId) {
      this.updateItem()
    }
  }

  render = () => {
    const {item, loading, error} = this.state;
    const {imageList} = this.props;
    if (!item) {
      return <span>Select from list</span>
    } else if (loading && !error) {
      return <Loader/>
    } else if (error) {
      return <Error/>
    } else {
      const listInfos = Object.entries(item).map(([key, value]) => {
        if (value && key !== 'url') {
          return (<li key={key} className="starDB__list-item starDB__list-item_border_bottom">
            <span className="starDB__item-info">{key[0].toUpperCase() + key.slice(1)}:</span>
            <span>{value}</span>
          </li>)
        }
      })
      return (
        <div className='starDB__item'>
          <img className="starDB__item-image"
               src={`https://starwars-visualguide.com/assets/img/${imageList}/${item.id}.jpg`}
               alt="planet"/>
          <div className='starDB__item-content-container'>
            <h3 className='starDB__item-title'>{item.name}</h3>
            <ul className="starDB__list">
              {listInfos}
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default ItemInfo
