import React from "react";
import {Redirect} from "react-router-dom";

import getState from '../../state'

const state = getState()

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state.btnNum += 1
    default:
      return state
  }
}

let states = reducer(state, {type: 'INC'})

export default function SecretPage({isLogin = false}) {
  //if (!isLogin) return <Redirect to='/login'/>
  return (<button>+{states}</button>)
}
