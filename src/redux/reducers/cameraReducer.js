/* eslint-disable no-unused-expressions */
const initialstate = {
  image: null,
};

export const cameraReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "CAPTURE_IMAGE":
      return { ...state, image: action.payload };

    case "RESET_IMAGE":
      return { ...state, image: null };

    default:
      return state;
  }
};
