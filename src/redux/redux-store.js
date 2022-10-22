import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import postsReducer from "./posts-reducer";
import correspondenceReducer from "./correspondence-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";

const reducers = combineReducers({
  dialogs: dialogsReducer,
  posts: postsReducer,
  correspondence: correspondenceReducer,
  users: usersReducer,
  profile: profileReducer
});

const store = createStore(reducers);

window.store = store; //чтобы было видно в консоли, что сидит в стор

export default store;