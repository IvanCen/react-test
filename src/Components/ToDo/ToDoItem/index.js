import React from "react";
import '../index.css'
import Button from "../../UI/Button";
import classNames from "classnames";

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const {toDoData, index, toggleParamToDoItem, deleteToDo} = this.props
    return (
      <li className="toDo__item" data-id={index + 1}>
        <div
          className={classNames('toDo__text-container',
            {'toDo__text-container_theme_grass': toDoData.important},
            {'toDo__text-container_theme_crossed-out': toDoData.done},
          )}
          onClick={() => toggleParamToDoItem(index, 'done')}
        >
          <span className="toDo__index">{index + 1}.</span>
          <span className="toDo__text">{toDoData.word}</span>
        </div>
        <div className="toDO__button-container">
          <Button
            className="toDo__button toDo__button_type_delete"
            onClick={() => deleteToDo(index)}
            title='X'
          >
          </Button>
          <Button
            className={classNames('toDo__button', 'toDo__button_type_important', {'toDo__button_active': toDoData.important})}
            onClick={() => toggleParamToDoItem(index, 'important')}
            title='!'
          >
          </Button>
        </div>
      </li>
    )
  }

}

export default ToDoItem
