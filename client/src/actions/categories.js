import Axios from "axios";

const GET_CATEGORIES = "GET_CATEGORIES";

export function getCategories() {
  return (dispatch) => {
    return Axios.get("http://localhost:4000/category")
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        dispatch({ type: GET_CATEGORIES, payload: res });
      });
  };
}
