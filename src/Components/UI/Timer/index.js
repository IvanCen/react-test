import React from "react";
import './index.css'
import classNames from 'classnames'
import {cn} from '@bem-react/classname';

class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const {stepNumber,INTERVAL, total} = this.props

    return (
      <div className='timer'>
        <p className='timer__title'>Таймер:</p>
        <p>
          <span>{Math.round(total/INTERVAL/60/60)} : </span>
          <span>{Math.round(total/INTERVAL/60)} : </span>
          <span>{Math.round(total/INTERVAL)} . </span>
          <span>{total % INTERVAL}</span>
        </p>
      </div>
    )
  }

  increment = () => {
    const {total} = this.props
    let newTotal = total
    newTotal++
    this.setState({
      total: newTotal
    })
  }




}




export default Timer
