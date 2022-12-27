import { connect } from 'react-redux';
import { addPost } from './../../../../../redux/profile-reducer';
import Posts from './Posts.jsx';

const mapStateToProps = (state) => (
    {
        posts: state.profile.posts
    }
)

const mapDispatchToProps = dispatch => {
    return {
        addPost: (newPostText) => {
            dispatch(addPost(newPostText));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Posts)