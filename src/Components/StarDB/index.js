import React from "react";
import './index.css'
import Header from "./Header";
import ItemPlanet from "./ItemPlanet"
import ListItems from "./ListItems";
import ItemInfo from "./ItemInfo";
import Api from "./Api";
import Container from "./Container/Container";

class StarDB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItemId: null,
      selectedItemPlId: null,
    }
  }

  api = new Api()

  onItemSelected = (id) => {
    this.setState({
      selectedItemId: id,
    })
  }

  onItemPlSelected = (id) => {
    this.setState({
      selectedItemPlId: id,
    })
  }

  render = () => {
    console.log(this.api.getPlanets())
    const {selectedItemId, selectedItemPlId} = this.state;
    const ItemListsPeople = () =>
      (<Container classNames={'starDB__container'}>
        <ListItems
          onItemSelected={this.onItemSelected}
          getData={() => this.api.getPeople()}
          renderItem={({name, gender}) => `${name || ''} (${gender || '?'})`}
        />
        <ItemInfo
          selectedItemId={selectedItemId}
          getData={(id) => this.api.getPeople(id)}
          imageList='characters'
        />
      </Container>)

    const ItemsListPlanets = () =>
    (<div className='starDB__container'>
      <ListItems
        onItemSelected={this.onItemPlSelected}
        getData={() => this.api.getPlanets()}
        renderItem={({name}) => name}
      />
      <ItemInfo
        selectedItemId={selectedItemPlId}
        imageList='planets'
        getData={(id) => this.api.getPlanets(id)}
      />
    </div>)
    return (
      <section className='starDB'>
        <Header/>
        <ItemPlanet/>
        <ItemListsPeople/>
        <ItemsListPlanets/>
      </section>
    )
  }

}

export default StarDB
