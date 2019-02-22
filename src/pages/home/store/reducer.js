import {
  fromJS
} from 'immutable'
import * as actionTypes from "./actionTypes";

const defaultState = fromJS({
  topicList: [],
  recommendList: [],
  writerList: [],
  articleList: [],
  articlePage: 1,
  writerPage: 1,
  showScroll: false
})

const changeData = (state, action) => {
  return state.merge({
    writerList: fromJS(action.writerList),
    recommendList: fromJS(action.recommendList),
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList)
  });
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
      return changeData(state, action);
    case actionTypes.CHANGE_PAGE:
      return state.set('writerPage', action.page);
    case actionTypes.ADD_ARTICLE_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
      });
    case actionTypes.TOGGLE_SHOW_SCROLL:
      return state.set('showScroll', action.flag);
    default:
      return state;
  }
}