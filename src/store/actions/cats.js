export const fetchCats = (payload) => (dispatch) => {
  dispatch({ type: "cats/isLoading" });
  dispatch({ type: "cats/error" }, null);
  fetch(
    `${process.env.REACT_APP_BASE_URL}/images/search?limit=16&order=Desc&page=${payload}`
  )
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: "cats/fetch", payload: res });
    })
    .catch((err) => {
      dispatch({ type: "cats/error" }, err);
    })
    .finally(() => {
      dispatch({ type: "cats/isLoading" });
    });
};
