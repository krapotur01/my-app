const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    profileData: [
        { id: 1, likeCount: 10, name: 'Джон уик', text: 'Не ставь меня в тупик' },
        { id: 2, likeCount: 8, name: 'Терминатор', text: 'Албибк МазаФака' },
        { id: 3, likeCount: 11, name: 'Таксист Убер', text: 'Я приехал, стою на углу' },
        { id: 4, likeCount: 2, name: 'Рита Вратаски', text: 'Найди меня когда проснешься Мать твою' },
        { id: 5, likeCount: 5, name: 'Просто Опастный Тип', text: 'юТю' }
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                profileData: [...state.profileData, {
                    id: 6, 
                    likeCount: 0,  
                    name: 'Jony', 
                    text: state.newPostText} ]
            }
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.text}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;