import React, {useState} from "react";
import Header from "../Components/UI/Header";
import Game from "../Components/Game";
import ToDo from "../Components/ToDo";
import StarDB from "../Components/StarDB";
import Blog from "../Components/Blog";
import Main from "../Components/Main";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import classNames from 'classnames';
import Routes from "../Components/Routes";
import Login from "../Components/Login";
import SecretPage from "../Components/SecretPage";

const path = {
  main: '/',
  game: '/game',
  todo: '/todo',
  stardb: '/stardb',
  blog: '/blog',
  routes: '/routes',
  login: '/login',
  secret: '/secret'
}

function Application() {
  const {main, game, todo, stardb, blog, routes, login, secret} = path
  const [theme, setTheme] = useState('light')
  const [isLogin, setIsLogin] = useState(false)

  const onLogin = () => setIsLogin(prevState => !prevState)

  function themeSwitcher() {
    setTheme(() => theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={classNames('root', theme)}>
      <Router>
        <Header themeSwitcher={themeSwitcher} title='My App' links={path}/>
        <main className={'template'}>
          <Switch>
            <Route path={main} exact component={Main}/>
            <Route path={game} component={Game}/>
            <Route path={todo} component={ToDo}/>
            <Route path={stardb} component={StarDB}/>
            <Route path={blog} component={Blog}/>
            <Route path={routes} component={Routes}/>
            <Route path={login}><Login onLogin={onLogin} isLogin={isLogin}/></Route>
            <Route path={secret}><SecretPage isLogin={isLogin}/></Route>
            <Route render={()=> <h1>404</h1>}/>
          </Switch>
        </main>
      </Router>
    </div>
  )
}

export default Application
