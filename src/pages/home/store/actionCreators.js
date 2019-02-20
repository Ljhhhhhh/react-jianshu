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

// export const getWriterList = () => {
//   return dispatch => {
//     axios
//       .get("/api/recommendUser.json")
//       .then(res => {
//         const list = res.data.list;
//         dispatch(getList(list));
//       })
//       .catch(err => {
//         console.log(err, "error");
//       });
//   };
// };

const getData = data => ({
  type: actionTypes.GET_DATA,
  data: fromJS(data),
});