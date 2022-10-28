import {connect} from 'react-redux';
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

export default connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);
