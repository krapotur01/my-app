const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
    dialogs: [
        { id: 1, name: 'Джон Уик' },
        { id: 2, name: 'Рита Вратаски' },
        { id: 3, name: 'Кейбл'},
        { id: 4, name: 'Термишнаттор' },
        { id: 5, name: 'Убивашка' },
        { id: 6, name: 'Poteryaska' }
    ],
    messages: [
        { id: 1, message: 'Какие Ваши доказательства' },
        { id: 2, message: 'Найди меня когда проснешься' },
        { id: 3, message: 'Дьявольское отродье' },
        { id: 4, message: 'Кокаинум' },
        { id: 5, message: 'Жизень' }
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageAC = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
