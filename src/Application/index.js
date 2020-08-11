import React from "react";
import Header from "../Components/UI/Header";
import Game from "../Components/Game";
import ToDo from "../Components/ToDo";
import StarDB from "../Components/StarDB";


class Application extends React.Component {

  render = () => {
    return (
      <div className='root'>
        <Header title='My App'/>
        <main className="main">
          <Game/>
          <ToDo/>
          <StarDB/>
        </main>
      </div>
    )
  }
}

export default Application
