const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
    postData: [
        { id: 1, likeCount: 10, name: 'Джон уик', text: 'Не ставь меня в тупик' },
        { id: 2, likeCount: 8, name: 'Терминатор', text: 'Албибк МазаФака' },
        { id: 3, likeCount: 11, name: 'Таксист Убер', text: 'Я приехал, стою на углу' },
        { id: 4, likeCount: 2, name: 'Рита Вратаски', text: 'Найди меня когда проснешься Мать твою' },
        { id: 5, likeCount: 5, name: 'Просто Опастный Тип', text: 'юТю' }
    ],
    newPostText: ''
}

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost =  {
                id: 6,
                likeCount: 0,
                name: 'Jony',
                text: state.newPostText
            }
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });

export default postsReducer;