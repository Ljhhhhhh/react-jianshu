import React, { PureComponent } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

class Articles extends PureComponent {
  render() {
    const { getMoreArticle, list, page } = this.props;
    return (
      <div>
        {list.map((item, index) => {
          return (
            <Link key={index} to={"/detail/" + item.get("id")}>
              <ListItem>
                <img src={item.get("imgUrl")} className="pic" alt="" />
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("desc")}</p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LoadMore onClick={() => getMoreArticle(page)}>加载更多</LoadMore>
      </div>
    );
  }
}

const mapState = state => ({
  page: state.getIn(["home", "articlePage"])
});

const mapDispatch = dispatch => {
  return {
    getMoreArticle(page) {
      dispatch(actionCreators.getMoreArticle(page));
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(Articles);
