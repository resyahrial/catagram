export const fetchBreeds = () => (dispatch) => {
  dispatch({ type: "breeds/isLoading" });
  dispatch({ type: "breeds/error" }, null);
  fetch(`${process.env.REACT_APP_BASE_URL}/breeds`, {
    headers: {
      "x-api-key": process.env.REACT_APP_API_KEY,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: "breeds/fetch", payload: res });
    })
    .catch((err) => {
      dispatch({ type: "breeds/error" }, err);
    })
    .finally(() => {
      dispatch({ type: "breeds/isLoading" });
    });
};
