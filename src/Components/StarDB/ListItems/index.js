import React from "react";
import './index.css'
import Api from "../Api";
import Loader from "../../UI/Loader";

class ListItems extends React.Component {
  api = new Api();
  state = {
    peopleList: null,
    loading: true,
  }

  onPeoplesLoaded = (res) => {
    this.setState({
      peopleList: res,
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
    this.api.getPeople()
      .then(this.onPeoplesLoaded)
      .catch(this.onError)
  }

  renderItems = (arr) => {
    const {onItemSelected} = this.props;

    return arr.map(({name, id}) => {
      return <li
        key={name}
        onClick={() => onItemSelected(id)}
        className='starDB__list-item starDB__list-item_type_single starDB__list-item_indentation_side starDB__list-item_border_bottom'>
        {name}
      </li>
    })
  }

  render = () => {
    const {peopleList} = this.state;

    if (!peopleList) {
      return <Loader/>
    }

    const people = this.renderItems(peopleList);

    return (
      <ul className='starDB__list-items'>
        {people}
      </ul>
    )
  }
}

export default ListItems
