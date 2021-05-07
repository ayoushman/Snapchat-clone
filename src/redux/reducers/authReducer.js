const initialstate = {
  user: null,
};

export const authReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, user: action.payload };

    case "LOGOUT_USER":
      return { ...state, user: null };

    default:
      return state;
  }
};
