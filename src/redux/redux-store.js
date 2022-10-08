import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import postsReducer from "./posts-reducer";

const reducers = combineReducers({
  dialogsPage: dialogsReducer,
  postsPage: postsReducer,
});
const store = createStore(reducers);

export default store;
