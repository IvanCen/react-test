import React from "react";
import './index.css';
import Message from "./Message";


class Blog extends React.Component {

  render() {
    return (
      <div className="blog">
        <Message/>
      </div>
    );
  }
}


export default Blog
