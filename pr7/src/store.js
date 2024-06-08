import { createStore } from "redux";
import mainReducer from "./services/Reducers/main";

const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store