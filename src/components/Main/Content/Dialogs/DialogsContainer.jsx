import {connect} from 'react-redux';
import Dialogs from './Dialogs.jsx';
import { sendMessageAC, updateNewMessageBodyAC } from './../../../../redux/dialogs-reducer';

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs.dialogs,
        messages: state.dialogs.messages,
        newMessageBody: state.dialogs.newMessageBody
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
        updateNewMessageBody: (text) => {
            dispatch(updateNewMessageBodyAC(text));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Dialogs);
