import React from "react";
import './index.css'
import Api from "../Api";
import Loader from "../../UI/Loader";
import ListItem from "../ListItem";

class ListItems extends React.Component {
  api = new Api();
  state = {
    itemsList: null,
    loading: true,
  }

  onItemsLoaded = (res) => {
    this.setState({
      itemsList: res,
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
    const {getData} = this.props

    getData()
      .then(this.onItemsLoaded)
      .catch(this.onError)
  }

  renderItems = (arr) => {
    const {onItemSelected, renderItem} = this.props;

    return arr.map((item) => {
      const {id} = item
      const label = renderItem(item)
      return <ListItem
        key={label}
        label={label}
        onItemSelected={() => onItemSelected(id)}
        className='starDB__list-item starDB__list-item_type_single starDB__list-item_indentation_side starDB__list-item_border_bottom'>
        {label}
      </ListItem>
    })
  }

  render = () => {
    const {itemsList} = this.state;

    if (!itemsList) {
      return <Loader/>
    }

    const items = this.renderItems(itemsList);

    return (
      <ul className='starDB__list-items'>
        {items}
      </ul>
    )
  }
}

export default ListItems
