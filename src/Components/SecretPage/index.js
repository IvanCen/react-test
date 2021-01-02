import React from "react";
import * as actions from '../../store/actions'
import {connect} from 'react-redux'

function SecretPage({num, inc, dec, rnd, isLogin = false}) {

  //if (!isLogin) return <Redirect to='/login'/>
  return (
    <div>
      <h2>{num}</h2>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={rnd}>random</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    num: state
  }
}

export default connect(mapStateToProps, actions)(SecretPage)
