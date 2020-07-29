import React from "react";
import './index.css'
import Button from "../UI/Button";
import Input from "../UI/Input";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      toDoList: [],
    }
  }

  render() {
    const {word, toDoList} = this.state
    const listItems = toDoList.map((toDo, index) =>
      <li className="toDo__item" key={index}>
        <div className="toDo__text-container">
          <span className="toDo__index">{index + 1}.</span>
          <span className="toDo__text">{toDo}</span>
        </div>
        <Button
          className="toDo__button toDo__button_type_delete"
          onClick={() => this.deleteToDo(index)}
          title='X'
        >
        </Button>
      </li>
    );
    return (
      <section className='toDo'>
        <Input
          title='Create your To Do'
          value={word}
          placeholder='write'
          change={(e) => this.setState({word: e})}
        />
        <Button
          className="toDo__button toDo__button_type_create"
          onClick={() => {
            this.onSubmit()
            this.createToDo()
          }}
          title='Create'
        />
        <h2 className="toDo__title">To Do List</h2>
        <ul className="toDo__list">{listItems}</ul>
      </section>
    )
  }

  onSubmit() {
    const {word} = this.state
    console.log(word)
  }

  createToDo() {
    const {toDoList, word} = this.state
    toDoList.push(word)
    this.setState({
      toDoList: toDoList,
      word: ''
    })
  }

  deleteToDo(i) {
    const {toDoList} = this.state
    toDoList.splice(i, 1)
    this.setState({
      toDoList: toDoList,
    })
  }

}

export default ToDo
