import React, {useState} from "react";
import {bindActionCreators} from 'redux'
import {store} from "../../store";
import * as actions from '../../store/actions'

export default function SecretPage({isLogin = false}) {
  const {dispatch} = store
  const [num, setNum] = useState(store.getState())
  store.subscribe(() => setNum(store.getState))

  const randomNumber = Math.floor(Math.random() * 10)

  const {inc, dec, rnd} = bindActionCreators(actions, dispatch)

  //if (!isLogin) return <Redirect to='/login'/>

  return (
    <div>
      <h2>{num}</h2>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={() => rnd(randomNumber)}>random</button>
    </div>
  )
}
