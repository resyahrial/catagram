export const like = (payload) => (dispatch) => {
  dispatch({ type: "favourite/like", payload });
};

export const dislike = (payload) => (dispatch) => {
  dispatch({ type: "favourite/dislike", payload });
};
