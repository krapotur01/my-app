import { usersAPI } from "./../api/api.js";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
  users: [],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.userId) {
            return { ...el, followed: true };
          }
          return el;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.userId) {
            return { ...el, followed: false };
          }
          return el;
        }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_USERS_TOTAL_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};
//Action creators
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (count) => ({
  type: SET_USERS_TOTAL_COUNT,
  count,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

//Thunk creators
export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setCurrentPage(currentPage));
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));

    usersAPI.unfollow(userId).then((response) => {
      if (response.data.resultCode === 0) dispatch(unfollowSuccess(userId));
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export const follow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));

  usersAPI.follow(userId).then((response) => {
    if (response.data.resultCode === 0) dispatch(followSuccess(userId));
    dispatch(toggleFollowingProgress(false, userId));
  });
};

export default usersReducer;
