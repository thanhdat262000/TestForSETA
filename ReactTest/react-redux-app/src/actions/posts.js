import { getPosts } from "../api/index.js";
export const getPostAction = () => async (dispatch) => {
  const { data } = await getPosts();
  dispatch({ type: "GET_POST", payload: data });
};
