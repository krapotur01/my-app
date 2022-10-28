import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';
import Posts from './Posts.jsx';
import { addPostAC, updateNewPostTextAC } from './../../../../redux/posts-reducer';
    
const mapStateToProps = (state) => {
    return {
        postData: state.posts.postData,
        newPostText: state.posts.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextAC(text));
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Posts);

export default connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);
