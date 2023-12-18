import {getPostsFailureActionCreator, getPostsReceiveActionCreator, getPostsRequestActionCreator} from "./actions";
import {GET_POSTS_REQUEST} from "./types";

const fetchPost = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_POSTS_REQUEST
    })
    try {
      const req = await fetch('https://jsonplaceholder.typicode.com/posts')
      const parsedData = await req.json()
      dispatch(getPostsReceiveActionCreator(parsedData))
    } catch (e) {
      dispatch(getPostsFailureActionCreator(e))
    }
  }
}

export default {
  fetchPost
}