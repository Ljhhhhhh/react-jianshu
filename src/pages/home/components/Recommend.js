import React, { PureComponent } from "react";
import { RecommendWrapper, RecommendItem } from "../style";

class Recommend extends PureComponent {
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
