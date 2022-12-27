import { connect } from 'react-redux';
import { compose } from 'redux';
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

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect) (Posts)
