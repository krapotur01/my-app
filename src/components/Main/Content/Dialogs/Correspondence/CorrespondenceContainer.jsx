import {connect} from 'react-redux';
import Correspondence from './Correspondence.jsx';
import { sendMessageAC, updateNewMessageBodyAC } from '../../../../../redux/correspondence-reducer';

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

const CorrespondenceContainer = connect(mapStateToProps, mapDispatchToProps) (Correspondence);

export default CorrespondenceContainer;