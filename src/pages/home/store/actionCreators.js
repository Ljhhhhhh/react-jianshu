import * as actionTypes from "./actionTypes";
import axios from "axios";
import {
  fromJS
} from "immutable";

export const handleGetData = () => {
  return dispatch => {
    axios.get('/api/home.json').then(res => {
      const data = res.data.data;
      console.log('data:', data)
      dispatch(getData(data))
    })
  }
}

export const handleChangePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page,
})

export const getMoreArticle = (page) => {
  return dispatch => {
    axios.get('/api/articles.json?page=' + page).then(res => {
      const result = res.data.data;
      dispatch(addArticleList(result, page + 1))
    })
    // type: actionTypes.GET_MORE_ARTICLE
  }
}

export const toggleShowScroll = flag => ({
  type: actionTypes.TOGGLE_SHOW_SCROLL,
  flag
})

const getData = data => ({
  type: actionTypes.GET_DATA,
  topicList: fromJS(data.topicList),
  recommendList: fromJS(data.recommendList),
  writerList: fromJS(data.writerList),
  articleList: fromJS(data.articleList),
});

const addArticleList = (list, nextPage) => ({
  type: actionTypes.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage,
})