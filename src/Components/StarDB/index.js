import React from "react";
import './index.css'
import Api from './Api'
import Header from "./Header";
import Item from "./Item";
import ListItems from "./ListItems";
import ItemInfo from "./ItemInfo";

class StarDB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render = () => {

    return (
      <section className='starDB'>
        <Header/>
        <Item/>
        <div className='starDB__container'>
          <ListItems/>
          <ItemInfo/>
        </div>
      </section>
    )
  }

}

export default StarDB
