const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "cats/fetch":
      return { ...state, data: [...state.data, ...payload] };
    case "cats/isLoading":
      return { ...state, isLoading: !state.isLoading };
    case "cats/error":
      return { ...state, error: payload };
    default:
      return state;
  }
}
