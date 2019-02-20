import React, { Component } from "react";
import { ListItem, ListInfo } from "../style";

class Articles extends Component {
  render() {
    return (
      <div>
        {this.props.list.map(item => {
          return (
            <ListItem key={item.get("id")}>
              <img src={item.get("imgUrl")} className="pic" alt="" />
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="desc">{item.get("desc")}</p>
              </ListInfo>
            </ListItem>
          );
        })}
      </div>
    );
  }
}

export default Articles;
