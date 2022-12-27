import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { compose } from "redux"; //for REDUX extension in Chrome browser
import thunkMiddleware from "redux-thunk";
import dialogsReducer from "./dialogs-reducer";
import postsReducer from "./posts-reducer";
import correspondenceReducer from "./correspondence-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
// import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  dialogs: dialogsReducer,
  posts: postsReducer,
  correspondence: correspondenceReducer,
  users: usersReducer,
  profile: profileReducer,
  auth: authReducer,
  // form: formReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window._store_ = store; //чтобы было видно в консоли, что сидит в стор

export default store;
