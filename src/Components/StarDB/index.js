import React from "react";
import './index.css'
import Header from "./Header";
import ItemPlanet from "./ItemPlanet"
import ListItems from "./ListItems";
import ItemInfo from "./ItemInfo";

class StarDB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItemId: null,
    }
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItemId: id,
    })
  }

  render = () => {
    const {selectedItemId} = this.state;
    return (
      <section className='starDB'>
        <Header/>
        <ItemPlanet/>
        <div className='starDB__container'>
          <ListItems
            onItemSelected={this.onItemSelected}
          />
          <ItemInfo selectedItemId={selectedItemId}/>
        </div>
      </section>
    )
  }

}

export default StarDB
