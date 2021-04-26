const initialState = {
  data: [],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "favourite/like":
      return { ...state, data: [...state.data, payload] };
    case "favourite/dislike":
      return {
        ...state,
        data: state.data.filter((el) => el.id !== payload.id),
      };
    default:
      return state;
  }
}
