import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';
import { addPost, updateNewPostText, getUserProfile } from './../../../../redux/profile-reducer';
import Profile from './Profile.jsx';
// import { withRouter } from "react-router-dom"; // не работает т.к. находимс в классовой компоненте, т.к. Хуки нельзя совмещать с классами, они созданы, чтобы заменить классы.
import { useParams } from 'react-router-dom'; // Используем т.к. нельзя использовать хуки с классами. Обертываем Хук в функцию, чтобы мы могли использовать его в классовой компоненте.

export function withRouter(Children) { //замена HOC
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class ProfileConteiner extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {userId = 2};

        this.props.getUserProfile(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>        
    }
}

const mapStateToProps = (state) => (
    {
        profileData: state.profile.profileData,
        newPostText: state.profile.newPostText,
        profile: state.profile.profile,
    }
)

let AuthRedirectComponent = withAuthRedirect(ProfileConteiner);

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {addPost, updateNewPostText, getUserProfile}) (WithUrlDataContainerComponent);