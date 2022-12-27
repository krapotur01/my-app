import {connect} from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';
import Dialogs from './Dialogs.jsx';
import { sendMessageAC } from './../../../../redux/dialogs-reducer';

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs.dialogs,
        messages: state.dialogs.messages
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageAC(newMessageBody));
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), 
    withAuthRedirect
    ) (Dialogs)
