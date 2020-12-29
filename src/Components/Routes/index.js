import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import './index.scss'

export default function Routes() {
  const {path, url} = useRouteMatch();
  return (
    <div className='container'>
      <h1>Hello</h1>
      <ul>
        <li>
          <Link to={`${url}/f`}>f</Link>
        </li>
        <li>
          <Link to={`${url}/s`}>s</Link>
        </li>
      </ul>
      <Route path={`${path}/f`}><p>f</p></Route>
      <Route path={`${path}/s`} render={({match: {url}}) => {
        return (
          <div>
            <p>s</p>
            <ul>
              <li>
                <Link to={`${url}/1`}>1</Link>
              </li>
              <li>
                <Link to={`${url}/2`}>2</Link>
              </li>
            </ul>
          </div>)
      }}/>
      <Route path={`${path}/s/1`}><p>s1</p></Route>
      <Route path={`${path}/s/2`}><p>s2</p></Route>
    </div>
  )
}
