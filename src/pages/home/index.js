import React, { PureComponent } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import Topic from "./components/Topic";
import Articles from "./components/Articles";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Home extends PureComponent {
  componentDidMount() {
    this.props.handleInputFocus();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }

  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }

  render() {
    const { topicList, recommendList, articleList, writerList } = this.props;

    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://upload.jianshu.io/admin_banners/web_images/4612/1e4eeb1b277034cca932f5e60e46d14b0629073b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />
          <Topic list={topicList} />
          <Articles list={articleList} />
        </HomeLeft>
        <HomeRight>
          <Recommend list={recommendList} />
          <Writer writerList={writerList} />
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }
}

const mapState = state => {
  return {
    topicList: state.getIn(["home", "topicList"]),
    recommendList: state.getIn(["home", "recommendList"]),
    writerList: state.getIn(["home", "writerList"]),
    articleList: state.getIn(["home", "articleList"]),
    showScroll: state.getIn(["home", "showScroll"])
  };
};

const mapDispatch = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.handleGetData());
    },
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 100) {
        dispatch(actionCreators.toggleShowScroll(true));
      } else {
        dispatch(actionCreators.toggleShowScroll(false));
      }
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(Home);
