export const postReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_POST":
      return { posts: action.payload };
    default:
      return state;
  }
};
