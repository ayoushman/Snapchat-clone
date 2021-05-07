const initialState = {
  viewedImage: null,
};

export const ViewImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VIEW_IMAGE":
      return { ...state, viewedImage: action.payload };
    case "RESET_IMAGE":
      return { ...state, viewedImage: null };

    default:
      return state;
  }
};
