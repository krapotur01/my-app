const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let newUserName = {
                id: 6,
                name: 'Осталовиатор'
            }
            let newMessage =  {
                id: 6,
                message: state.newMessageBody
            }
            state.dialogs.push(newUserName);
            state.messages.push(newMessage);
            state.newMessageBody = '';
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.text;
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, text: text });

export default dialogsReducer;
