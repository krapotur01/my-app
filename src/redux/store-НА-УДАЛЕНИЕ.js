import dialogsReducer from "./dialogs-reducer";
import postsReducer from "./posts-reducer";

const store = {
    _state: {
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Джон Уик' },
                { id: 2, name: 'Рита Вратаски' },
                { id: 3, name: 'Кейбл'},
                { id: 4, name: 'Термишнаттор' },
                { id: 5, name: 'Убивашка' }
            ],
            messages: [
                { id: 1, message: 'Какие Ваши доказательства' },
                { id: 2, message: 'Найди меня когда проснешься' },
                { id: 3, message: 'Дьявольское отродье' },
                { id: 4, message: 'Кокаинум' },
                { id: 5, message: 'Жизень' }
            ],
            newMessageBody: ''
        },    
        postsPage: {
            postData: [
                { id: 1, likeCount: 10, name: 'Джон уик', text: 'Не ставь меня в тупик' },
                { id: 2, likeCount: 8, name: 'Терминатор', text: 'Албибк МазаФака' },
                { id: 3, likeCount: 11, name: 'Таксист Убер', text: 'Я приехал, стою на углу' },
                { id: 4, likeCount: 2, name: 'Рита Вратаски', text: 'Найди меня когда проснешься Мать твою' },
                { id: 5, likeCount: 5, name: 'Просто Опастный Тип', text: 'юТю' }
            ],
            newPostText: ''
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {},
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.postsPage = postsReducer(this._state.postsPage, action);

        this._callSubscriber(this._state)
    }
}

export default store;