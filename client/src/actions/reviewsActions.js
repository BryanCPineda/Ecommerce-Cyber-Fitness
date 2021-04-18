import Axios from "axios";
import {
  ONE_STAR_REVIEWS,
  TWO_STARS_REVIEWS,
  THREE_STARS_REVIEWS,
  FOUR_STARS_REVIEWS,
  FIVE_STARS_REVIEWS,
  GET_PRODUCT_REVIEWS,
  ADD_REVIEW,
  EDIT_REVIEW,
  DELETE_REVIEW,
  MATCH_REVIEW,
  USER_REVIEWS,
} from "../constants/reviewsConstants";

export function getProductReviews(id) {
  return (dispatch) => {
    return Axios.get(
      `http://localhost:4000/reviews/product/${id}/reviews`
    ).then((res) => {
      dispatch({ type: GET_PRODUCT_REVIEWS, payload: res.data });
    });
  };
}
export function getOneStarReviews(id) {
  return (dispatch) => {
    return Axios.get(
      `http://localhost:4000/reviews/product/${id}/oneStarReviews`
    ).then((res) => {
      dispatch({ type: ONE_STAR_REVIEWS, payload: res.data.count });
    });
  };
}
export function getTwoStarsReviews(id) {
  return (dispatch) => {
    return Axios.get(
      `http://localhost:4000/reviews/product/${id}/twoStarsReviews`
    ).then((res) => {
      dispatch({ type: TWO_STARS_REVIEWS, payload: res.data.count });
    });
  };
}
export function getThreeStarsReviews(id) {
  return (dispatch) => {
    return Axios.get(
      `http://localhost:4000/reviews/product/${id}/threeStarsReviews`
    ).then((res) => {
      dispatch({ type: THREE_STARS_REVIEWS, payload: res.data.count });
    });
  };
}
export function getFourStarsReviews(id) {
  return (dispatch) => {
    return Axios.get(
      `http://localhost:4000/reviews/product/${id}/fourStarsReviews`
    ).then((res) => {
      dispatch({ type: FOUR_STARS_REVIEWS, payload: res.data.count });
    });
  };
}
export function getFiveStarsReviews(id) {
  return (dispatch) => {
    return Axios.get(
      `http://localhost:4000/reviews/product/${id}/fiveStarsReviews`
    ).then((res) => {
      dispatch({ type: FIVE_STARS_REVIEWS, payload: res.data.count });
    });
  };
}
export function addReview(id, review) {
  return (dispatch) => {
    return Axios.post(
      `http://localhost:4000/reviews/product/${id}/review`,
      review
    ).then((res) => {
      dispatch({ type: ADD_REVIEW, payload: res.data });
    });
  };
}
export function editReview(id, review) {
  return (dispatch) => {
    return Axios.put(`http://localhost:4000/reviews/${id}`, review).then(
      (res) => {
        dispatch({ type: EDIT_REVIEW, payload: res.data });
      }
    );
  };
}
export function deleteReview(id) {
  return (dispatch) => {
    return Axios.delete(`http://localhost:4000/reviews/${id}`).then((res) => {
      dispatch({ type: DELETE_REVIEW, payload: res });
    });
  };
}
export function getUserReviews(userId) {
  return (dispatch) => {
    return Axios.get(`http://localhost:4000/reviews/user/${userId}`).then(
      (res) => {
        dispatch({ type: USER_REVIEWS, payload: res.data });
      }
    );
  };
}
