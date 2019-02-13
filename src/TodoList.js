import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import axios from "axios";
import "./style.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  handleInputChange(e) {
    const value = e.target.value;
    // const value = this.input.value;
    this.setState(() => ({
      inputValue: value
    }));
    // this.setState({
    //   inputValue: e.target.value
    // });
  }

  handleBtnClick() {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""
    }));
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ""
    // });
  }

  handleItemDelete(index) {
    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
    // this.setState({
    //   list
    // });
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      );
    });
  }
  componentWillMount() {
    console.log("1:componentWillMount");
  }

  componentDidMount() {
    console.log("3:componentDidMount");
    axios
      .get("/api/todolist", { dataType: "json" })
      .then(res => {
        this.setState(() => {
          return {
            list: [...res.data]
          };
        });
        console.log("result", res.data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("4:shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("5:componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("6:componentDidUpdate");
  }

  render() {
    console.log("2:render");
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul
          ref={ul => {
            this.ul = ul;
          }}
        >
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
