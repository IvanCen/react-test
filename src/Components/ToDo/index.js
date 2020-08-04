import React from "react";
import './index.css'
import Button from "../UI/Button";
import Input from "../UI/Input";
import SearchPanel from "../UI/SearchPanel";
import ToDoItem from "./ToDoItem";
import classNames from "classnames";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      search: '',
      toDoList: [],
      filteredToDoList: [],
    }
  }

  render = () => {
    const {word, search, toDoList, filteredToDoList} = this.state
    const toDoDone = this.filterToDo('toDoDone')
    const importantToDo = this.filterToDo('importantToDo')
    const needToDo = this.filterToDo()
    const listItems = toDoList.map((toDo, index) =>
      <ToDoItem
        key={index}
        toDoData={toDo}
        index={index}
        toggleParamToDoItem={this.toggleParamToDoItem}
        deleteToDo={this.deleteToDo}
      />
    );
    return (
      <section className='toDo'>
        <SearchPanel
          value={search}
          change={(e) => {
            this.setState({search: e})
            this.searchItems()
          }}
        />
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

  searchItems = () => {
    const {search, toDoList} = this.state
    const searchString = search.toLowerCase().trim();
    const filteredArr = toDoList.filter(el => el.word.toLowerCase().indexOf(searchString) > -1)
    console.log(filteredArr)
    this.setState(() => {
      return {
        toDoList: filteredArr,
      }
    })
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
      const newToDoItem = {word, important: false, done: false}
      const newToDoList = [...toDoList, newToDoItem]
      this.setState(() => {
        return {
          toDoList: newToDoList,
          word: '',
        }
      })
    }

  }

  deleteToDo = (index) => {
    const {toDoList} = this.state

    // нельзя изменять state напрямую, нужно через копии
    // toDoList.splice(index, 1)

    const newArr = [
      ...toDoList.slice(0, index),
      ...toDoList.slice(index + 1)];

    this.setState(() => {
      return {
        toDoList: newArr,
      }
    })
  }

  toggleParamToDoItem = (index, param) => {
    const {toDoList} = this.state
    const oldItem = toDoList[index]
    const newItem = {...oldItem, [param]: !oldItem[param]}
    const newArr = [
      ...toDoList.slice(0, index),
      newItem,
      ...toDoList.slice(index + 1)];
    this.setState(() => {
      return {
        toDoList: newArr,
      }
    })
  }

}

export default ToDo
