import React from "react";
import './index.css'
import Button from "../UI/Button";
import Input from "../UI/Input";
import SearchPanel from "../UI/SearchPanel";
import classNames from "classnames";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      toDoList: [],
    }
  }

  render = () => {
    const {word, toDoList} = this.state
    const toDoDone = this.filterToDo('toDoDone')
    const importantToDo = this.filterToDo('importantToDo')
    const needToDo = this.filterToDo()
    const listItems = toDoList.map((toDo, index) =>
      <li className="toDo__item" data-id={index + 1} key={index}>
        <div
          className={classNames('toDo__text-container',
            {'toDo__text-container_theme_grass': toDo.important},
            {'toDo__text-container_theme_crossed-out': toDo.done},
          )}
          onClick={() => this.toggleParamToDoItem(index, 'done')}
        >
          <span className="toDo__index">{index + 1}.</span>
          <span className="toDo__text">{toDo.word}</span>
        </div>
        <div className="toDO__button-container">
          <Button
            className="toDo__button toDo__button_type_delete"
            onClick={() => this.deleteToDo(index)}
            title='X'
          >
          </Button>
          <Button
            className={classNames('toDo__button', 'toDo__button_type_important', {'toDo__button_active': toDo.important})}
            onClick={() => this.toggleParamToDoItem(index, 'important')}
            title='!'
          >
          </Button>
        </div>
      </li>
    );
    return (
      <section className='toDo'>
        <SearchPanel/>
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
        <div className='toDo__info-panel'>
          <h2 className="toDo__title">To Do List</h2>
          <span
            className="toDo__info">{needToDo.length} more to do, {importantToDo.length} important, {toDoDone.length} done</span>
        </div>
        <ul className="toDo__list">{listItems}</ul>
      </section>
    )
  }

  filterToDo = (whatFilterReturn) => {
    const {toDoList} = this.state
    const toDoDone = []
    const needToDo = []
    const importantToDo = []

    toDoList.forEach(el => {
      if (el.important) {
        importantToDo.push(el)
      }
      if (el.done) {
        toDoDone.push(el)
      } else {
        needToDo.push(el)
      }
    })

    if (whatFilterReturn === 'importantToDo') {
      return importantToDo
    } else if (whatFilterReturn === 'toDoDone') {
      return toDoDone
    } else {
      return needToDo
    }
  }

  onSubmit = () => {
    const {word} = this.state
    console.log(word, this.name)
  }

  createToDo = () => {
    const {toDoList, word} = this.state
    if (word !== '') {
      toDoList.push({word, important: false, done: false})
      this.setState(({toDoList}) => {
        return {
          toDoList,
          word: ''
        }
      })
    }

  }

  deleteToDo = (index) => {
    const {toDoList} = this.state

    // нельзя изменять state напрямую, нужно через копии
    // toDoList.splice(index, 1)

    const newArr = [
      ...toDoList.slice(0,  index),
      ...toDoList.slice(index + 1)];

    this.setState(() => {
      return {
        toDoList: newArr,
      }
    })
  }

  toggleParamToDoItem = (index, param) => {
    const {toDoList} = this.state
    toDoList[index][param] = !toDoList[index][param]
    this.setState(({toDoList}) => {
      return {
        toDoList,
      }
    })
  }

}

export default ToDo
