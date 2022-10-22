import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Profile from './Profile.jsx';
import { addPost, updateNewPostText, setUserProfile } from '../../../../redux/profile-reducer';
   
const mapStateToProps = (state) => (
    {
        profileData: state.profile.profileData,
        newPostText: state.profile.newPostText,
        profile: state.profile.profile,
    }
)

class ProfileConteiner extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>        
    }
}

export default connect(mapStateToProps, {addPost, updateNewPostText, setUserProfile}) (ProfileConteiner);
