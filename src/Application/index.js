import React from "react";
import Header from "../Components/UI/Header";
import Game from "../Components/Game";
import ToDo from "../Components/ToDo";
import StarDB from "../Components/StarDB";
import Blog from "../Components/Blog";
import Main from "../Components/Main";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";


class Application extends React.Component {
  path = {
    main: '/',
    game: '/game',
    todo: '/todo',
    stardb: '/stardb',
    blog: '/blog',
  }

  render = () => {
    const {main, game, todo, stardb, blog} = this.path
    return (
      <div className='root'>
        <Router>
          <Header title='My App' links={this.path}/>
          <main className="template">
            <Switch>
              <Route path={main} exact><Main/></Route>
              <Route path={game}><Game/></Route>
              <Route path={todo}><ToDo/></Route>
              <Route path={stardb}><StarDB/></Route>
              <Route path={blog}><Blog/></Route>
            </Switch>
          </main>
        </Router>
      </div>
    )
  }
}

export default Application
