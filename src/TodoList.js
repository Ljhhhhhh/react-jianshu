import React, { Component } from "react";
import "antd/dist/antd.css";
import store from "./store/";
import {
  getInputChangeAction,
  getAddTodoItem,
  getDeleteTodoItem,
  getInitList
} from "./store/actionCreators";
import TodoListUI from "./TodoListUI";
import axios from "axios";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    // this.handleItemClick = this.handleItemClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleAddItem={this.handleAddItem}
        list={this.state.list}
        handleItemClick={this.handleItemClick}
      />
    );
  }
  componentDidMount() {
    // const action = getTodoList();
    const action = getInitList();
    store.dispatch(action);
    // axios
    //   .get("/api/todolist")
    //   .then(res => {
    //     const data = res.data;
    //     const action = initListAction(data);
    //     store.dispatch(action);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  handleItemClick(index) {
    const action = getDeleteTodoItem(index);
    store.dispatch(action);
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleAddItem() {
    const action = getAddTodoItem();
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }
}

export default TodoList;
