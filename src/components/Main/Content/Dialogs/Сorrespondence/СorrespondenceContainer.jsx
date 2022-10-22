import {connect} from 'react-redux';
import Сorrespondence from './Сorrespondence.jsx';
import { sendMessageAC, updateNewMessageBodyAC } from './../../../../../redux/correspondence-reducer';

const mapStateToProps = (state) => {
    return {
        messages: state.correspondence.messages,
        newMessageBody: state.correspondence.newMessageBody
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

const СorrespondenceContainer = connect(mapStateToProps, mapDispatchToProps) (Сorrespondence);

export default СorrespondenceContainer;