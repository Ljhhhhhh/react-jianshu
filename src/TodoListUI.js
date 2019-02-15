import React from "react";
import { Input, Button, List } from "antd";
// import "antd/dist/antd.css";
const TodoListUI = props => {
  return (
    <div>
      <div style={{ margin: "15px" }}>
        <Input
          value={props.inputValue}
          placeholder="todo info"
          style={{ width: "300px", marginRight: "20px" }}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleAddItem}>
          提交
        </Button>
        <List
          style={{ marginTop: "15px", width: "300px" }}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                props.handleItemClick(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
// class TodoListUI extends Component {
//   render() {
//     return (
//       <div>
//         <div style={{ margin: "15px" }}>
//           <Input
//             value={this.props.inputValue}
//             placeholder="todo info"
//             style={{ width: "300px", marginRight: "20px" }}
//             onChange={this.props.handleInputChange}
//           />
//           <Button type="primary" onClick={this.props.handleAddItem}>
//             提交
//           </Button>
//           <List
//             style={{ marginTop: "15px", width: "300px" }}
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index) => (
//               <List.Item
//                 onClick={index => {
//                   this.props.handleItemClick(index);
//                 }}
//               >
//                 {item}
//               </List.Item>
//             )}
//           />
//         </div>
//       </div>
//     );
//   }
// }

export default TodoListUI;
