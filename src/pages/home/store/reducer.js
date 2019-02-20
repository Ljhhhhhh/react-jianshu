// import * as actionTypes from './actionTypes'
import {
  fromJS
} from 'immutable'
import * as actionTypes from "./actionTypes";

const defaultState = fromJS({
  topicList: [],
  recommendList: [],
  writerList: [],
  writerPage: 1,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
      console.log('1111', action.data.get('articleList').toJS());
      return state.merge({
        writerList: action.data.get('writerList'),
        recommendList: action.data.get('recommendList'),
        topicList: action.data.get('topicList'),
        articleList: action.data.get('articleList')
      });
    case actionTypes.CHANGE_PAGE:
      return state.set('writerPage', action.page)
    default:
      return state;
  }
}