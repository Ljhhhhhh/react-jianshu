import React, { Component } from "react";
import { WriterWrapper, WriterItem, WriterHeader } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";

class Writer extends Component {
  render() {
    const { writerList, writerPage, changeList } = this.props;
    let currentList = [];
    const pageSize = 5;
    const jsWirterList = writerList.toJS();
    const writeTotal = jsWirterList.length;
    if (jsWirterList.length) {
      for (
        let i = (writerPage - 1) * pageSize;
        i < writerPage * pageSize;
        i++
      ) {
        currentList.push(
          <WriterItem key={jsWirterList[i].id}>
            <img src={jsWirterList[i].avatar_source} alt="" />
            <div className="info">
              <h5> {jsWirterList[i].nickname} </h5>{" "}
              <p>
                {" "}
                {jsWirterList[i].total_likes_count}
                喜欢{" "}
              </p>{" "}
            </div>{" "}
          </WriterItem>
        );
      }
    }
    return (
      <WriterWrapper>
        <WriterHeader>
          <span> 推荐作者 </span>{" "}
          <span
            className="btn"
            onClick={() => {
              changeList(writerPage, writeTotal, pageSize);
            }}>
            换一批{" "}
          </span>{" "}
        </WriterHeader>{" "}
        {currentList}{" "}
      </WriterWrapper>
    );
  }
}

const mapState = state => ({
  writerPage: state.getIn(["home", "writerPage"])
});

const mapDispatch = dispatch => ({
  changeList(page, total, pageSize) {
    if (page * pageSize >= total) {
      dispatch(actionCreators.handleChangePage(1));
    } else {
      dispatch(actionCreators.handleChangePage(page + 1));
    }
  },
  getWriterList() {
    dispatch(actionCreators.getWriterList());
  }
});

export default connect(
  mapState,
  mapDispatch
)(Writer);
