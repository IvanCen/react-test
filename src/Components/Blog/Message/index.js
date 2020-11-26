import React from "react";
import './index.css'
import img from './img.svg'

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  date = new Date()
  dateNow = `${this.date.getDate()}/${this.date.getMonth() + 1}/${this.date.getFullYear()}`

  render() {
    const {first = 'name', email = 'email', url = img, city} = this.props
    return (
      <div className='message'>
        <div className="message__header">
          <img src={url} alt="" className="message__img"/>
          <div className="message__container">
            <span className="message__name">{first}</span>
            <span className="message__date">{this.dateNow}</span>
          </div>
        </div>
        <div className="message__body">
          <h2 className="message__title">{city}</h2>
          <p className="message__text">{email}</p>
        </div>
      </div>
    )
  }
}

export default Message
