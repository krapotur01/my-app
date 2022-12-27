import { profileAPI } from "./../api/api.js";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
  posts: [
    { id: 1, likeCount: 10, text: "Не ставь меня в тупик" },
    { id: 2, likeCount: 8, text: "Албибк МазаФака" },
    { id: 3, likeCount: 11, text: "Я приехал, стою на углу" },
    { id: 4, likeCount: 2, text: "Найди меня когда проснешься Мать твою" },
    { id: 5, likeCount: 5, text: "юТю" },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        likeCount: 0,
        text: action.newPostText,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const updateProfile =
  (fullName, aboutMe, lookingForAJobDescription, facebook) =>
  async (dispatch) => {
    const profileInfo = {
      fullName,
      aboutMe,
      lookingForAJobDescription,
      contacts: { facebook },
      photos: {
        large: null,
      },
    };
    const response = await profileAPI.updateProfileInfo(profileInfo);

    if (response.data.resultCode === 0) {
      dispatch(setUserProfile(profileInfo));
    }
  };

export const setStatus = (status) => ({ type: SET_STATUS, status });
export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
