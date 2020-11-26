import React from "react";
import './index.css';


class Main extends React.Component {

  render() {
    return (
      <div className="main">
        <h1 className="title main__title">Привет</h1>
        <p className="text main__text">Это SPA на React в котором я реализую фичи и проекты на этом фремворке</p>
        <p className="text main__text">Переходи на другие страницы и посмотри их !</p>
      </div>
    );
  }
}


export default Main
