const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

const initialState = {
    messages: [
        {id: 1, userName: 'Терминатор', message: 'Тут первое соообщение', date: '20.09.22', country: 'Russia', city: 'Moscow'},
        {id: 2, userName: 'Терминатор', message: 'Тут второе соообщение', date: '25.09.22', country: 'Russia', city: 'Omsk'},
        {id: 3, userName: 'Терминатор', message: 'Тут третье соообщение', date: '27.09.22', country: 'Russia', city: 'Tomsk'},
        {id: 4, userName: 'Терминатор', message: 'Тут четвертое соообщение', date: '30.09.22', country: 'Russia', city: 'Ogni'},
        {id: 5, userName: 'Терминатор', message: 'Тут пятое соообщение', date: '04.10.22', country: 'Russia', city: 'Mahachkala'}
    ],
    newMessageBody: ''
}

const correspondenceReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {
                    id: 6, 
                    userName: 'John Wick', 
                    message: body, 
                    date: '24.10.22', 
                    country: 'Russia', 
                    city: 'Izberbash'}]
            };
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.text
            };
        default:
            return state;
    }
}

export const sendMessageAC = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyAC = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, text: text });

export default correspondenceReducer;
