import React from "react";
import axios from 'axios'
import './index.css';
import Message from "./Message";
import Error from "../UI/Error";
import Loader from "../UI/Loader";

class Blog extends React.Component {
  url = 'https://randomuser.me/api?results=10'
  state = {
    userData: [],
    loading: true,
    error: false,
  }

  onPeoplesLoaded = (peoples) => {
    console.log(peoples.data.results)
    this.setState({
      userData: peoples.data.results,
      loading: false,
    })
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    })
  }

  componentDidMount = () => {
    axios.defaults.mode = 'no-cors'
    axios.get(this.url)
      .then(this.onPeoplesLoaded)
      .catch(this.onError)
  }

  render = () => {
    const {userData, loading, error} = this.state
    const users = userData.map(({id, name, picture: {thumbnail}, location: {city}, email}, index) => {
      return <Message key={index} first={name.first} email={email} url={thumbnail} city={city}/>
    });
    let template
    if (loading && !error) {
      template = <Loader/>
    } else if (error) {
      template = <Error/>
    } else {
      template = users
    }
    return (
      <div className="blog">
        {template}
      </div>
    );
  }
}


export default Blog
