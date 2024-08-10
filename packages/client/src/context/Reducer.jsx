export const reducer = (state, action) => {
  switch (action.type) {
    case "get":
      return action.payload;
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
};
