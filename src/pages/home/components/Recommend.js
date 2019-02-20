import React, { Component } from "react";
import { RecommendWrapper, RecommendItem } from "../style";

class Recommend extends Component {
  render() {
    return (
      <RecommendWrapper>
        {this.props.list.map(item => {
          return (
            <RecommendItem key={item.get("id")} imgUrl={item.get("imgUrl")} />
          );
        })}
      </RecommendWrapper>
    );
  }
}

export default Recommend;
