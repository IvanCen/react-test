import React from "react";
import './index.css'
import Button from "../UI/Button";
import { Button as ButtonBem } from '@yandex/ui/Button/desktop/bundle'
import Input from "../UI/Input";
import SearchPanel from "../UI/SearchPanel";
import ToDoItem from "./ToDoItem";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      toDoList: [],
      search: '',
      filter: 'all',
    }
  }

  render = () => {
    const {word, toDoList, search, filter} = this.state
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
    const visibleToDoItems = this.filterItems(this.searchItems(listItems, search), filter);

    return (
      <section className='toDo'>
        <SearchPanel
          change={(e) => this.setState({search: e})}
          onFilterChange={this.onFilterChange}
          value={search}
          filter={filter}
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
        <ButtonBem theme='clear' size="l">
          Create
        </ButtonBem>
        <div className='toDo__info-panel'>
          <h2 className="toDo__title">To Do List</h2>
          <span
            className="toDo__info">{needToDo.length} more to do, {importantToDo.length} important, {toDoDone.length} done</span>
        </div>
        <ul className="toDo__list">{visibleToDoItems}</ul>
      </section>
    )
  }

  onFilterChange = (filter) => {
    this.setState({filter})
  }

  filterItems = (toDoList, filter) => {
    switch (filter) {
      case 'all':
        return toDoList;
      case 'active':
        return toDoList.filter((item) => !item.props.toDoData.done);
      case 'done':
        return toDoList.filter((item) => item.props.toDoData.done)
      default:
        return toDoList;
    }
  }

  searchItems = (toDoList, search) => {
    if (search.length === 0) {
      return toDoList
    } else {
      const searchString = search.toLowerCase().trim();
      return toDoList.filter(el => el.props.toDoData.word.toLowerCase().indexOf(searchString) > -1)
    }
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
