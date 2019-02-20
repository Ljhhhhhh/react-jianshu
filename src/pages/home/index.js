import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Topic from "./components/Topic";
import Articles from "./components/Articles";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Home extends Component {
  render() {
    const { topicList, recommendList, articleList, writerList } = this.props;
    // const topicListJs = topicList.toJS();
    // const recommendListJs = recommendList.toJS();
    // const writerListJs = writerList.toJS();
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://upload.jianshu.io/admin_banners/web_images/4612/1e4eeb1b277034cca932f5e60e46d14b0629073b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />
          <Topic list={topicList} />
          {/* <Articles list={articleList} /> */}
        </HomeLeft>
        <HomeRight>
          <Recommend list={recommendList} />
          <Writer writerList={writerList} />
        </HomeRight>
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.handleInputFocus();
  }
}

const mapState = state => {
  console.log(state.getIn(["home", "articleList"]).toJS());
  return {
    topicList: state.getIn(["home", "topicList"]),
    recommendList: state.getIn(["home", "recommendList"]),
    writerList: state.getIn(["home", "writerList"]),
    articleList: state.getIn(["home", "articleList"])
  };
};

const mapDispatch = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.handleGetData());
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(Home);
