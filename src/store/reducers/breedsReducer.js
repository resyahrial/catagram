const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "breeds/fetch":
      return { ...state, data: [...state.data, ...payload] };
    case "breeds/isLoading":
      return { ...state, isLoading: !state.isLoading };
    case "breeds/error":
      return { ...state, error: payload };
    default:
      return state;
  }
}
