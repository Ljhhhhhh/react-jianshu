import * as actionTypes from "./actionTypes";
import axios from "axios";


const changeDetail = (title, content) => ({
  type: actionTypes.CHANGE_DETAIL,
  title,
  content
})

export const getDetail = () => {
  return dispatch => {
    axios.get('/api/detail.json').then(res => {
      const data = res.data.data;
      dispatch(changeDetail(data.title, data.content))
    }).catch(err => {
      alert('detail 接口获取错误')
    })
  }
}