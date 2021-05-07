import { combineReducers } from "redux";
import { cameraReducer } from "./cameraReducer";
import { ViewImageReducer } from "./ViewImageReducer";
import { authReducer } from "./authReducer";

const reducer = combineReducers({
  cameraImage: cameraReducer,
  viewImage: ViewImageReducer,
  auth: authReducer,
});

export default reducer;
