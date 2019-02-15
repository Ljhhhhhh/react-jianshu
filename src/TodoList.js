import React from "react";
import { connect } from "react-redux";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction
} from "./store/actionCreators";

const TodoList = props => {
  const {
    inputValue,
    list,
    changeInputValue,
    handleClick,
    handleDeleteItem
  } = props;
  return (
    <div>
      <input type="text" value={inputValue} onChange={changeInputValue} />
      <button onClick={handleClick}>提交</button>
      <ul>
        {list.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              handleDeleteItem(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

const mapDispatchToProps = dispath => {
  return {
    changeInputValue(e) {
      const action = getInputChangeAction(e.target.value);
      dispath(action);
    },
    handleClick() {
      const action = getAddItemAction();
      dispath(action);
    },
    handleDeleteItem(index) {
      const action = getDeleteItemAction(index);
      dispath(action);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
